const ItemWrapper = (function() {
    /**
     * [ItemWrapper description]
     *
     * @param   {[String]}  resourceLocation  [resourceLocation description]
     * @param   {[Set]}  suites             [suite description]
     */
    function ItemWrapper(holder, suites) {
        this._holder = holder
        this.suites = suites
        this._tagId = tagId++
        inner_map.put(holder, this)
    }
    let tagId = 0
    const inner_map = Utils.newMap()
    ItemWrapper.getByHolder = function(_holder) {
        return inner_map.get(_holder)
    }
    ItemWrapper.prototype.getHolder = function() {
        return this._holder
    }
    ItemWrapper.prototype.getId = function() {
        return this._tagId
    }
    ItemWrapper.tryCreateByResourceLocation = function(resourceLocation, suite) {
        let holder = needClass.BuiltInRegistries.ITEM["getHolder(net.minecraft.resources.ResourceLocation)"](prLoc(resourceLocation))
        let obj = ItemWrapper.getByHolder(holder)
        if (obj) {
            obj.suites.add(suite)
            return obj
        } else {
            return new ItemWrapper(holder, new Set([suite]))
        }
    }
    ItemWrapper.tryCreateByHolder = function(holder, suite) {
        if(!holder) {
            throw new Error("holder must be defined")
        }
        let obj = ItemWrapper.getByHolder(holder)
        if (obj) {
            obj.suites.add(suite)
            return obj
        } else {
            return new ItemWrapper(holder, new Set([suite]))
        }
    }
    return ItemWrapper
})()

global.ItemWrapper = ItemWrapper