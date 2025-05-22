// priority: 98
// type: startup

/**
 * @description 
 * @author rtxyd
 * @loadAfter 99
 */

const ExtraEquippedLogic = (function() {
    function ExtraEquippedLogic(predicateEnemyState, predicateEnvironment, predicateItemSwitch, predicateOnHit, predicateSelfState, predicateHandItems, straightModifiers, modifiersByPredicates, bonusModifiers, specialEffectsByPredicates) {
        FullyEquippedLogic.call(predicateEnemyState, predicateEnvironment, predicateSelfState, predicateHandItems, straightModifiers, modifiersByPredicates, bonusModifiers, specialEffectsByPredicates)
        this.predicateItemSwitch = predicateItemSwitch || FullyEquippedLogic.PredicateInstance.NONE
        this.predicateOnHit = predicateOnHit || FullyEquippedLogic.PredicateInstance.NONE
    }
    ExtraEquippedLogic.prototype = Object.create(FullyEquippedLogic.prototype)
    ExtraEquippedLogic.prototype.constructor = ExtraEquippedLogic
    return ExtraEquippedLogic
})()
