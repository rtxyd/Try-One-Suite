// priority: 89
// type: server

/**
 * @releatedClass
 * TickDuration: Java.loadClass('dev.latvian.mods.kubejs.util.TickDuration'),
 * AttributeModifier: Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier'),
 * ResourceLocation: Java.loadClass('net.minecraft.resources.ResourceLocation'),
 * Cast: Java.loadClass('dev.latvian.mods.kubejs.util.Cast'),
 */

/**
 * @loadAfter 90-HandItemLogic
 */

function EnergySword() {
  const modifier_1 = new needClass.AttributeModifier(
    needClass.ResourceLocation.fromNamespaceAndPath($KEY,"energy_sword_modifier_1"),
    4.0,
    needClass.AttributeModifier.Operation.ADD_VALUE
  )
  const modifier_2 = new needClass.AttributeModifier(
    needClass.ResourceLocation.fromNamespaceAndPath($KEY,"energy_sword_modifier_2"),
    -0.3,
    needClass.AttributeModifier.Operation.ADD_VALUE
  )

  // 调用父类构造函数
  HandItemLogic.call(this, 
      6,      // damage
      true,   // releaseUsing
      TypedArrayList.of(needClass.AttributeModifier, modifier_1, modifier_2), 
      (attacker, weaponItemStack) => {  // triggerFunc
        console.log(`${attacker}, ${weaponItemStack}`)
          console.log(`eternal_starlight:energy_sword: trigger`)

          if(attacker.persistentData.removeOnAfterHurt) return

          const weaponItem = weaponItemStack.getItem()
          const useDuration = weaponItem.getUseDuration(weaponItemStack, attacker)
          const ticksLeft = attacker.getUseItemRemainingTicks()

          attacker.tell(`检测武器蓄力`)

          if(useDuration - ticksLeft < 10 ) return

          attacker.tell(`武器攻击特效开始 ${$CRIT_CHA}`)
          const attrIns_1 = attacker.getAttribute($CRIT_CHA)
          const attrIns_2 = attacker.getAttribute($CRIT_DAM)
          try {
              attrIns_1.addTransientModifier(modifier_1)
              attrIns_2.addTransientModifier(modifier_2)
              attacker.getServer().scheduleInTicks(10, callback => {
                  if(!attacker) return
                  attrIns_1['removeModifier(net.minecraft.world.entity.ai.attributes.AttributeModifier)'](modifier_1)
                  attrIns_2['removeModifier(net.minecraft.world.entity.ai.attributes.AttributeModifier)'](modifier_2)
                  attacker.tell(`触发了`)
              })
          } catch (error) {
              attacker.tell(error)
          }

          attacker.persistentData.removeOnAfterHurt = {attr: ['g_crit_cha', 'g_crit_dam'], modi: 'energy_sword_modifier'}

          attacker.tell(Text.gold('获得400%暴击率提升!'))
      }
  )
}

// 设置原型继承
EnergySword.prototype = Object.create(HandItemLogic.prototype)
EnergySword.prototype.constructor = EnergySword

// 创建实例
const energySword = new EnergySword()