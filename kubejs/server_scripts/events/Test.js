// const TickDuration = Java.loadClass('dev.latvian.mods.kubejs.util.TickDuration');
// const Cast = Java.loadClass('dev.latvian.mods.kubejs.util.Cast');
const delayTicks = needClass.TickDuration.wrap(100);
ServerEvents.loaded(function (event) {
    console.log("服务端已启动！");
    // let server = event.server;
    // console.log("服务端启动时间戳:", Date.now());

    // 测试 5000 ms（5 秒）
    // event.server.schedule(5000, callback => {
    //   console.log("5000 ms 延迟执行时间戳:", Date.now());
    // });
  
    // // 测试 10000 ms（10 秒）
    // event.server.schedule(10000, callback => {
    //   console.log("10000 ms 延迟执行时间戳:", Date.now());
    // });
    // event.server.schedule(20000, callback => {
    //   console.log("20000 ms 延迟执行时间戳:", Date.now());
    // });
    event.server.schedule(delayTicks, callback => {
      console.log("调度任务执行！"); // 检查此日志是否输出
      event.server.players.forEach(player => {
        const message = Text['join(net.minecraft.network.chat.Component[])'](
          TextIcons.icon('ASDDS'), // 图标
          Text.green(' 点击查看任务')           // 文本
        );
        
        player.tell(message);
    })
  })
})

ServerEvents.basicCommand('icons', event => {
	// Will print KubeJS icons from their characters, try `/icons BCDEFIJKNTWY`
	event.server.tell(TextIcons.icon(event.input))
})

ServerEvents.basicCommand('heal', event => {
	// Will heal the player
	event.player.heal()
})
// LevelEvents.loaded(function (event) {
//     console.log("服务端已启动！");
//     event.server.schedule(115 * MINUTE, event.server, function (callback) {
//       callback.data.tell('Server restarting in 5 minutes!')
//     })
    
//     event.server.schedule(120 * MINUTE, event.server, function (callback) {
//       callback.data.runCommand('/stop')
//     })
//   })