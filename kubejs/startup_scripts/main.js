StartupEvents.init(event => {
    KubeJS.modEventBus.register($R)
    InitLootCategories()
})
