// priority: 99
// type: startup

const AttributeMap =  (function() {
    const Exposed = {}
    function AttributeMap(stringLoc) {
        if (Exposed[stringLoc]) {
            return
        }
        else {
            this.holder = Exposed[stringLoc] = needClass.BuiltInRegistries.ATTRIBUTE.getHolder(prLoc(stringLoc)).orElseGet(() => {throw new Error(`${stringLoc} is invalid or not registered yet`)});
            console.log(`建立属性映射：${stringLoc} => ${this.holder}`);
        }
    }
    const postRegisterList = [
        "apothic_attributes:crit_chance",
        "apothic_attributes:crit_damage"
    ]
    Exposed.register = function() {
        postRegisterList.forEach((stringLoc) => {
            new AttributeMap(stringLoc)
        })
    }
    return Exposed
})()


global.AttributeMap = AttributeMap