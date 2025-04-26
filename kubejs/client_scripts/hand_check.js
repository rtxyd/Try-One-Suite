// 客户端脚本 client_scripts
const CHANNEL_HANDHELD = 'kubejs:hand_check_test';


// 每tick检查手持物品（优化：可降低检测频率）
ClientEvents.tick(e => {
    const player = e.player;
    if (player.tickCount % 20 !== 0) return // 每秒检测一次
    // let i = 1
    let isHoldingTarget_1 = player.getMainHandItem().getId() === 'minecraft:diamond_sword'
    // let isHoldingGatling = player.getMainHandItem().getId() === 'pneumaticcraft:minigun'
    // 发送状态到服务端
    player.sendData(CHANNEL_HANDHELD, { holding: isHoldingTarget_1 })
    // player.sendData(CHANNEL_HANDHELD, { gatling: isHoldingGatling })
});