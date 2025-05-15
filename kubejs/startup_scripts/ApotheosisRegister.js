// priority: 100
// type: startup



const ApotheosisRegister = {}

/**
 * @description
 * @author rtxyd
 * @param {String} slot
 * @return {Holder<EntityEquipmentSlot>}  
 */
ApotheosisRegister.registerCurioSlot = function(slot) {
    return $R['custom(java.lang.String,net.minecraft.resources.ResourceKey,java.util.function.Supplier)'](
        slot, 
        apotheosisClass.ALObjects$BuiltInRegs.ENTITY_EQUIPMENT_SLOT.key(), 
        () => new apotheosisClass.CurioEquipmentSlot(slot)
    );
}

/**
 * @description
 * @author rtxyd
 * @param {String} path
 * @param {Holder<EntityEquipmentSlot>} slots
 * @return {EntitySlotGroup}  
 */
ApotheosisRegister.registSlotGroup = function(path, slots) {
    return $R['custom(java.lang.String,net.minecraft.resources.ResourceKey,java.lang.Object)'](
        path, 
        apotheosisClass.ALObjects$BuiltInRegs.ENTITY_SLOT_GROUP.key(), 
        new apotheosisClass.EntitySlotGroup(crLoc(path), HolderSet['direct(net.minecraft.core.Holder[])'](slots))
    );
}

/**
 * @description
 * @author rtxyd
 * @param {String} path
 * @param {Predicate<ItemStack>} validator
 * @param {EntitySlotGroup} group
 * @return {LootCategory}  
 */
ApotheosisRegister.registerLootCategory = function(path, validator, group) {
    return $R['custom(java.lang.String,net.minecraft.resources.ResourceKey,java.lang.Object)'](
        path, 
        apotheosisClass.Apoth$BuiltInRegs.LOOT_CATEGORY.key(), 
        new apotheosisClass.LootCategory(validator, group, 1000)
    );
}