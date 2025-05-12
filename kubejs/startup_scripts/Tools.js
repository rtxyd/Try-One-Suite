// priority: 98
// type: startup

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

global.MyTools = {
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

    clearOut: function(object) {
        object = null
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

    // 添加或更新数据
    setPlayerValue: function(uuidString, newValue) {
        // 获取或创建数据对象
        const data = PlayerData.fullArmors.get(uuidString) || { value: null };
        data.value = newValue; // 直接修改对象的属性
        PlayerData.fullArmors.set(uuidString, data);
    },

    getPlayerDataSafe: function(uuid) {
        return PlayerData.fullArmors.get(uuid) || { value: false };
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

const MyTools = global.MyTools
Object.freeze(global.MyTools)