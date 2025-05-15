// priority: 97
// type: startup

global.PlayerLogIn = {}

const PlayerLogIn = global.PlayerLogIn

PlayerLogIn.initPlayerFullArmors = function(player) {
    PlayerData.fullArmors[this.getPlayerStringUuid(player)] = {value: null}
}

PlayerLogIn.initPlayerSpecialEquipments = function(player) {
    initPlayerSpecialEquipments[this.getPlayerStringUuid(player)]
}

PlayerLogIn.getPlayerStringUuid = function(player) {
    return String(player.getStringUuid())
}

