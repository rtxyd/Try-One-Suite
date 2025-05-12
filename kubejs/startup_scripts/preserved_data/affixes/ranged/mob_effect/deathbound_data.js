let ranged_deathbound_data = function deathbound() {
    return {
        "type": "apotheosis:mob_effect",
        "definition": {
            "affix_type": "basic_effect",
            "exclusive_set": [
                "apotheosis:ranged/mob_effect/blighted"
            ],
            "weights": {
                "pinnacle": {
                    "quality": 5.0,
                    "weight": 20
                }
            }
        },
        "mob_effect": "minecraft:wither",
        "stack_on_reapply": true,
        "stacking_limit": 4,
        "target": "arrow_target",
        "types": [
            "apotheosis:bow",
            "apotheosis:trident"
        ],
        "values": {
            "apotheosis:mythic": {
                "duration": {
                    "min": 100.0,
                    "max": 200.0,
                    "step": 20.0
                },
                "amplifier": 1.0,
                "cooldown": 40
            }
        }
    }
}