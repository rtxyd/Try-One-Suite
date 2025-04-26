// priority: 90
// type: server

/**
 * @relatedClass
 * AttributeModifier: Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier'),
 */

/**
 * @description 手中物品的触发逻辑
 * @author rtxyd
 * @loadAfter 99-Trigger
 * @param {number} damage - 外部定义的伤害（虚拟伤害，不一定实装）
 * @param {boolean} releaseUsing - 是否释放右键
 * @param {TypedArrayList<AttributeModifier>} modifiers - 加成
 * @param {function} triggerFunc - 触发函数
 */

function HandItemLogic(damage, releaseUsing, modifiers, triggerFunc) {
    // 调用父类构造函数
    Trigger.call(this, triggerFunc)
    
    // 参数验证
    if (typeof damage !== 'number') {
        throw new Error('damage must be a number')
    }
    if (typeof releaseUsing !== 'boolean') {
        throw new Error('releaseUsing must be a boolean')
    }
    
    if (!(modifiers instanceof TypedArrayList) || modifiers.getType() !== needClass.AttributeModifier) {
        throw new Error('modifiers must be an TypedArrayList<AttributeModifier>')
    }

    // 属性赋值
    this._damage = damage
    this._releaseUsing = releaseUsing
    this._modifiers = modifiers
}

// 设置原型继承
HandItemLogic.prototype = Object.create(Trigger.prototype)
HandItemLogic.prototype.constructor = HandItemLogic

// 实例方法
HandItemLogic.prototype.getDamage = function() {
    return this._damage
}

HandItemLogic.prototype.isReleaseUsing = function() {
    return this._releaseUsing
}

HandItemLogic.prototype.getModifiers = function() {
    return this._modifiers
}