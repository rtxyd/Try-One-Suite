// priority: 99
// type: startup

function GenerateDataFiles() {
    const fileDir = "kubejs/data" + "/" + "apotheosis/data_maps/item"
    const filePath = fileDir + "/loot_category_overrides.json"
    let data = JsonIO.read(filePath)

    const configFilePath = "kubejs/config" + "/" + "cache_cat.json"
    let cachedLength = JsonIO.read(configFilePath)
    
    if (!data) {
        console.log("文件不存在，创建新文件！")
        data = { values: {} }
    }
    let currentLength = Object.keys(data.values).length
    if (!cachedLength) {
        console.log("文件不存在，创建新文件！")
        cachedLength = {}
        cachedLength.lastLength = null
    } else {
        let length0 = cachedLength.lastLength;
        if (length0 !== 0 && length0 === currentLength) return
    }
    console.log("JSON文件已更新！")
    const allItems = needClass.BuiltInRegistries.ITEM
    const catNone = apotheosisClass.Apoth$LootCategories.NONE.getKey().toString()
    Object.entries(ItemPreservedData.catOverridesArmor).forEach(([surfix, items]) => {
        console.log(`当前前缀: ${surfix}`);
        Object.entries(items).forEach(([itemId, lootCat]) => {
            data.values[itemId] = lootCat
        });
    });
    allItems.forEach(item => {
        let key = item.id
        if (data.values.hasOwnProperty(key)) return
        data.values[key] = catNone
    })
    KubeJSPaths.dir(fileDir)
    JsonIO.write(filePath, data)
    cachedLength.lastLength = Object.keys(data.values).length
    JsonIO.write(configFilePath, cachedLength)
}

function collectData() {
    let collector = {}
    let arr = collector['armor'] = []
    arr.push(armor_adamantine_data)
    arr.push(armor_aquatic_data)
    arr.push(armor_blessed_data)
    arr.push(armor_elastic_data)
    arr.push(armor_fireproof_data)
    arr.push(armor_fortunate_data)
    arr.push(armor_gravitational_data)
    arr.push(armor_ironforged_data)
    arr.push(armor_oxygenated_data)
    arr.push(armor_spiritual_data)
    arr.push(armor_stalwart_data)
    arr.push(armor_unbound_data)
    arr.push(armor_windswept_data)
    arr.push(armor_winged_data)
    arr.push(armor_blast_forged_data)
    arr.push(armor_blockading_data)
    arr.push(armor_deflective_data)
    arr.push(armor_feathery_data)
    arr.push(armor_grounded_data)
    arr.push(armor_runed_data)
    arr.push(armor_blinding_data)
    arr.push(armor_bolstering_data)
    arr.push(armor_bursting_data)
    arr.push(armor_nimble_data)
    arr.push(armor_revitalizing_data)
    arr = collector['breaker'] = []
    arr.push(breaker_enlightened_data)
    arr.push(breaker_sandforming_data)
    arr.push(breaker_stoneforming_data)
    arr.push(breaker_supermassive_data)
    arr.push(breaker_destructive_data)
    arr.push(breaker_experienced_data)
    arr.push(breaker_lengthy_data)
    arr.push(breaker_submerged_data)
    arr.push(breaker_omnetic_data)
    arr.push(breaker_radial_data)
    arr.push(breaker_prosperous_data)
    arr.push(breaker_spelunkers_data)
    arr.push(breaker_swift_data)
    arr = collector['generic'] = []
    arr.push(generic_lucky_data)
    arr.push(generic_telepathic_data)
    arr = collector['melee'] = []
    arr.push(melee_berserking_data)
    arr.push(melee_forceful_data)
    arr.push(melee_giant_slaying_data)
    arr.push(melee_glacial_data)
    arr.push(melee_graceful_data)
    arr.push(melee_infernal_data)
    arr.push(melee_intricate_data)
    arr.push(melee_lacerating_data)
    arr.push(melee_lengthy_data)
    arr.push(melee_murderous_data)
    arr.push(melee_piercing_data)
    arr.push(melee_vampiric_data)
    arr.push(melee_violent_data)
    arr.push(melee_cleaving_data)
    arr.push(melee_executing_data)
    arr.push(melee_festive_data)
    arr.push(melee_bloodletting_data)
    arr.push(melee_caustic_data)
    arr.push(melee_elusive_data)
    arr.push(melee_omniscient_data)
    arr.push(melee_sophisticated_data)
    arr.push(melee_weakening_data)
    arr.push(melee_thunderstruck_data)
    arr = collector['ranged'] = []
    arr.push(ranged_agile_data)
    arr.push(ranged_elven_data)
    arr.push(ranged_streamlined_data)
    arr.push(ranged_windswept_data)
    arr.push(ranged_prosperous_data)
    arr.push(ranged_magical_data)
    arr.push(ranged_acidic_data)
    arr.push(ranged_blighted_data)
    arr.push(ranged_deathbound_data)
    arr.push(ranged_ensnaring_data)
    arr.push(ranged_fleeting_data)
    arr.push(ranged_grievous_data)
    arr.push(ranged_ivy_laced_data)
    arr.push(ranged_shulkers_data)
    arr.push(ranged_spectral_data)
    arr = collector['shield'] = []
    arr.push(shield_ironforged_data)
    arr.push(shield_stalwart_data)
    arr.push(shield_steel_touched_data)
    arr.push(shield_catalyzing_data)
    arr.push(shield_devilish_data)
    arr.push(shield_galvanizing_data)
    arr.push(shield_reinforcing_data)
    arr.push(shield_venomous_data)
    arr.push(shield_withering_data)
    arr.push(shield_psychic_data)
    arr.push(shield_retreating_data)

    return collector
}

