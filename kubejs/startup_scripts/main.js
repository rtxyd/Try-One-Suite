StartupEvents.init(event => {
    KubeJS.modEventBus.register($R)
    InitLootCategories()
    delete InitLootCategories
})

StartupEvents.postInit(event => {
    AttributeMap.register()
    PostInitObjs.register()
})
