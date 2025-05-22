// priority: 99
// type: startup

/**
 * @description 
 * @author rtxyd
 * @loadAfter 100
 */

const FullyEquippedLogic = (function() {
    function FullyEquippedLogic(predicateEnemyState, predicateEnvironment, predicateSelfState, predicateHandItems, straightModifiers, modifiersByPredicates, bonusModifiers, specialEffectsByPredicates) {
        // on attack
        this.predicateEnemyState = predicateEnemyState || PredicateInstance.NONE
        // 10 tick
        this.predicateEnvironment = predicateEnvironment || PredicateInstance.NONE
        // 10 tick
        this.predicateSelfState = predicateSelfState || PredicateInstance.NONE
        // 10 tick
        // (itemHolder, slotEnum) => {}
        this.predicateHandItems = predicateHandItems || PredicateInstance.NONE
        // allPredicates
        this.allPredicates = [this.predicateEnemyState, this.predicateEnvironment, this.predicateSelfState, this.predicateHandItems]
        this.straightModifiers = straightModifiers || null
        // normally, full armors and with proper weapons
        this.bonusModifiers = bonusModifiers || null
        this.modifiersByPredicates = modifiersByPredicates || null
        // store predicate data in playerWrapper, trigger in specific event
        this.specialEffectsByPredicates = specialEffectsByPredicates || null
    }
    // enum predicatetype, java version
    const PredicateType = FullyEquippedLogic.PredicateType = (function() {
        const _reverseMap = {};
        function PredicateType(name, value) {
            this.name = name
            this.value = value
            _reverseMap[value] = this
        }

        PredicateType.getByValue = function(value) {
            return _reverseMap[value] || _reverseMap[0]
        }

        PredicateType.NONE = new PredicateType("none", 0)
        PredicateType.ENEMY_STATE = new PredicateType("enemy_state", 1)
        PredicateType.ENVIRONMENT = new PredicateType("environment", 2)
        PredicateType.SELF_STATE = new PredicateType("self_state", 4)
        PredicateType.HAND_ITEMS = new PredicateType("hand_items", 8)
        PredicateType.ITEM_SWITCH = new PredicateType("item_switch", 32)
        PredicateType.ON_HIT = new PredicateType("on_hit", 64)
        PredicateType.ITEM_SWITCH = new PredicateType("item_switch", 128)

        return PredicateType
    })()
    // class PredicateInstance
    const PredicateInstance = FullyEquippedLogic.PredicateInstance = (function() {
        function PredicateInstance(type, instance) {
            this.type = type
            this.instance = instance || jsPredicates.alwaysFalse
        }
        PredicateInstance.NONE = new PredicateInstance(PredicateType.NONE)
        return PredicateInstance
    })()

    FullyEquippedLogic.prototype.applyStraightModifiers = function() {
        this.straightModifiers.apllyAll()
    }

    FullyEquippedLogic.prototype.applyModifiersByPredicates = function(playerWrapper) {
        let predicates = playerWrapper.data.fullyEquippedLogic.predicates
        this.allPredicates.forEach(p => {
            if (p.type === PredicateType.NONE) return
            else if (p.instance()) {
                predicates |= p.type.value
            }
        })
    }
    return FullyEquippedLogic
})()

global.FullyEquippedLogic = FullyEquippedLogic