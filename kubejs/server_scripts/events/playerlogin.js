PlayerEvents.loggedIn(e => {
    // delete e.player.persistentData.hasScheduledSetCheck
    const player = e.player
    const playerWrapper = new PlayerWrapper(player)
    try {
        // PlayerLogIn.initPlayerFullArmors(player)
        // PlayerLogIn.initPlayerSpecialEquipments(player)
    } catch (error) {}

    e.server.schedule(delayTicks, callback => {
        console.log("调度任务执行！") // 检查此日志是否输出
        let player = e.player
        const message = Text["join(net.minecraft.network.chat.Component[])"](
            TextIcons.icon("ASDDS"), // 图标
            Text.green(" 点击查看任务") // 文本
        )
        player.tell(message)
    })
})
