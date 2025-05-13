// priority: 100
// type: startup

function loadResourcePack(modId) {
    let resourcePack
    try {
        resourcePack = loadPackClass.ResourcePackLoader.getPackFor(modId).get()
    } catch (error) {
        console.warn(`ModId "${modId}" is not loaded.`)
    }
    if (!resourcePack) return
    return resourcePack
}

function loadPack(type, modId) {
    type = type == "assets" ? 0 : type == "data" ? 1 : -1
    if (type == -1) {
        console.warn(`Package type is not valid, use "assets" or "data"`)
        return
    }
    let pack = new loadPackClass.FallbackResourceManager(type, modId)
    let resourcePack = loadResourcePack(modId)
    if (resourcePack) {
        // 创建 PackLocationInfo
        const id = modId
        const title = loadPackClass.Component.empty()
        const source = loadPackClass.PackSource.BUILT_IN
        const knownPackInfo = loadPackClass.Optional.empty()

        const packLocationInfo = new loadPackClass.PackLocationInfo(id, title, source, knownPackInfo)

        // 调用 openPrimary 或 openFull
        const packResources = resourcePack.openPrimary(packLocationInfo)
        pack.push(packResources)
    }
    return pack
}

global.readJsonFileFromMod = (type, modId, resourceLocation) => {
    let pack = loadPack(type, modId)
    if (pack.listPacks().toList().empty) return Utils.emptyMap()
    resourceLocation = resourceLocation.endsWith(".json") ? crLoc(resourceLocation) : crLoc(resourceLocation + ".json")
    // 获取指定ResourceLocation的Resource类
    let resource = pack.getResource(resourceLocation).orElse(null)
    if (resource == null){
        console.warn(`Resource "${resourceLocation}" not found.`)
        return Utils.emptyMap()
    }
    // 返回BufferedReader类
    let reader = resource.openAsReader()
    // 使用流式操作创建String类型的Json格式
    let string = reader.lines().collect(loadPackClass.Collectors.joining("\n"))
    // 打开后要关闭
    reader.close()
    // 手动释放资源
    pack.listPacks().forEach(packResource => packResource.close())
    return JsonIO.parse(string)
}

global.readJsonFolderFromMod = (type, modId, folder, predicate) => {
    let jsonMap = Utils.newMap()
    let pack = loadPack(type, modId)
    if (pack.listPacks().toList().empty) return jsonMap
    predicate = predicate == null ? (rl => rl.path.endsWith(".json")) : predicate
    let map = Utils.emptyMap().copyOf(pack.listResources(folder, predicate))
    map.forEach((key,val) => {
        if (!key.path.endsWith(".json")) return
        let reader = val.openAsReader()
        let string = reader.lines().collect(loadPackClass.Collectors.joining("\n"))
        reader.close()
        jsonMap.put(key, JsonIO.parse(string))
    })
    pack.listPacks().forEach(packResource => packResource.close())
    return jsonMap
}

global.getFileNameWithoutExtension = function(path) {
    // 1. 分割命名空间和路径
    // const splitParts = path.split(':')
    // 2. 分割路径并过滤空段
    const segments = path.split('/').filter(segment => segment.trim() !== '')
    if (segments.length === 0) return ''
    // 3. 获取文件名（带后缀）
    const fileNameWithExt = segments[segments.length - 1]
    // 4. 去除扩展名
    const dotIndex = fileNameWithExt.lastIndexOf('.')
    return dotIndex === -1 ? fileNameWithExt : fileNameWithExt.substring(0, dotIndex)
}

const readJsonFileFromMod = global.readJsonFileFromMod
const readJsonFolderFromMod = global.readJsonFolderFromMod
const getFileNameWithoutExtension = global.getFileNameWithoutExtension