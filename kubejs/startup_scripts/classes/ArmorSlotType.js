// priority: 99
// type: startup

const ArmorSlotType = (function() {
    function ArmorSlotType(name, slotId) {
        this.name = name
        this.pos = 1 << slotId
    }
    const Exposed = {}
    let nameToIdMap = Exposed.nameToIdMap = {
        "offhand": 5,
        "head": 4,
        "chest": 3,
        "legs": 2,
        "feets": 1,
        "mainhand": 0
    }
    Object.entries(nameToIdMap).forEach(([name, slotId]) => {
        console.log([name, slotId]);
        
        Exposed[name.toUpperCase()] = new ArmorSlotType(name, slotId)
        console.log(Exposed);
        
    })
    return Exposed
})()