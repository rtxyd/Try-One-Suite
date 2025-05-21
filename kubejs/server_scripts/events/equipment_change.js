/**
 * @relatedClass
 *  'net.minecraft.world.effect.MobEffects'
 *  'net.minecraft.world.effect.MobEffectInstance'
 *  'net.minecraft.world.entity.EquipmentSlot$Type'
 */

NativeEvents.onEvent("net.neoforged.neoforge.event.entity.living.LivingEquipmentChangeEvent", e => {
    // const time1 = Date.now()

    const entity = e.getEntity()


    if (!entity) return
    else if (!entity.isPlayer()) return
    console.log("检测开始！");
    
    const toHolder = e.getTo().getItemHolder()
    const fromHolder = e.getFrom().getItemHolder()
    console.log(`${toHolder}`);
    console.log(`${fromHolder}`);

    if (toHolder.equals(fromHolder)) return

    const slot = e.getSlot()
    const slotId = slot.getFilterFlag()
    const pUUID = entity.getUuid()
    console.log(`${pUUID}`);
    const pWarpper = PlayerWrapper.getPlayerWrapper(pUUID)
    console.log(`${pWarpper}`);
    const objPredicates = pWarpper.getSuitesPredicates()
    console.log(`${objPredicates}`);
    const fromItemWrapper = ItemWrapper.getByHolder(fromHolder)
    const toItemWrapper = ItemWrapper.getByHolder(toHolder)
    console.log(`${toItemWrapper}`);
    console.log(`${fromItemWrapper}`);
    let fullyEquippedLogic = pWarpper.getFullyEquippedLogic()
    let flag1 // flag1 = activeSuites.has(suiteId)
    let flag2 // flag2 = fullActiveSuites.has(suiteId)
    if (fromItemWrapper) {
        console.log(`进入fromItemWrapper`);
        
        let fromSuites = fromItemWrapper.suites
        if (fromSuites) {
            fromSuites.forEach(suite => {
                let suiteFlagObj = objPredicates[suite.suiteId]
                OneSuite.updateItem(fromHolder, slot, fullyEquippedLogic, suiteFlagObj, true)
                if (suiteFlagObj.suiteFlag !== suite.fullActiveCondition) {
                    pWarpper.deactivateOneSuite(suite)
                    suite.bonusModifiers.forEach((modifierWrapper) => {
                        modifierWrapper.eraseModifiers(entity)
                    })
                    flag2 = false
                }
                if (suiteFlagObj.suiteFlag !== suite.activeCondition) {
                    pWarpper.deactivateSuite(suite)
                    suite.straightModifiers.forEach((modifierWrapper) => {
                        modifierWrapper.eraseModifiers(entity)
                    })
                    flag1 = false
                }
            })
        }
    }
    if (toItemWrapper) {
        console.log(`进入toItemWrapper`);
        // 不知道为啥const会报错重复声明变量
        let toSuites = toItemWrapper.suites
        if (toSuites) {
            toSuites.forEach((suite) => {
                let suiteFlagObj = objPredicates[suite.suiteId]
                if(!suiteFlagObj) {
                    suiteFlagObj = objPredicates[suite.suiteId] = {
                        equippedFlag: 0,
                        predicates: 0,
                        hasCallback: false
                    }
                }

                OneSuite.updateItem(toHolder, slot, fullyEquippedLogic, suiteFlagObj, false)
                console.log(`场景：${suiteFlagObj.equippedFlag}/${suite.activeCondition}/${suite.fullActiveCondition}`);
                
                if (suiteFlagObj.equippedFlag === suite.activeCondition) {
                    pWarpper.activateSuite(suite)
                    suite.straightModifiers.forEach((modifierWrapper) => {
                        modifierWrapper.addModifiers(entity)
                    })
                    flag1 = true
                }
                else if (suiteFlagObj.equippedFlag === suite.fullActiveCondition) {
                    pWarpper.activateOneSuite(suite)
                    suite.bonusModifiers.forEach((modifierWrapper) => {
                        modifierWrapper.addModifiers(entity)
                    })
                    flag2 = true
                }
                suite.makeRepeatingChecker(suiteFlagObj, entity, pWarpper, flag1, flag2)
            })
        }
    }
})
