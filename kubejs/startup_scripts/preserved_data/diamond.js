const minecraft__diamond = function() {
    let full_of_string = {
        "offhand": null,
        "head": "minecraft:diamond_helmet",
        "chest": "minecraft:diamond_chestplate",
        "legs": "minecraft:diamond_leggings",
        "feets": "minecraft:diamond_boots",
        "mainhand": null
    }
    let predicateEnemyState = new FullyEquippedLogic.PredicateInstance(FullyEquippedLogic.PredicateType.ENEMY_STATE, jsPredicates.alwaysFalse)
    let predicateEnvironment = new FullyEquippedLogic.PredicateInstance(FullyEquippedLogic.PredicateType.ENVIRONMENT, jsPredicates.alwaysFalse)
    let predicateSelfState = new FullyEquippedLogic.PredicateInstance(FullyEquippedLogic.PredicateType.SELF_STATE, jsPredicates.alwaysFalse)
    let predicateHandItems = new FullyEquippedLogic.PredicateInstance(FullyEquippedLogic.PredicateType.HAND_ITEMS, jsPredicates.alwaysFalse)

    const modifier_1 = {
        stringLoc: "apothic_attributes:crit_chance",
        effect: new needClass.AttributeModifier(needClass.ResourceLocation.fromNamespaceAndPath($KEY,"test_1"), 4.0, needClass.AttributeModifier.Operation.ADD_VALUE)
    }
    const modifier_2 = {
        stringLoc: "apothic_attributes:crit_damage",
        effect: new needClass.AttributeModifier(needClass.ResourceLocation.fromNamespaceAndPath($KEY,"test_2"), -0.3, needClass.AttributeModifier.Operation.ADD_VALUE)
    }

    const effect_1 = {
        stringLoc: "minecraft:dolphins_grace",
        effect: needClass.MobEffects.DOLPHINS_GRACE, 
        duration: 200,
        amplifier: 0,
        ambient: false,
        visible: false,
        showIcon: false,
        hiddenEffect: null
    }

    let straightModifiers = [new ModifierWrapper(modifier_1), new ModifierWrapper(effect_1)]
    let bonusModifiers = [new ModifierWrapper(modifier_2)]
    let modifiersByPredicates = []
    let specialEffectsByPredicates = []
    let activeCondition = OneSuite.mergeSlots(ArmorSlotType.HEAD, ArmorSlotType.CHEST, ArmorSlotType.LEGS, ArmorSlotType.FEETS)
    let fullActiveCondition = OneSuite.mergeSlots(ArmorSlotType.HEAD, ArmorSlotType.CHEST, ArmorSlotType.LEGS, ArmorSlotType.FEETS, ArmorSlotType.MAINHAND)
    minecraft__diamond = new OneSuite(full_of_string, predicateEnemyState, predicateEnvironment, predicateSelfState, predicateHandItems, straightModifiers, modifiersByPredicates, bonusModifiers, specialEffectsByPredicates, activeCondition, fullActiveCondition)
    return minecraft__diamond
}

PostInitObjs.addSuiteRegister(minecraft__diamond)
