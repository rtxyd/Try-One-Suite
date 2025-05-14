const armor_blinding_data = function blinding() {
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
                "mob_effect": "minecraft:blindness",
                "target": "hurt_attacker",
                "types": [
                    "apotheosis:helmet"
                ],
                "values": {
                    "apotheosis:uncommon": {
                        "duration": {
                            "min": 40.0,
                            "max": 80.0,
                            "step": 20.0
                        },
                        "amplifier": 0.0,
                        "cooldown": 300
                    },
                    "apotheosis:rare": {
                        "duration": {
                            "min": 40.0,
                            "max": 80.0,
                            "step": 20.0
                        },
                        "amplifier": 0.0,
                        "cooldown": 240
                    },
                    "apotheosis:epic": {
                        "duration": {
                            "min": 40.0,
                            "max": 80.0,
                            "step": 20.0
                        },
                        "amplifier": 0.0,
                        "cooldown": 240
                    },
                    "apotheosis:mythic": {
                        "duration": {
                            "min": 60.0,
                            "max": 100.0,
                            "step": 20.0
                        },
                        "amplifier": 0.0,
                        "cooldown": 200
                    }
                }
            },
            "equip_type": "armor",
            "affix_type": "mob_effect",
            "name": "blinding"
        }
    }
