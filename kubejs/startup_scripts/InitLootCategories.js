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

    let Tier_0_helmet = (function() {
        let path = 'tier_0_helmet'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.HEAD
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_1_helmet = (function() {
        let path = 'tier_1_helmet'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.HEAD
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_2_helmet = (function() {
        let path = 'tier_2_helmet'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.HEAD
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_3_helmet = (function() {
        let path = 'tier_3_helmet'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.HEAD
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_4_helmet = (function() {
        let path = 'tier_4_helmet'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.HEAD
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_5_helmet = (function() {
        let path = 'tier_5_helmet'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.HEAD
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()

    let Tier_0_chestplate = (function() {
        let path = 'tier_0_chestplate'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.CHEST
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_1_chestplate = (function() {
        let path = 'tier_1_chestplate'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.CHEST
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_2_chestplate = (function() {
        let path = 'tier_2_chestplate'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.CHEST
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_3_chestplate = (function() {
        let path = 'tier_3_chestplate'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.CHEST
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_4_chestplate = (function() {
        let path = 'tier_4_chestplate'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.CHEST
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_5_chestplate = (function() {
        let path = 'tier_5_chestplate'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.CHEST
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()

    let Tier_0_leggings = (function() {
        let path = 'tier_0_leggings'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.LEGS
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_1_leggings = (function() {
        let path = 'tier_1_leggings'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.LEGS
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_2_leggings = (function() {
        let path = 'tier_2_leggings'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.LEGS
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_3_leggings = (function() {
        let path = 'tier_3_leggings'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.LEGS
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_4_leggings = (function() {
        let path = 'tier_4_leggings'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.LEGS
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_5_leggings = (function() {
        let path = 'tier_5_leggings'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.LEGS
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()

    let Tier_0_boots = (function() {
        let path = 'tier_0_boots'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.FEET
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_1_boots = (function() {
        let path = 'tier_1_boots'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.FEET
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_2_boots = (function() {
        let path = 'tier_2_boots'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.FEET
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_3_boots = (function() {
        let path = 'tier_3_boots'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.FEET
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_4_boots = (function() {
        let path = 'tier_4_boots'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.FEET
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_5_boots = (function() {
        let path = 'tier_5_boots'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.FEET
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()

    let Tier_0_melee = (function() {
        let path = 'tier_0_melee'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_1_melee = (function() {
        let path = 'tier_1_melee'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_2_melee = (function() {
        let path = 'tier_2_melee'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_3_melee = (function() {
        let path = 'tier_3_melee'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_4_melee = (function() {
        let path = 'tier_4_melee'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_5_melee = (function() {
        let path = 'tier_5_melee'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()

    let Tier_0_trident = (function() {
        let path = 'tier_0_trident'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_1_trident = (function() {
        let path = 'tier_1_trident'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_2_trident = (function() {
        let path = 'tier_2_trident'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_3_trident = (function() {
        let path = 'tier_3_trident'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_4_trident = (function() {
        let path = 'tier_4_trident'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_5_trident = (function() {
        let path = 'tier_5_trident'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()

    let Tier_0_bow = (function() {
        let path = 'tier_0_bow'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_1_bow = (function() {
        let path = 'tier_1_bow'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_2_bow = (function() {
        let path = 'tier_2_bow'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_3_bow = (function() {
        let path = 'tier_3_bow'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_4_bow = (function() {
        let path = 'tier_4_bow'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_5_bow = (function() {
        let path = 'tier_5_bow'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()

    let Tier_0_shield = (function() {
        let path = 'tier_0_shield'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_1_shield = (function() {
        let path = 'tier_1_shield'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_2_shield = (function() {
        let path = 'tier_2_shield'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_3_shield = (function() {
        let path = 'tier_3_shield'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_4_shield = (function() {
        let path = 'tier_4_shield'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tier_5_shield = (function() {
        let path = 'tier_5_shield'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()

    let Tire_0_staff = (function() {
        let path = 'tire_0_staff'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tire_1_staff = (function() {
        let path = 'tire_1_staff'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tire_2_staff = (function() {
        let path = 'tire_2_staff'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tire_3_staff = (function() {
        let path = 'tire_3_staff'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tire_4_staff = (function() {
        let path = 'tire_4_staff'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tire_5_staff = (function() {
        let path = 'tire_5_staff'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()

    let Tire_0_spellbook = (function() {
        let path = 'tire_0_spellbook'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tire_1_spellbook = (function() {
        let path = 'tire_1_spellbook'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tire_2_spellbook = (function() {
        let path = 'tire_2_spellbook'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tire_3_spellbook = (function() {
        let path = 'tire_3_spellbook'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tire_4_spellbook = (function() {
        let path = 'tire_4_spellbook'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
    let Tire_5_spellbook = (function() {
        let path = 'tire_5_spellbook'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.MAINHAND
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
}