// 缓存玩家数据
const PlayerWrapper = (function () {
    function PlayerWrapper(player) {
        this._player = player
        this._uuid = player.getUuid()
        this._data = {
            fullyEquippedLogic: {
                suitesPredicates: {},
                allSlotsFlag: 0,
                fullActiveSuites: new Matrix2BitTag(100),
                activeSuites: new Matrix2BitTag(100),
                availableItemsTags: new Matrix2BitTag(1000),
                callback: false,
                attributeHolder: new Matrix2BitTag(100)
            }
        }
        try {
          throw new Error(`准备添加玩家${this._uuid}`)
        } catch (error) {
          console.log(error);
        }
        PlayerWrapper.addPlayerWrapper(this._uuid, this)
    }
    const allPlayerWrapper = Utils.newMap()
    PlayerWrapper.addPlayerWrapper = function(uuid, playerWrapper) {
      allPlayerWrapper.put(uuid, playerWrapper)
    }
    PlayerWrapper.removePlayerWrapper = function(uuid) {
      console.log(`准备移除玩家${uuid}`);
      allPlayerWrapper.remove(uuid)
    }
    PlayerWrapper.getPlayerWrapper = function(uuid) {
      return allPlayerWrapper.get(uuid)
    }
    PlayerWrapper.prototype.getPlayer = function() {
      return this._player
    }

    // PlayerWrapper.prototype.getByUuid = function(uuid) {
    //   return allPlayerWrapper.get(uuid)
    // }
    PlayerWrapper.prototype.activateOneSuite = function(oneSuite) {
      this._data.fullyEquippedLogic.fullActiveSuites.set(oneSuite.suiteId)
    }
    PlayerWrapper.prototype.activateSuite = function(oneSuite) {
      console.log(`进入activate`);
      
      this._data.fullyEquippedLogic.activeSuites.set(oneSuite.suiteId)
    }
    PlayerWrapper.prototype.deactivateSuite = function(oneSuite) {
      this._data.fullyEquippedLogic.activeSuites.unset(oneSuite.suiteId)
    }
    PlayerWrapper.prototype.deactivateOneSuite = function(oneSuite) {
      this._data.fullyEquippedLogic.fullActiveSuites.unset(oneSuite.suiteId)
    }
    PlayerWrapper.prototype.getSuitesPredicates = function() {
      return this._data.fullyEquippedLogic.suitesPredicates
    }
    PlayerWrapper.prototype.getActiveSuites = function() {
      return this._data.fullyEquippedLogic.activeSuites
    }
    PlayerWrapper.prototype.getFullActiveSuites = function() {
      return this._data.fullyEquippedLogic.fullActiveSuites
    }
    PlayerWrapper.prototype.getFullyEquippedLogic = function() {
      return this._data.fullyEquippedLogic
    }
    return PlayerWrapper
})()
// function getRow() {
//     return parseInt(new Error().stack.split(':')[7]);
// }
global.PlayerWrapper = PlayerWrapper
