const delayTicks = needClass.TickDuration.wrap(100)
ServerEvents.loaded(function (event) {
    console.log("服务端已启动！")

    PlayerData.fullArmors.clear()
    console.log(`旧数据已清除`)
})

ServerEvents.basicCommand("icons", event => {
    // Will print KubeJS icons from their characters, try `/icons BCDEFIJKNTWY`
    event.server.tell(TextIcons.icon(event.input))
})

ServerEvents.basicCommand("heal", event => {
    // Will heal the player
    event.player.heal()
})
