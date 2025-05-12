// priority: 99
// type: startup

function InitLootCategories() {
    let RING = (function() {
        let slot = 'ring'
        let path = slot
        let ringSlot = ApotheosisRegister.registerCurioSlot(slot)
        let ringGroup = ApotheosisRegister.registSlotGroup(path, ringSlot)
        let ringCategory = ApotheosisRegister.registerLootCategory(path ,t => t['is(net.minecraft.tags.TagKey)'](CuriosTags.RING), ringGroup)
    })()
    let NECKLACE = (function() {
        let slot = 'necklace'
        let path = slot
        let necklaceSlot = ApotheosisRegister.registerCurioSlot(slot)
        let necklaceGroup = ApotheosisRegister.registSlotGroup(path, necklaceSlot)
        let necklaceCategory = ApotheosisRegister.registerLootCategory(path ,t => t['is(net.minecraft.tags.TagKey)'](CuriosTags.NECKLACE), necklaceGroup)
    })()
    let SPELLBOOK = (function() {
        let slot = 'spellbook'
        let path = slot
        let spellbookSlot = ApotheosisRegister.registerCurioSlot(slot)
        let spellbookGroup = ApotheosisRegister.registSlotGroup(path, spellbookSlot)
        const tag = TagKey.create(Registries.ITEM, needClass.ResourceLocation.fromNamespaceAndPath("curios", "spellbook"))
        let spellbookCategory = ApotheosisRegister.registerLootCategory(path ,t => t['is(net.minecraft.tags.TagKey)'](tag), spellbookGroup)
    })()
    let GATLING = (function() {
        let path = 'gatling'
        let gatlingGroup = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let gatlingCategory = ApotheosisRegister.registerLootCategory(path ,t => t.getItem() instanceof MinigunItem, gatlingGroup)
    })()

    let helmet_t0 = (function() {
        let path = 'helmet_t0'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.HEAD
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let helmet_t1 = (function() {
        let path = 'helmet_t1'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.HEAD
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let helmet_t2 = (function() {
        let path = 'helmet_t2'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.HEAD
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let helmet_t3 = (function() {
        let path = 'helmet_t3'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.HEAD
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let helmet_t4 = (function() {
        let path = 'helmet_t4'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.HEAD
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let helmet_t5 = (function() {
        let path = 'helmet_t5'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.HEAD
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()

    let chestplate_t0 = (function() {
        let path = 'chestplate_t0'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.CHEST
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let chestplate_t1 = (function() {
        let path = 'chestplate_t1'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.CHEST
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let chestplate_t2 = (function() {
        let path = 'chestplate_t2'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.CHEST
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let chestplate_t3 = (function() {
        let path = 'chestplate_t3'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.CHEST
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let chestplate_t4 = (function() {
        let path = 'chestplate_t4'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.CHEST
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let chestplate_t5 = (function() {
        let path = 'chestplate_t5'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.CHEST
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()

    let leggings_t0 = (function() {
        let path = 'leggings_t0'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.LEGS
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let leggings_t1 = (function() {
        let path = 'leggings_t1'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.LEGS
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let leggings_t2 = (function() {
        let path = 'leggings_t2'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.LEGS
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let leggings_t3 = (function() {
        let path = 'leggings_t3'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.LEGS
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let leggings_t4 = (function() {
        let path = 'leggings_t4'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.LEGS
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let leggings_t5 = (function() {
        let path = 'leggings_t5'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.LEGS
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()

    let boots_t0 = (function() {
        let path = 'boots_t0'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.FEET
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let boots_t1 = (function() {
        let path = 'boots_t1'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.FEET
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let boots_t2 = (function() {
        let path = 'boots_t2'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.FEET
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let boots_t3 = (function() {
        let path = 'boots_t3'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.FEET
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let boots_t4 = (function() {
        let path = 'boots_t4'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.FEET
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let boots_t5 = (function() {
        let path = 'boots_t5'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.FEET
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()

    let melee_t0 = (function() {
        let path = 'melee_t0'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let melee_t1 = (function() {
        let path = 'melee_t1'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let melee_t2 = (function() {
        let path = 'melee_t2'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let melee_t3 = (function() {
        let path = 'melee_t3'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let melee_t4 = (function() {
        let path = 'melee_t4'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let melee_t5 = (function() {
        let path = 'melee_t5'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()

    let trident_t0 = (function() {
        let path = 'trident_t0'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let trident_t1 = (function() {
        let path = 'trident_t1'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let trident_t2 = (function() {
        let path = 'trident_t2'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let trident_t3 = (function() {
        let path = 'trident_t3'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let trident_t4 = (function() {
        let path = 'trident_t4'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let trident_t5 = (function() {
        let path = 'trident_t5'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()

    let bow_t0 = (function() {
        let path = 'bow_t0'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let bow_t1 = (function() {
        let path = 'bow_t1'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let bow_t2 = (function() {
        let path = 'bow_t2'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let bow_t3 = (function() {
        let path = 'bow_t3'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let bow_t4 = (function() {
        let path = 'bow_t4'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let bow_t5 = (function() {
        let path = 'bow_t5'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()

    let shield_t0 = (function() {
        let path = 'shield_t0'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let shield_t1 = (function() {
        let path = 'shield_t1'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let shield_t2 = (function() {
        let path = 'shield_t2'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let shield_t3 = (function() {
        let path = 'shield_t3'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let shield_t4 = (function() {
        let path = 'shield_t4'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let shield_t5 = (function() {
        let path = 'shield_t5'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()

    let staff_t0 = (function() {
        let path = 'staff_t0'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let staff_t1 = (function() {
        let path = 'staff_t1'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let staff_t2 = (function() {
        let path = 'staff_t2'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let staff_t3 = (function() {
        let path = 'staff_t3'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let staff_t4 = (function() {
        let path = 'staff_t4'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let staff_t5 = (function() {
        let path = 'staff_t5'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()

    let spellbook_t0 = (function() {
        let path = 'spellbook_t0'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let spellbook_t1 = (function() {
        let path = 'spellbook_t1'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let spellbook_t2 = (function() {
        let path = 'spellbook_t2'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let spellbook_t3 = (function() {
        let path = 'spellbook_t3'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let spellbook_t4 = (function() {
        let path = 'spellbook_t4'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let spellbook_t5 = (function() {
        let path = 'spellbook_t5'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
}