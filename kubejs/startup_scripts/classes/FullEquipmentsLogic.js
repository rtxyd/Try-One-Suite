function FullEquipmentsLogic() {
    this.value = value
    this.isSpecial = special
    if (fullArmorsArray) {
        this.fullArmorsArray = fullArmorsArray
    }
    this.handItemsSurfix = handItemsSurfix
    this.predicateEnemyState = {}
    this.predicateEnvironment = {}
    this.predicateSelfState = {}
    this.predicateHandItems = {}
    this.straightModifiers = []
    this.specialEffectsByPredicates = {}
}

global.FullEquipmentsLogic = FullEquipmentsLogic