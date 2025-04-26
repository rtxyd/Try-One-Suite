// priority: 90
// type: server



/**
 * @description 特殊套装逻辑处理类
 * @author rtxyd
 * @loadAfter 99-Trigger
 * @param {string} name - 套装名称
 * @param {TypedArrayList<Integer>} checkArr - 检查项数组
 * @param {boolean} invCheck - 是否存在物品栏检查
 * @param {function} triggerFunc - 触发函数
 */

const $Integer = Java.loadClass('java.lang.Integer')
function SpecialSuiteLogic(name, checkArr, invCheck, triggerFunc) {
    Trigger.call(this, triggerFunc)

    if (typeof name !== 'string') {
        throw new Error('name must be a string')
    }
    if (!(checkArr instanceof TypedArrayList) || checkArr.getType() !== $Integer) {
        throw new Error(`checkArr must be a TypedArrayList<Integer>, now instance is ${checkArr}, element type is ${checkArr.getType()}`)
    }
    if (typeof invCheck !== 'boolean') {
        throw new Error('invCheck must be a boolean')
    }

    this._name = name;
    this._checkArr = checkArr;
    this._invCheck = invCheck;
}

SpecialSuiteLogic.prototype = Object.create(Trigger.prototype)
SpecialSuiteLogic.prototype.constructor = SpecialSuiteLogic

SpecialSuiteLogic.prototype.getName = function() {
    return this._name
}

SpecialSuiteLogic.prototype.getCheckArr = function() {
    return this._checkArr
}

SpecialSuiteLogic.prototype.isInvCheck = function() {
    return this._invCheck
}