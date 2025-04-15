// 客户端脚本 client_scripts
const CHANNEL_HANDHELD = 'kubejs:hand_check';


// 每tick检查手持物品（优化：可降低检测频率）
ClientEvents.tick(e => {
    const player = e.player;
    if (player.tickCount % 20 !== 0) return; // 每秒检测一次
    const i = 1
    const isHoldingTarget_1 = player.getMainHandItem().getId() === 'minecraft:diamond_sword';
    // 发送状态到服务端
    player.sendData(CHANNEL_HANDHELD, { holding: isHoldingTarget_1 });
});