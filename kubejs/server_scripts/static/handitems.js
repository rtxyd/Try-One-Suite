// priority: 88
// type: server

const WEAPON_HANDLERS = new Map([
    [
        "minecraft:diamond_sword",
        {
            damage: 8,
            onHit: target => {
                target.setRemainingFireTicks(60)
                Client.player.tell(`_TEST`)
            } // 测试生效
        }
    ],
    ["eternal_starlight:energy_sword", energySword],
    [
        "modx:ice_blade",
        {
            damage: 6,
            onHit: target => target.setTicksFrozen(100)
        }
    ]
])
