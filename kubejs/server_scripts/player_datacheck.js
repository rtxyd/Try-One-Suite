// 服务端脚本 server_scripts
const CHANNEL_HANDHELD = 'kubejs:hand_check';

// 接收客户端数据
NetworkEvents.dataReceived(CHANNEL_HANDHELD, e => {
    const player = e.player;
    player.persistentData.holdingSword = e.data.holding; // 存储到持久化数据
});