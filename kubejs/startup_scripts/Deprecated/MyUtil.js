const MyUtil = {
    initDataMapDirect: function() {
        const catMapType = apotheosisClass.Apoth$DataMaps.LOOT_CATEGORY_OVERRIDES
        const allItems = needClass.BuiltInRegistries.ITEM
        const catOverridesMap = allItems.getDataMap(catMapType)
        // console.log(allItems.getDataMap(catMapType));
        const catNone = apotheosisClass.Apoth$LootCategories.NONE
        allItems.forEach(item => {
            //@Deprecated builtInRegistryHolder
            catOverridesMap.put(item.builtInRegistryHolder().getKey(), catNone)
        })
    },

    getRandomElements: function(array, count) {
        // let jsArray = Array.isArray(array) ? array : Array.from(array);

        if (array.length === 0 || count <= 0 || !Number.isInteger(count)) {
            return [];
        }
        
        // 确保请求数量不超过数组长度
        count = Math.min(count, array.length);
        let shuffled = array.slice();
        
        // Fisher-Yates 洗牌算法
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        
        // 返回前count个元素
        return shuffled.slice(0, count);
    },

    shuffleArray: function (array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            [array[i], array[j]] = [array[j], array[i]]
        }
        return array
    },

    createShuffleSelector: function(elements) {
        // 复制原始数组
        let shuffled = []
        let currentIndex = 0

        const reset = () => {
            // 手动复制并洗牌
            shuffled = this.shuffleArray(elements.slice())
            currentIndex = 0
        }

        reset()

        return {
            next: () => {
                if (currentIndex >= shuffled.length) reset()
                return shuffled[currentIndex++]
            },
            reset: reset
        }
    },

    serverScheduleEvent: function(sever, ticks, callback) {
        return server.schedule(this.setTickDuration(10), callback)
    },

    addMultiModifier: function(TypedArrayList, attrIns, removeLatter, ticks) {
        try {
            attrIns.addTransientModifier(modifier)
            this.serverScheduleEvent(attacker.getServer(), ticks, callback => {
                if(!attacker) return
                attrIns['removeModifier(net.minecraft.world.entity.ai.attributes.AttributeModifier)'](modifier)
                attacker.tell(`触发了`)
            })
        } catch (error) {
            attacker.tell(error)
        }
    },

    removeMultiModifier: function(TypedArrayList, attrIns) {
        
    },

    tryLoadClassDirect: function(className) {
        return Java['tryLoadClass(java.lang.String)'](className)
    }
}