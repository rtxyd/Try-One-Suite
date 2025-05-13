// priority: 99
// type: startup

function GenerateDataFiles() {
    const filePath = "kubejs/data" + "/" + "apotheosis/data_maps/item/loot_category_overrides.json"
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
    
    JsonIO.write(filePath, data)
    cachedLength.lastLength = Object.keys(data.values).length
    JsonIO.write(configFilePath, cachedLength)
}

function collectData() {
    let collector = {}
    let path_stem = '"kubejs/config" + "/" + "apotheosis/affixes"'

    let filesMap
    filesMap = collector['armor'] = Utils.newMap()
    readJsonFolderFromMod('data', 'apotheosis', 'affixes/armor').forEach(
        (key, value) => filesMap.put(key.path, value)
    )
    filesMap = collector['breaker'] = Utils.newMap()
    readJsonFolderFromMod('data', 'apotheosis', 'affixes/breaker').forEach(
        (key, value) => filesMap.put(key.path, value)
    )
    filesMap = collector['generic'] = Utils.newMap()
    readJsonFolderFromMod('data', 'apotheosis', 'affixes/generic').forEach(
        (key, value) => filesMap.put(key.path, value)
    )
    filesMap = collector['melee'] = Utils.newMap()
    readJsonFolderFromMod('data', 'apotheosis', 'affixes/melee').forEach(
        (key, value) => filesMap.put(key.path, value)
    )
    filesMap = collector['ranged'] = Utils.newMap()
    readJsonFolderFromMod('data', 'apotheosis', 'affixes/ranged').forEach(
        (key, value) => filesMap.put(key.path, value)
    )
    filesMap = collector['shield'] = Utils.newMap()
    readJsonFolderFromMod('data', 'apotheosis', 'affixes/shield').forEach(
        (key, value) => filesMap.put(key.path, value)
    )

    return collector
}

function distributeDataOriginal() {
    let config = JsonIO.read("kubejs/config/cache_cat.json")
    if (config === 1) return
    else JsonIO.write("kubejs/config/cache_cat.json", () => {config["generated"] = true; return config})
    let collector = collectData()
    let filePath = "kubejs/data" + "/" + "apotheosis/affixes"
    for (let item of Object.keys(collector)) {
        console.log(`${item} 已加载`)
        let filePath2 = filePath + `/${item}`
        KubeJSPaths.dir(filePath2)
        let filesMap = collector[item]
        filesMap.forEach((path, jsonObj) => {
            let jsonObjCopy = JsonIO.parse(JsonIO.toPrettyString(jsonObj))
            console.log("jsonObjCopy:", jsonObjCopy);
            for (let i = 0; i <= 5; i++) {
                let filePath3
                let fileName = getFileNameWithoutExtension(path)
                if (i === 0) {
                    filePath3 = filePath2 + `/${fileName}.json`
                } else {
                    filePath3 = filePath2 + `/${fileName}_t${i}.json`
                }
                console.log(filePath3)
                let cached = JsonIO.read(filePath3)
                if (!cached) {
                    let defType = jsonObjCopy.types
                    if (defType) {
                        let newCat = Utils.newList()
                        defType.forEach(cat => {
                            let element = cat.toString().split(":")
                            let end = element[element.length - 1]
                            newCat.add(`yd_a:${end}_t${i}`)
                        })
                        defType.addAll(newCat)
                    } else {
                        let categories = jsonObjCopy.categories
                        if (!categories) {
                            JsonIO.write(filePath3, jsonObjCopy)
                            continue
                        }
                        let newCat = Utils.newList()
                        categories.forEach(cat => {
                            let element = cat.toString().split(":")
                            let end = element[element.length - 1]
                            newCat.add(`yd_a:${end}_t${i}`)
                        })
                        categories.addAll(newCat)
                    }
                    JsonIO.write(filePath3, jsonObjCopy)
                }
            }
        })
    }
}

