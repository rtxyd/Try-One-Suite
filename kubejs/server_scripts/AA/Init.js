// priority: 100
// type: server

const needClass = global.needClass
const apotheosisClass = global.apotheosisClass

const $KEY = global.$KEY
const MyTools = global.MyTools
const PlayerLogIn = global.PlayerLogIn
const PlayerWrapper = global.PlayerWrapper
const AttributeHolderMap = global.AttributeHolderMap
const FullyEquippedLogic = global.FullyEquippedLogic
const ItemWrapper = global.ItemWrapper
const Matrix2BitTag = global.Matrix2BitTag
const ModifierWrapper = global.ModifierWrapper
const OneSuite = global.OneSuite


const $CRIT_CHANCE_ID = "apothic_attributes:crit_chance"
const $CRIT_DAMAGE_ID = "apothic_attributes:crit_damage"

// 1

const $CRIT_DAM = MyTools.getAttributeHolder($CRIT_DAMAGE_ID)
const $CRIT_CHA = MyTools.getAttributeHolder($CRIT_CHANCE_ID)

// 2
const attr_map = new Map([
    [String("g_crit_cha"), $CRIT_CHA],
    [String("g_crit_dam"), $CRIT_DAM]
])

const PlayerData = {
    fullArmors: new Map(),
    specialEquipments: new Map()
}

const allPlayerWrapper = PlayerWrapper.allPlayerWrapper
global.AttributeMap.register()