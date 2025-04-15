// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded client example script)')
const MOD_CHANNEL_TEST = 'kubejs:charge_test';
// 定义全局变量记录状态
let keyPressStartTime = 0;
const TRIGGER_DURATION = 2000; // 触发时长（毫秒）
const TARGET_BUTTON = Java.loadClass('com.mojang.blaze3d.platform.InputConstants').MOUSE_BUTTON_RIGHT; // 监听 鼠标右 键

// 监听 鼠标右 键按下事件
NativeEvents.onEvent("net.neoforged.neoforge.client.event.InputEvent$MouseButton$Post", event => {
    if (event.getButton() === TARGET_BUTTON) { // 1=按下，0=释放
        const action = event.getAction()
        if (action === 1) {
            keyPressStartTime = Date.now(); // 记录按下时间戳
        } else if (action === 0) {
            keyPressStartTime = 0; // 按键释放时重置计时
        }
    }
});

// 每客户端 Tick 检查持续时间
ClientEvents.tick(event => {
    if (keyPressStartTime === 0) return; // 未按下时跳过
    const { player } = event;
    const currentTime = Date.now();
    const elapsed = currentTime - keyPressStartTime;

    if (elapsed >= TRIGGER_DURATION) {
        // 触发逻辑（例如发送数据包到服务端）
        player.sendData(MOD_CHANNEL_TEST, { duration: elapsed});
        keyPressStartTime = 0; // 重置以防止重复触发
    }
});
// 客户端脚本（client_scripts/send_packet.js）
// nativeEvents.onEvent("net.neoforged.neoforge.client.event.InputEvent$Key", event => {
//     if (event.getKey() === 257) { // 按下回车键
//         channel.sendToServer(new CustomPacket()); // 发送自定义数据包
//     }
// });