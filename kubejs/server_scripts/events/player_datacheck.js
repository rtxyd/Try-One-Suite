// 服务端脚本 server_scripts
const CHANNEL_HANDHELD_TEST = 'kubejs:hand_check';

// 接收客户端数据
NetworkEvents.dataReceived(CHANNEL_HANDHELD_TEST, e => {
    const player = e.player
    player.persistentData.holdingSword = e.data.holding
    // player.persistentData.holdingGatling = e.data.gatling // 存储到持久化数据
});