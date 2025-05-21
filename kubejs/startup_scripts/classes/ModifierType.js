const ModifierType = (function() {
    let id = -1
    const Exposed = {}
    function ModifierType(name) {
        id += 1
        this.name = name
        this.id = 1 << id
        Exposed[name.toUpperCase()] = this
        console.log(`建立加成类型：${this}`);
    }
    new ModifierType("mob_effect")
    new ModifierType("attribute_modifier")
    return Exposed
})()
