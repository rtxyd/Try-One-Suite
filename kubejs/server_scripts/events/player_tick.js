PlayerEvents.tick(event => {
    let player = event.player
    if (player.tickcount % 20 !== 0) return
    let pWarpper = playerWrapper.getByUuid(player.getUuid())
    let objPredicates = pWarpper.getSuitesPredicates()
    Object.keys(objPredicates).forEach((suiteId) => {
        let suite = OneSuite.getById(suiteId)
        // suite.predicateEnemyState.instance()
        let PredicateType = FullyEquippedLogic.PredicateType
        let suiteCache = objPredicates[suiteId]
        if (suite.predicateEnvironment.instance(player)) {
            suiteCache.Predicates |= PredicateType.ENVIRONMENT.value
        }
        if (suite.predicateHandItems.instance(player)) {
            suiteCache.Predicates |= PredicateType.HAND_ITEMS.value
        }
        if (suite.predicateSelfState.instance(player)){
            suiteCache.Predicates |= PredicateType.SELF_STATE.value
        }
    })
})