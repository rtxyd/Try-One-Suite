// priority: 90
// type: server

/**
 * @relatedClass
 * AttributeModifier: Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier'),
 */

/**
 * @description 全套盔甲的触发逻辑
 * @author rtxyd
 * @loadAfter 99-Trigger
 * @param {armor} armor - 外部定义的护甲（虚拟护甲，不一定实装）
 * @param {boolean} triggerOnHit - 是否在受击时触发
 * @param {TypedArrayList<AttributeModifier>} modifiers - 加成
 * @param {function} triggerFunc - 触发函数
 */

function FullArmorLogic(damage, triggerOnHit, modifiers, triggerFunc) {
    // 调用父类构造函数
    Trigger.call(this, triggerFunc)
    
    // 参数验证
    if (typeof armor !== 'number') {
        throw new Error('damage must be a number')
    }
    if (typeof triggerOnHit !== 'boolean') {
        throw new Error('releaseUsing must be a boolean')
    }
    
    if (!(modifiers instanceof TypedArrayList) || modifiers.getType() !== needClass.AttributeModifier) {
        throw new Error('modifiers must be an TypedArrayList<AttributeModifier>')
    }

    // 属性赋值
    this._armor = armor
    this._triggerOnHit = false
    this._modifiers = modifiers
}

// 设置原型继承
FullArmorLogic.prototype = Object.create(Trigger.prototype)
FullArmorLogic.prototype.constructor = FullArmorLogic

// 实例方法
FullArmorLogic.prototype.getArmor = function() {
    return this._damage
}

FullArmorLogic.prototype.isTriggerOnHit = function() {
    return this._triggerOnHit
}

FullArmorLogic.prototype.getModifiers = function() {
    return this._modifiers
}

FullArmorLogic.checkFullSet = function(entity) {
    const armorItems = entity.getArmorSlots()
    const head = headMap.get(String(armorItems[3].getId()))
    const chest = chestplateMap.get(String(armorItems[2].getId()))
    const legs = legsMap.get(String(armorItems[1].getId()))
    const boots = bootsMap.get(String(armorItems[0].getId()))
    return head && head === chest && chest === legs && legs === boots
}

FullArmorLogic.fastCheckSet = function(slotFlag, toId) {

    return 
}