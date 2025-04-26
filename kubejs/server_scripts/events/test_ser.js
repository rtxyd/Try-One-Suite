// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

const MOD_CHANNEL_TEST = 'kubejs:charge_test';
// 接收客户端长按事件
NetworkEvents.dataReceived(MOD_CHANNEL_TEST, event => {
    const player = event.player;
    const duration = event.data.duration;
    
    player.tell(`你长按了 鼠标右键 键 ${duration} 毫秒！`);
    player.runCommand("/give @s minecraft:diamond 1"); // 给予钻石
});