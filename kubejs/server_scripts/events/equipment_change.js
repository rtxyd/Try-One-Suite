/**
 * @relatedClass
 *  'net.minecraft.world.effect.MobEffects'
 *  'net.minecraft.world.effect.MobEffectInstance'
 *  'net.minecraft.world.entity.EquipmentSlot$Type'
 */

NativeEvents.onEvent('net.neoforged.neoforge.event.entity.living.LivingEquipmentChangeEvent', e => {
    const entity = e.getEntity()

    if(!entity) return
    else if(!entity.isPlayer()) return
    const slot = e.getSlot()
    if (slot.getType() === needClass.EquipmentSlotType.HAND) return
    const to = e.getTo() //ItemStack
    const toId = to.getId()
    const specialSuite = specialSuiteMap.get(String(toId))
    if (specialSuite) {
        return specialSuite.trigger()
    }
    const slotFlag = slot.getFilterFlag()
    const armorItems = entity.getArmorSlots()
    let head;
    let chest;
    let legs;
    let boots;
    let isWearingFullSet;
    if (slotFlag === 4) { // 4 = 头盔，3 = 胸甲，2 = 裤子，1 = 靴子
        head = headMap.get(String(toId))
        entity.tell(`头盔：${typeof 'minecraft:diamond_helmet'}, ${typeof toId}, ${head}`)
        if (head) {
            chest = chestplateMap.get(String(armorItems[2].getId()))
            legs = legsMap.get(String(armorItems[1].getId()))
            boots = bootsMap.get(String(armorItems[0].getId()))
        } else {
            entity.tell(`头盔：${toId}`)
        }
    }
    if (slotFlag === 3) { // 胸甲槽
        chest = chestplateMap.get(String(toId))
        if (chest) {
            head = headMap.get(String(armorItems[3].getId()))
            legs = legsMap.get(String(armorItems[1].getId()))
            boots = bootsMap.get(String(armorItems[0].getId()))
        } else {
            entity.tell(`胸甲：${toId}`)
        }
    }
    if (slotFlag === 2) { // 裤子槽
        legs = legsMap.get(String(toId))
        if (legs) {
            head = headMap.get(String(armorItems[3].getId()))
            chest = chestplateMap.get(String(armorItems[2].getId()))
            boots = bootsMap.get(String(armorItems[0].getId()))
        } else {
            entity.tell(`裤子：${toId}`)
        }
    }
    if (slotFlag === 1) { // 靴子槽
        boots = bootsMap.get(String(toId))
        if (boots) {
            head = headMap.get(String(armorItems[3].getId()))
            chest = chestplateMap.get(String(armorItems[2].getId()))
            legs = legsMap.get(String(armorItems[1].getId()))
        } else {
            entity.tell(`靴子：${toId}`)
        }
    }

    isWearingFullSet = head && head === chest && chest === legs && legs === boots
    // // 这里可以添加更多的装备槽检测逻辑
    const effectDuration = 200  // 10秒（单位：tick）
    const effectToApply = new needClass.MobEffectInstance(needClass.MobEffects.DOLPHINS_GRACE, effectDuration, 0, false, false)
    if (isWearingFullSet) {
        entity.addEffect(effectToApply)
        entity.tell(`检测玩家装备4`)
        console.log(`检测玩家装备4`)
        // 可以添加更多效果或执行其他操作
    } else {
        entity.tell(`检测玩家装备5`)
        console.log(`检测玩家装备5`)
        // 如果脱掉装备则移除效果
        entity.removeEffect(effectToApply.getEffect())
    }
    // 这里可以添加更多的装备槽检测逻辑
    // 例如检测主手、副手等
})