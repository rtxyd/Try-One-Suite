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

    let GIANTSLAY = (function() {
        let path = 'giantslay'
        let group = apotheosisClass.ALObjects$EquipmentSlotGroups.HEAD
        let category = ApotheosisRegister.registerLootCategory(path ,Predicates.alwaysFalse(), group)
    })()
}