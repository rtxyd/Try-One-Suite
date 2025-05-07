const delayTicks = needClass.TickDuration.wrap(100)
ServerEvents.loaded(function (event) {
    console.log("服务端已启动！")

    PlayerData.fullArmors.clear()
    console.log(`旧数据已清除`)
})

ServerEvents.generateData("before_mods", event => {
    const filePath = "kubejs/data" + "/" + "apotheosis/data_maps/item/loot_category_overrides.json" // 文件路径
    let data = JsonIO.read(filePath)
    if (!data) {
        console.log("文件不存在，创建新文件！")
        data = { values: {} }
    }
    console.log("JSON文件已更新！")
    const catMapType = apotheosisClass.Apoth$DataMaps.LOOT_CATEGORY_OVERRIDES
    const allItems = needClass.BuiltInRegistries.ITEM
    const catNone = apotheosisClass.Apoth$LootCategories.NONE.getKey().toString()
    allItems.forEach(item => {
        let key = item.id
        if (data.values.hasOwnProperty(key)) return
        data.values[key] = catNone
    })
    JsonIO.write(filePath, data)
})

ServerEvents.basicCommand("icons", event => {
    // Will print KubeJS icons from their characters, try `/icons BCDEFIJKNTWY`
    event.server.tell(TextIcons.icon(event.input))
})

ServerEvents.basicCommand("heal", event => {
    // Will heal the player
    event.player.heal()
})
