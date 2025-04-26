// priority: 99
// type: server

function Trigger(triggerFunc) {
    // 检查参数是否为函数
    if (typeof triggerFunc !== 'function') {
        throw new Error('Trigger must be initialized with a function')
    }
    this._triggerFunc = triggerFunc // 使用下划线前缀避免与方法名冲突
    }

Trigger.prototype.trigger = function() {
    return this._triggerFunc.apply(this, arguments)
}