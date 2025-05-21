const OneSuite = (function() {
    function OneSuite(full_of_string, predicateEnemyState, predicateEnvironment, predicateSelfState, predicateHandItems, straightModifiers, modifiersByPredicates, bonusModifiers, specialEffectsByPredicates, activeCondition, fullActiveCondition) {
        FullyEquippedLogic.call(this, predicateEnemyState, predicateEnvironment, predicateSelfState, predicateHandItems, straightModifiers, modifiersByPredicates, bonusModifiers, specialEffectsByPredicates)
        this.fullOfString = full_of_string
        // Object.entries(full_of_string).forEach(([key, value]) => {
        //     if (value === null) return
        //     ItemWrapper.tryCreateByResourceLocation(value, this)
        // })
        let full_slot_holder = {}
        Object.entries(full_of_string).forEach(([key, value], index) => {
                let slotItem = full_of_string[key]
                console.log([key, value]);
                
                if (slotItem) {
                    full_slot_holder[index] = needClass.BuiltInRegistries.ITEM["getHolder(net.minecraft.resources.ResourceLocation)"](prLoc(slotItem)).orElseGet(() => {throw new Error(`Invalid Item: ${slotItem}`)})
                    console.log(full_slot_holder[index])
                } else {
                    full_slot_holder[index] = null
                }
        })
        console.log(full_slot_holder);
        
        this.fullSlotHolder = full_slot_holder
        Object.keys(full_slot_holder).forEach((key) => {
            let value = full_slot_holder[key]
            console.log(value);
            
            if (!value) return
            ItemWrapper.tryCreateByHolder(value, this)
        })
        if (Object.keys(this.fullSlotHolder).length !== 0) {
            this.fullArmors = {
                4: full_slot_holder[4],
                3: full_slot_holder[3],
                2: full_slot_holder[2],
                1: full_slot_holder[1]
            }
            if (full_slot_holder[5]) this.isOffhandEstablished = true; else this.isOffhandEstablished = false; 
            if (full_slot_holder[0]) this.isMainhandEstablished = true; else this.isMainhandEstablished = false; 
            this.isBothHandsEstablished = this.isMainhandEstablished && this.isOffhandEstablishe
            this.isEitherHnadEstablished = this.isMainhandEstablished || this.isOffhandEstablished
            this.validArmorsCount = countValidEntries(this.fullArmors)
            if (this.validArmorsCount === 0) {
                this.noArmor = true
            }
        }
        if (countValidEntries(full_slot_holder) === 1) this.isSingle = true
        // 比如 0b11110
        this.activeCondition = activeCondition || -1
        // 比如 0b111110
        this.fullActiveCondition = fullActiveCondition || -1
        console.log(`当前suite：${Object.entries(this)}`);
        this.suiteId = SuitesManager.INSTANCE.genSuiteIdToManager(this)
    }
    OneSuite.prototype = Object.create(FullyEquippedLogic.prototype)
    OneSuite.prototype.constructor = OneSuite
    function countValidEntries(object) {
        let count = 0
        Object.keys(object).forEach((k) => {
            if (object[k]) count++
        })
        return count
    }
    OneSuite.prototype.makeRepeatingChecker = function(suiteFlagObj, entity, pWarpper, flag1, flag2) {
        let fullActiveSuites = pWarpper.getFullActiveSuites()
        let activeSuites = pWarpper.getActiveSuites()
        if (!suiteFlagObj.hasCallback && (flag1 || flag2)) {
            console.log(flag1, flag2);
            
            entity.getServer().scheduleRepeatingInTicks(100, callback => {
                console.log("进入自循环检测阶段")
                let suiteId = this.suiteId
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
                    this.bonusModifiers.forEach((modifierWrapper) => {
                        modifierWrapper.addModifiersWithCheck(entity)
                    })
                } else {
                    this.bonusModifiers.forEach((modifierWrapper) => {
                        modifierWrapper.eraseModifiersWithCheck(entity)
                    })
                }
                if (flag1) {
                    console.log(`执行到此处了 209`);
                    this.straightModifiers.forEach((modifierWrapper) => {
                        modifierWrapper.addModifiersWithCheck(entity)
                    })
                } else {
                    this.straightModifiers.forEach((modifierWrapper) => {
                        modifierWrapper.eraseModifiersWithCheck(entity)
                    })
                }
            })
            suiteFlagObj.hasCallback = true
        }
    }
    OneSuite.prototype.establishedCheckHandItem = function(itemHolder, slot, fullyEquippedLogic, suiteFlagObj) {
        if(this.isMainhandEstablished && slot === needClass.EquipmentSlot.MAINHAND) {
            if (itemHolder === this.fullSlotHolder[0]) {
                fullyEquippedLogic.allSlotsFlag |= 1;
                suiteFlagObj.equippedFlag |= 1;
            }
        }
        else if(this.isOffhandEstablished && slot === needClass.EquipmentSlot.OFFHAND) {
            if (itemHolder === this.fullSlotHolder[5]) {
                fullyEquippedLogic.allSlotsFlag |= 1;
                suiteFlagObj.equippedFlag |= 1;
            }
        }
        else {
            if (itemHolder === this.fullSlotHolder[0] || itemHolder === this.fullSlotHolder[5]) {
                suiteFlagObj.equippedFlag |= 33;
            }
        }
    }
    OneSuite.getById = function(id) {
        return SuitesManager.INSTANCE.getById(id)
    }
    OneSuite.updateItem = function(itemHolder, slot, fullyEquippedLogic, suiteFlagObj, isReplaced) {
        let slotId = slot.getFilterFlag()
        switch (slotId) {
            case 5: // 副手槽
            case 4: // 头盔槽
            case 3: // 胸甲槽
            case 2: // 裤子槽
            case 1: // 靴子槽
            case 0: // 主手槽
                console.log(`前 fullyEquippedLogic.allSlotsFlag:${fullyEquippedLogic.allSlotsFlag}`);
                
                fullyEquippedLogic.allSlotsFlag |= 1 << slotId
                console.log(`后 fullyEquippedLogic.allSlotsFlag:${fullyEquippedLogic.allSlotsFlag}`);
                console.log(`前 suiteFlagObj.equippedFlag:${suiteFlagObj.equippedFlag}`);
                if (isReplaced) {
                    suiteFlagObj.equippedFlag &= ~(1 << slotId)
                } else {
                    suiteFlagObj.equippedFlag |= 1 << slotId
                }
                console.log(`后 suiteFlagObj.equippedFlag:${suiteFlagObj.equippedFlag}`);
                break

            default:
                break
        }
    }
    OneSuite.mergeSlots = function() {
        let value = 0
        for (const arg of arguments) {
            console.log(arg);
            value |= arg.pos
        }
        return value
    }
    OneSuite.slotFlagMap = {
        5: 32,
        4: 16,
        3: 8,
        2: 4,
        1: 2,
        0: 1
    }
    const SuitesManager = (function() {
        const SuitesManager = {}
        const inner_map = {}
        let currentSuiteId = -1
        SuitesManager.INSTANCE = {
            genSuiteIdToManager: function(suite) {currentSuiteId += 1; inner_map[currentSuiteId] = suite; console.log(`当前对象：${inner_map[currentSuiteId]}`);  return currentSuiteId},
            getById: (id) => inner_map[id]
        }
        return Object.freeze(SuitesManager)
    })()
    return OneSuite
})()

global.OneSuite = OneSuite