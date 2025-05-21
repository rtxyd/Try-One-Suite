// priority: 97
// type: startup

const PostInitObjs = (function() {
    const Exposed = {}
    const suite_registers = []
    Exposed.addSuiteRegister = function(suiteRegister) {
        suite_registers.push(suiteRegister)
    }
    Exposed.register = function() {
        suite_registers.forEach((suite_register) => {
            suite_register()
        })
        delete Exposed.register
    }
    return Exposed
})()
