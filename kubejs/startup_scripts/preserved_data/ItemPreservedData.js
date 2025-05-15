// priority: 102
// type: startup

const ItemPreservedData = (function () {
    const iterator = function() {
        Object.entries(catOverridesArmor).forEach(([category, items]) => {
            console.log(`当前材质分类: ${category}`);
            Object.entries(items).forEach(([originalItem, replacementItem]) => {

            });
          });
    }
    const catOverridesArmor = {}
    return {
        catOverridesArmor: catOverridesArmor,
        iterator: iterator
    }
})()