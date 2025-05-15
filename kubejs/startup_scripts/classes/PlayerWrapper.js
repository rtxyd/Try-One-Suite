// 缓存玩家数据
function PlayerWrapper(player) {
    this.player = player
    this.uuid = player.getUuid()
    this.data = {
      fullArmors: { value: null },
      specialEquipments: {}
    }
    PlayerWrapper.allPlayerWrapper.put(this.uuid, this)
}

PlayerWrapper.allPlayerWrapper = new needClass.HashMap()

global.PlayerWrapper = PlayerWrapper