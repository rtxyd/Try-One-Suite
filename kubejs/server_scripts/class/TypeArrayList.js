// priority: 100
// type: server

/**
 * @description 带类型检查的ArrayList包装类
 * @author rtxyd
 */

function TypedArrayList(type) {
    let $ArrayList = Java.loadClass('java.util.ArrayList')
    this._list = new $ArrayList()
    this._type = type
}

TypedArrayList.prototype.add = function(element) {
    if (!(element instanceof this._type)) {
        throw new Error(`Element must be instance of ${this._type}`)
    }
    return this._list.add(element)
}

TypedArrayList.prototype.addAll = function(collection) {
    if (!collection.every(item => item instanceof this._type)) {
        throw new Error(`All elements must be instances of ${this._type}`)
    }
    return this._list.addAll(collection)
}

TypedArrayList.prototype.get = function(index) {
    return this._list.get(index)
}

TypedArrayList.prototype.getType = function() {
    return this._type
}

TypedArrayList.prototype[Symbol.hasInstance] = function(instance) {
    return instance instanceof TypedArrayList
}

// 代理其他常用方法
TypedArrayList.prototype.size = function() {
    return this._list.size()
}

TypedArrayList.prototype.isEmpty = function() {
    return this._list.isEmpty()
}

TypedArrayList.prototype.clear = function() {
    this._list.clear()
}

// 添加静态工厂方法
TypedArrayList.ofInteger = function() {
    const $Integer = Java.loadClass('java.lang.Integer');
    const list = new TypedArrayList($Integer);

    Array.from(arguments).forEach((arg, index) => {
        // ========================
        // 关键修改点：绕过Rhino的类型自动转换
        // ========================
        if (typeof arg !== 'number' || !Number.isInteger(arg)) {
            throw new Error(`参数#${index} ${arg} 必须为JavaScript整数`);
        }

        // 强制转换为32位整数（处理隐式浮点表示）
        const intValue = arg | 0;
        
        // 双重验证（防止科学计数法等特殊情况）
        if (arg !== intValue) {
            throw new Error(`参数#${index} ${arg} 超出32位整数范围`);
        }

        // ========================
        // 关键修改点：使用字符串构造方式
        // ========================
        console.log([
            `原始类型:${typeof arg}`,
            `原始值:${arg}`,
            `位运算后:${intValue}`,
            `字符串格式:"${String(intValue)}"`
        ].join(' | '));
        list.add($Integer.valueOf(String(intValue))); // 显式使用字符串格式
    });

    return list;
};

TypedArrayList.of = function(type) {
    if (!type) {
        throw new Error('Type parameter is required')
    }
    
    // 检查除了type之外是否还有其他参数
    if (arguments.length <= 1) {
        throw new Error('At least one element is required')
    }
    
    let list = new TypedArrayList(type)
    
    // 从第二个参数开始遍历（跳过type参数）
    for (let i = 1; i < arguments.length; i++) {
        let element = arguments[i]
        if (!(element instanceof type)) {
            throw new Error(`Element #${i-1} must be instance of given type`)
        }
        list.add(element)
    }
    
    return list
}

// 添加从数组创建的方法
TypedArrayList.from = function(type, array) {
    let list = new TypedArrayList(type)
    for (let i = 0; i < array.length; i++) {
        list.add(array[i])
    }
    return list
}

/**
 * 为列表添加遍历方法
 * @param {Function} callback - 回调函数，接收三个参数：当前元素、索引、列表本身
 * @param {Object} [thisArg] - 回调函数中若使用 this 所代表的对象
 */
TypedArrayList.prototype.forEach = function(callback, thisArg) {
    if (typeof callback !== 'function') {
        throw new Error('callback must be a function')
    }
    
    const size = this.size()
    for (let i = 0; i < size; i++) {
        callback.call(thisArg, this.get(i), i, this)
    }
}

TypedArrayList.empty = function(type) {
    if (!type) {
        throw new Error('Type parameter is required')
    }
    return new TypedArrayList(type)
}