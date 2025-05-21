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

    // console.log(`${toSuites}`);
    // if (!toSuites) return
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
    // if (!toItemWrapper) return
    console.log(`${toItemWrapper}`);
    console.log(`${fromItemWrapper}`);
    let fullyEquippedLogic = pWarpper.getFullyEquippedLogic()
    if (fromItemWrapper) {
        console.log(`进入fromItemWrapper`);
        
        let fromSuites = fromItemWrapper.suites
        if (fromSuites) {
            fromSuites.forEach(suite => {
                // let slotFlag = suite.checkItem(fromHolder)
                // let objPredicates = pWarpper.getSuitesPredicates()
                let suiteFlagObj = objPredicates[suite.suiteId]
                OneSuite.updateItem(fromHolder, slot, fullyEquippedLogic, suiteFlagObj, true)
                if (suiteFlagObj.suiteFlag !== suite.fullActiveCondition) {
                    pWarpper.deactivateOneSuite(suite)
                }
                if (suiteFlagObj.suiteFlag !== suite.activeCondition) {
                    pWarpper.deactivateSuite(suite)
                }
            })
        }
    }
    if (toItemWrapper) {
        console.log(`进入toItemWrapper`);
        // 不知道为啥const会报错重复声明变量
        let toSuites = toItemWrapper.suites
        // console.log(`${toSuites}`);
        // if (!toSuites) return
        if (toSuites) {
            toSuites.forEach((suite) => {
                // let slotFlag = suite.checkItem(toHolder)
                // let objPredicates = pWarpper.getSuitesPredicates()
                let suiteFlagObj = objPredicates[suite.suiteId]
                if(!suiteFlagObj) {
                    suiteFlagObj = objPredicates[suite.suiteId] = {
                        equippedFlag: 0,
                        predicates: 0,
                        hasCallback: false
                    }
                }

                OneSuite.updateItem(toHolder, slot, fullyEquippedLogic, suiteFlagObj, false)
                console.log(`场景：${suiteFlagObj.equippedFlag}${suite.activeCondition}`);
                
                if (suiteFlagObj.equippedFlag === suite.activeCondition) {
                    pWarpper.activateSuite(suite)
                }
                else if (suiteFlagObj.equippedFlag === suite.fullActiveCondition) {
                    pWarpper.activateOneSuite(suite)
                }
            })
        }
    }



    let fullActiveSuites = pWarpper.getFullActiveSuites()
    let activeSuites = pWarpper.getActiveSuites()
    if (slot.getType() === needClass.EquipmentSlot$Type.HAND) {
        console.log(`进入hand`);
        // bonus, transientModifiers
        // if (activeSuites.contains(fullActiveSuites)) return
        // let objPredicates = pWarpper.getSuitesPredicates()
        // let fullyEquippedLogic = pWarpper.getFullyEquippedLogic()
        // Object.entries(objPredicates).forEach(([suiteId, suiteFlagObj]) => {
        //     let suite = OneSuite.getManager().getById(suiteId)
        //     if (suite) {
        //         if(!suite.isEitherHnadEstablished)  suite.predicateHandItems.instance(toHolder, slot, fullyEquippedLogic, suiteFlagObj)
        //         else suite.establishedCheckHandItem(toHolder, slot, fullyEquippedLogic, suiteFlagObj)
        //     }
        // })
        return
    }


    Object.keys(objPredicates).forEach((suiteId) => {
        console.log(`当前suiteID：${suiteId}`);
        let suite = OneSuite.getById(suiteId)
        let flag1 = activeSuites.has(suiteId)
        console.log(Object.entries(activeSuites));
        
        let flag2 = fullActiveSuites.has(suiteId)
        console.log(Object.entries(fullActiveSuites));
        console.log(`当前suite：${Object.entries(suite)}`);
        if (flag2) {
            suite.bonusModifiers.forEach((modifierWrapper) => {
                let modifier = modifierWrapper.effect
                if (modifierWrapper.isForMobEffect) {
                    entity.addEffect(new needClass.MobEffectInstance(modifierWrapper.effect, modifierWrapper.duration, modifierWrapper.amplifier))
                }
                else if (modifierWrapper.isForAttribute) {
                    entity.getAttribute(modifierWrapper.stringLoc).addTransientModifier(modifier)
                }
            })
        } else {
            suite.bonusModifiers.forEach((modifierWrapper) => {
                let modifier = modifierWrapper.effect
                if (modifierWrapper.isForMobEffect) {
                    entity.removeEffect(modifierWrapper.effect)
                }
                else if (modifierWrapper.isForAttribute) {
                    entity.getAttribute(modifierWrapper.stringLoc)['removeModifier(net.minecraft.world.entity.ai.attributes.AttributeModifier)'](modifier)
                }
            })
        }
        if (flag1) {
            suite.straightModifiers.forEach((modifierWrapper) => {
                let modifier = modifierWrapper.effect
                if (modifierWrapper.isForMobEffect) {
                    entity.addEffect(new needClass.MobEffectInstance(modifierWrapper.effect, modifierWrapper.duration, modifierWrapper.amplifier))
                }
                else if (modifierWrapper.isForAttribute) {
                    entity.getAttribute(modifierWrapper.stringLoc).addTransientModifier(modifier)
                }
            })
        } else {
            suite.straightModifiers.forEach((modifierWrapper) => {
                let modifier = modifierWrapper.effect
                if (modifierWrapper.isForMobEffect) {
                    entity.removeEffect(modifierWrapper.effect)
                }
                else if (modifierWrapper.isForAttribute) {
                    entity.getAttribute(modifierWrapper.stringLoc)['removeModifier(net.minecraft.world.entity.ai.attributes.AttributeModifier)'](modifier)
                }
            })
        }
        let suiteFlagObj = objPredicates[suiteId]
        console.log(`当前suiteFlagObj：${Object.entries(suiteFlagObj)}`);
        console.log(flag1, flag2);
        if (!suiteFlagObj.hasCallback && (flag1 || flag2)) {
            console.log(flag1, flag2);
            
            entity.getServer().scheduleRepeatingInTicks(100, callback => {
                console.log("进入自循环检测阶段")
                flag1 = activeSuites.has(suiteId)
                flag2 = fullActiveSuites.has(suiteId)
                console.log(flag1, flag2);
                if (entity.isRemoved() || !(flag1 || flag2)) {
                    suiteFlagObj.hasCallback = false
                    if (suiteFlagObj.suiteFlag === 0) {
                         delete objPredicates[suiteId]
                    }
                    return callback.clear()
                }
                console.log(`执行到此处了 179`);
                
                if (flag2) {
                    suite.bonusModifiers.forEach((modifierWrapper) => {
                        let modifier = modifierWrapper.effect
                        if (modifierWrapper.isForMobEffect) {
                            entity.addEffect(new needClass.MobEffectInstance(modifierWrapper.effect, modifierWrapper.duration, modifierWrapper.amplifier))
                        }
                        else if (modifierWrapper.isForAttribute) {
                            let attribute = entity.getAttribute(modifierWrapper.stringLoc)
                            if (!attribute.hasModifier(modifier.id())) {
                                attribute.addTransientModifier(modifier)
                            }
                        }
                    })
                } else {
                    suite.bonusModifiers.forEach((modifierWrapper) => {
                        let modifier = modifierWrapper.effect
                        if (modifierWrapper.isForMobEffect) {
                            entity.removeEffect(modifierWrapper.effect)
                        }
                        else if (modifierWrapper.isForAttribute) {
                            let attribute = entity.getAttribute(modifierWrapper.stringLoc)
                            if (attribute.hasModifier(modifier.id())) {
                                attribute['removeModifier(net.minecraft.world.entity.ai.attributes.AttributeModifier)'](modifier)
                            }
                        }
                    })
                }
                if (flag1) {
                    console.log(`执行到此处了 209`);
                    suite.straightModifiers.forEach((modifierWrapper) => {
                        
                        
                        let modifier = modifierWrapper.effect
                        console.log(`214 , ${modifier}`);
                        if (modifierWrapper.isForMobEffect) {
                                entity.addEffect(new needClass.MobEffectInstance(modifierWrapper.effect, modifierWrapper.duration, modifierWrapper.amplifier))
                            }
                        else if (modifierWrapper.isForAttribute) {
                            let attribute = entity.getAttribute(modifierWrapper.stringLoc)
                            if (!attribute.hasModifier(modifier.id())) {
                                attribute.addTransientModifier(modifier)
                            }
                        }
                    })
                } else {
                    suite.straightModifiers.forEach((modifierWrapper) => {
                        let modifier = modifierWrapper.effect
                        if (modifierWrapper.isForMobEffect) {
                            entity.removeEffect(modifierWrapper.effect)
                        }
                        else if (modifierWrapper.isForAttribute) {
                            let attribute = entity.getAttribute(modifierWrapper.stringLoc)
                            if (attribute.hasModifier(modifier.id())) {
                                attribute['removeModifier(net.minecraft.world.entity.ai.attributes.AttributeModifier)'](modifier)
                            }
                        }
                    })
                }
            })
            suiteFlagObj.hasCallback = true
        }
    })
})