function distributeData() {
    let collector = collectData()
    let filePath = "kubejs/data" + "/" + "apotheosis/affixes"
    for (let item of Object.keys(collector)) {
        console.log(`${item} 已加载`)
        let filePath2 = filePath + `/${item}`
        let arr = collector[item]
        for (let innerItem of arr) {
            for (let i = 0; i <= 5; i++) {
                let filePath3
                let filePath4
                let fullObj = innerItem()
                let jsonObj = fullObj.init
                if (fullObj.affix_type === "ability") {
                    KubeJSPaths.dir(filePath2)
                    if (i === 0) {
                        filePath4 = filePath2 + `/${innerItem.name}.json`
                    } else {
                        filePath4 = filePath2 + `/${innerItem.name}_t${i}.json`
                    }
                } else {
                    filePath3 = filePath2 + '/' + fullObj.affix_type
                    KubeJSPaths.dir(filePath3)
                    if (i === 0) {
                        filePath4 = filePath3 + `/${innerItem.name}.json`
                    } else {
                        filePath4 = filePath3 + `/${innerItem.name}_t${i}.json`
                    }
                }
                console.log(filePath4)
                // console.log(jsonObj)
                let defType = jsonObj["types"]
                // console.log(defType);
                
                if (defType) {
                    let newCat = []
                    defType.forEach(cat => {
                        let element = cat.split(":")
                        let end = element[element.length - 1]
                        newCat.push(`yd_a:${end}_t${i}`)
                    })
                    Array.prototype.push.apply(defType, newCat)      
                } else {
                    let categories = jsonObj["categories"]
                    // console.log(categories);
                    
                    if (!categories) {
                        JsonIO.write(filePath4, jsonObj)
                        continue
                    }
                    let newCat = []
                    categories.forEach(cat => {
                        let element = cat.toString().split(":")
                        let end = element[element.length - 1]
                        newCat.push(`yd_a:${end}_t${i}`)
                    })

                    Array.prototype.push.apply(categories, newCat)                        
                }
                JsonIO.write(filePath4, jsonObj)
            }
        }
    }
}