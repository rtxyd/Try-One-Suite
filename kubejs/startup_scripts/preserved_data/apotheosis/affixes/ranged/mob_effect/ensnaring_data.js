const ranged_ensnaring_data = function ensnaring() {
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
                "mob_effect": "minecraft:slowness",
                "target": "arrow_target",
                "types": [
                    "apotheosis:bow",
                    "apotheosis:trident"
                ],
                "values": {
                    "apotheosis:uncommon": {
                        "duration": {
                            "min": 40.0,
                            "max": 80.0,
                            "step": 20.0
                        },
                        "amplifier": 0.0,
                        "cooldown": 160
                    },
                    "apotheosis:rare": {
                        "duration": {
                            "min": 40.0,
                            "max": 100.0,
                            "step": 20.0
                        },
                        "amplifier": 0.0,
                        "cooldown": 160
                    },
                    "apotheosis:epic": {
                        "duration": {
                            "min": 40.0,
                            "max": 120.0,
                            "step": 20.0
                        },
                        "amplifier": {
                            "min": 0.0,
                            "max": 1.0,
                            "step": 0.25
                        },
                        "cooldown": 160
                    },
                    "apotheosis:mythic": {
                        "duration": {
                            "min": 80.0,
                            "max": 160.0,
                            "step": 20.0
                        },
                        "amplifier": {
                            "min": 0.0,
                            "max": 2.0,
                            "step": 0.25
                        },
                        "cooldown": 160
                    }
                }
            },
            "equip_type": "ranged",
            "affix_type": "mob_effect",
            "name": "ensnaring"
        }
    }
