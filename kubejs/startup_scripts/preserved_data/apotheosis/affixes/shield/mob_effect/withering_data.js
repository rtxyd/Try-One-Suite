const shield_withering_data = function withering() {
        return {
            "init": {
                "type": "apotheosis:mob_effect",
                "definition": {
                    "affix_type": "basic_effect",
                    "exclusive_set": [],
                    "weights": {
                        "quality": 0.1,
                        "weight": 25
                    }
                },
                "mob_effect": "minecraft:wither",
                "target": "block_attacker",
                "types": [
                    "apotheosis:shield"
                ],
                "values": {
                    "apotheosis:epic": {
                        "duration": {
                            "min": 40.0,
                            "max": 100.0,
                            "step": 20.0
                        },
                        "amplifier": {
                            "min": 0.0,
                            "max": 1.0,
                            "step": 0.5
                        }
                    },
                    "apotheosis:mythic": {
                        "duration": {
                            "min": 60.0,
                            "max": 160.0,
                            "step": 20.0
                        },
                        "amplifier": {
                            "min": 0.0,
                            "max": 2.0,
                            "step": 0.25
                        }
                    }
                }
            },
            "equip_type": "shield",
            "affix_type": "mob_effect",
            "name": "withering"
        }
    }
