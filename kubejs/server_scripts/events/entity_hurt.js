/**
 * @relatedClass
 * Dodge: Java.loadClass('com.alrex.parcool.common.action.impl.Dodge')
 * Parkourability: Java.loadClass('com.alrex.parcool.common.action.Parkourability'),
 */

NativeEvents.onEvent("net.neoforged.neoforge.event.entity.living.LivingEntityUseItemEvent$Stop", e => {
    const entity = e.getEntity()
    if (!entity) return
    else if (!entity.isPlayer()) return

    const weaponItemStack = entity.getMainHandItem()
    entity.tell("武器检测开始")
    const weapon = String(weaponItemStack.getId())
    const config = WEAPON_HANDLERS.get(weapon)
    entity.tell("获取武器成功")
    if (config) {
        //   e.amount = config.damage; // 数值类型
        entity.tell("武器特性生效!")
        if (config.isReleaseUsing()) {
            config.trigger(entity, weaponItemStack)
            return
        }
        config.trigger(entity) // 函数类型
    }
    if (entity.persistentData.holdingSword === "1b") {
        // 读取持久化数据
        // e.amount *= 1.5; // 增加50%伤害
        entity.tell("钻石剑强化生效!")
    }
})

// NativeEvents.onEvent('net.neoforged.neoforge.event.entity.player.AttackEntityEvent', e =>{
// })

NativeEvents.onEvent("net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post", e => {
    const entity = e.source.getActual()
    if (!entity) return
    else if (!entity.isPlayer()) return
    // catOverridesMap.clear()

    entity.tell(`准备检测玩家数据`)
    if (entity.persistentData.removeOnAfterHurt) {
        entity.tell(`玩家数据生效，准备移除效果`)
        delete entity.persistentData.removeOnAfterHurt
        entity.tell("已移除效果")
    }
})
// ServerEvents.tick(e =>{
//   const entity = e.getServer().players.forEach(player => {

//   })
// })
NativeEvents.onEvent("net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent", e => {
    const entity = e.getEntity()
    try {
        entity.tell(`检测是否闪避`)
        if (!entity) return
        else if (!entity.isPlayer()) return

        let bool = needClass.Parkourability.get(entity).get(needClass.Dodge).isDoing()
        if (bool) {
            entity.tell(`闪避中`)
            e.setCanceled(true)
        } else {
            entity.tell(`未闪避`)
        }
    } catch (error) {
        entity.tell(error)
    }
})
