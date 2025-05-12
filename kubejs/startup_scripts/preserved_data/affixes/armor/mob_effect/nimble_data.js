let armor_nimble_data = function nimble() {
    return {
        "type": "apotheosis:mob_effect",
        "definition": {
            "affix_type": "basic_effect",
            "exclusive_set": [],
            "weights": {
                "weight": 25
            }
        },
        "mob_effect": "minecraft:speed",
        "target": "hurt_self",
        "types": [
            "apotheosis:leggings",
            "apotheosis:boots"
        ],
        "values": {
            "apotheosis:uncommon": {
                "duration": {
                    "min": 100.0,
                    "max": 300.0,
                    "step": 20.0
                },
                "amplifier": 0.0,
                "cooldown": 800
            },
            "apotheosis:rare": {
                "duration": {
                    "min": 200.0,
                    "max": 400.0,
                    "step": 20.0
                },
                "amplifier": 0.0,
                "cooldown": 800
            },
            "apotheosis:epic": {
                "duration": {
                    "min": 200.0,
                    "max": 400.0,
                    "step": 20.0
                },
                "amplifier": {
                    "min": 0.0,
                    "max": 2.0,
                    "step": 0.25
                },
                "cooldown": 700
            },
            "apotheosis:mythic": {
                "duration": {
                    "min": 200.0,
                    "max": 400.0,
                    "step": 20.0
                },
                "amplifier": {
                    "min": 0.0,
                    "max": 2.0,
                    "step": 0.5
                },
                "cooldown": 600
            }
        }
    }
}