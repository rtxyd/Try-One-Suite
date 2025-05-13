StartupEvents.init(event => {
    KubeJS.modEventBus.register($R)
    InitLootCategories()
})

StartupEvents.postInit(event => {
    // GenerateDataFiles()
    distributeDataOriginal()
})
