// priority: 101
// type: server

/**
 * @relatedClass
 * 6,3:   BuiltInRegistries: Java.loadClass('net.minecraft.core.registries.BuiltInRegistries'),
 * 5,3:   ResourceLocation: Java.loadClass('net.minecraft.resources.ResourceLocation'),
 * 1,7:   TickDuration: Java.loadClass('dev.latvian.mods.kubejs.util.TickDuration'),
 */

/**
 * 工具类
 * @namespace
 */

const RegistryTools = {
    /**
     * 通过ID获取Holder对象
     * @param {string} id - 注册表ID
     * @returns {Holder} 对应的Holder对象
     * @throws {Error} 当ID无效时抛出错误
     */
    getAttributeHolder: function(id) {
        try {
            return needClass.BuiltInRegistries.ATTRIBUTE
                .getHolder(needClass.ResourceLocation.parse(id))
                .orElseThrow(() => new Error(`Invalid attribute ID: ${id}`))
        } catch (error) {
            console.error(`Failed to get holder for ID: ${id}`)
            throw error
        }
    },

    /**
     * 检查ID是否存在于注册表中
     * @param {string} id - 注册表ID
     * @returns {boolean} 是否存在
     */
    hasAttribute: function(id) {
        return needClass.BuiltInRegistries.ATTRIBUTE
            .containsKey(needClass.ResourceLocation.parse(id))
    },

    setTickDuration: function(ticks) {
        return needClass.TickDuration.wrap(ticks)
    },

    clonePosition: function(entity) {
        console.log(`entity: ${entity}`);
        
        return {
            x: entity.x,
            y: entity.y,
            z: entity.z
        }
    },

    // getRandomElements: function(array, count) {
    //     // let jsArray = Array.isArray(array) ? array : Array.from(array);

    //     if (array.length === 0 || count <= 0 || !Number.isInteger(count)) {
    //         return [];
    //     }
        
    //     // 确保请求数量不超过数组长度
    //     count = Math.min(count, array.length);
    //     let shuffled = array.slice();
        
    //     // Fisher-Yates 洗牌算法
    //     for (let i = shuffled.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    //     }
        
    //     // 返回前count个元素
    //     return shuffled.slice(0, count);
    // },

    // shuffleArray: function (array) {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1))
    //         [array[i], array[j]] = [array[j], array[i]]
    //     }
    //     return array
    // },

    // createShuffleSelector: function(elements) {
    //     // 复制原始数组
    //     let shuffled = []
    //     let currentIndex = 0

    //     const reset = () => {
    //         // 手动复制并洗牌
    //         shuffled = this.shuffleArray(elements.slice())
    //         currentIndex = 0
    //     }

    //     reset()

    //     return {
    //         next: () => {
    //             if (currentIndex >= shuffled.length) reset()
    //             return shuffled[currentIndex++]
    //         },
    //         reset: reset
    //     }
    // },

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

    /**
     * 检查Array的元素是否为单一类型
     *
     * @param   {Array}  arr  [arr description]
     *
     * @return  {boolean}       [return description]
     */
    isSameTypeArray: function(arr) {
        if (!Array.isArray(arr) || arr.length === 0) {
            return false;
        }
        
        // 获取第一个元素的类型
        const firstType = typeof arr[0];
        
        // 特殊处理：如果第一个元素是null或undefined
        if (firstType === 'object' && arr[0] === null) {
            return arr.every(item => item === null);
        }
        
        // 特殊处理：如果是对象类型，检查具体的构造函数
        if (firstType === 'object') {
            const constructor = arr[0].constructor;
            return arr.every(item => item && item.constructor === constructor);
        }
        
        // 基本类型检查
        return arr.every(item => typeof item === firstType);
    }
}

Object.freeze(RegistryTools)