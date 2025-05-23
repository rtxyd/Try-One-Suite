StartupEvents.init(event => {
    KubeJS.modEventBus.register($R)
    InitLootCategories()
})

StartupEvents.postInit(event => {
    AttributeMap.register()
    PostInitObjs.register()
})
