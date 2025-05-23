const SpecialEffectsFunc = (function() {
    function SpecialEffectsFunc(name, funcInstance, boundEvent) {
        this.name = name
        this.id = ++id || -1
        this.funcInstance = funcInstance
        this.boundEvent = boundEvent || null
    }
    let id = -1
})()