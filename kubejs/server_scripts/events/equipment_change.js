/**
 * @relatedClass
 *  'net.minecraft.world.effect.MobEffects'
 *  'net.minecraft.world.effect.MobEffectInstance'
 *  'net.minecraft.world.entity.EquipmentSlot$Type'
 */

NativeEvents.onEvent("net.neoforged.neoforge.event.entity.living.LivingEquipmentChangeEvent", e => {
    // const time1 = Date.now()

    const entity = e.getEntity()

    if (!entity) return
    else if (!entity.isPlayer()) return

    const slot = e.getSlot()
    const pUUID = entity.getUuid()
    const stringUUID = pUUID.toString()
    const pWarpper = allPlayerWrapper.get(pUUID)
    const aValue = pWarpper.data.fullArmors.value
    if (!aValue && aValue !== -1 && slot.getType() === needClass.EquipmentSlot$Type.HAND) {
        return
        const to = e.getTo() //ItemStack
        const toId = to.getId()
        const stringId = String(toId)
        if (stringId.startWith(pWarpper.itemSurfix)) {
        }
    }
    const to = e.getTo() //ItemStack
    const toId = to.getId()
    // const specialSuite = specialSuiteMap.get(String(toId))
    // if (specialSuite) {
    //     // trigger 应该调用 toId检测当前换上的装备？
    //     return specialSuite.trigger()
    // }
    const slotFlag = slot.getFilterFlag()
    const armorItems = entity.getArmorSlots()
    // const slotArray = [4, 3, 2, 1, 0]
    let head
    let chest
    let legs
    let boots
    let isWearingFullSet
    switch (
        slotFlag // 4 = 头盔，3 = 胸甲，2 = 裤子，1 = 靴子
    ) {
        case 4: // 头盔槽
            head = headMap.get(String(toId))
            // entity.tell(`头盔：${typeof 'minecraft:diamond_helmet'}, ${typeof toId}, ${head}`)
            break

        case 3: // 胸甲槽
            chest = chestplateMap.get(String(toId))
            break

        case 2: // 裤子槽
            legs = legsMap.get(String(toId))
            break

        case 1: // 靴子槽
            boots = bootsMap.get(String(toId))
            break

        default:
            break
    }

    if (head || chest || legs || boots) {
        head = head || headMap.get(String(armorItems[3].getId()))
        chest = chest || chestplateMap.get(String(armorItems[2].getId()))
        legs = legs || legsMap.get(String(armorItems[1].getId()))
        boots = boots || bootsMap.get(String(armorItems[0].getId()))
    }

    // entity.tell(head)
    // entity.tell(chest)
    // entity.tell(legs)
    // entity.tell(boots)
    isWearingFullSet = head && head === chest && chest === legs && legs === boots

    // entity.persistentData.isWearingFullSet = isWearingFullSet;

    const effectDuration = 200 // 10秒（单位：tick）
    const amplifier = 0
    const effectToApply = new needClass.MobEffectInstance(needClass.MobEffects.DOLPHINS_GRACE, effectDuration, 0, false, false)
    if (isWearingFullSet) {
        // 如何加入新的检测机制以防过多的定时事件
        entity.addEffect(effectToApply)

        // if (!entity.persistentData.hasScheduledSetCheck) {
        if (!PlayerData.fullArmors[stringUUID]) {
            entity.getServer().scheduleRepeatingInTicks(100, callback => {
                console.log("进入自循环检测阶段")
                if (entity.isRemoved() || !PlayerData.fullArmors[stringUUID]) {
                    PlayerData.fullArmors[stringUUID] = false
                    return callback.clear()
                }
                // entity.persistentData.hasScheduledSetCheck = true
                // let holder_Effect = effectToApply.getEffect()
                // let effectInstance = entity.getEffect(holder_Effect)
                // if (effectInstance && effectInstance.getAmplifier() > amplifier ) return
                entity.addEffect(new needClass.MobEffectInstance(needClass.MobEffects.DOLPHINS_GRACE, effectDuration, 0, false, false))
            })
            PlayerData.fullArmors[stringUUID] = true
        }
        entity.tell(`检测玩家装备4`)
        // console.log(`检测玩家装备4`)
        // 可以添加更多效果或执行其他操作
    } else {
        entity.tell(`检测玩家装备5`)
        // console.log(`检测玩家装备5`)
        // 如果脱掉装备则移除效果
        PlayerData.fullArmors[stringUUID] = false
        entity.removeEffect(effectToApply.getEffect())
    }
    // console.log(Date.now() - time1);

    // 这里可以添加更多的装备槽检测逻辑
    // 例如检测主手、副手等
})
