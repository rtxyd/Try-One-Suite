const melee_bloodletting_data = function bloodletting() {
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
                "mob_effect": "apothic_attributes:bleeding",
                "stack_on_reapply": true,
                "stacking_limit": 3,
                "target": "attack_target",
                "types": [
                    "apotheosis:melee_weapon",
                    "apotheosis:trident"
                ],
                "values": {
                    "apotheosis:uncommon": {
                        "duration": 100.0,
                        "amplifier": 0.0,
                        "cooldown": 80
                    },
                    "apotheosis:rare": {
                        "duration": {
                            "min": 100.0,
                            "max": 120.0,
                            "step": 20.0
                        },
                        "amplifier": 0.0,
                        "cooldown": 80
                    },
                    "apotheosis:epic": {
                        "duration": {
                            "min": 100.0,
                            "max": 120.0,
                            "step": 20.0
                        },
                        "amplifier": 0.0,
                        "cooldown": 80
                    },
                    "apotheosis:mythic": {
                        "duration": {
                            "min": 100.0,
                            "max": 120.0,
                            "step": 20.0
                        },
                        "amplifier": {
                            "min": 0.0,
                            "max": 1.0,
                            "step": 0.125
                        },
                        "cooldown": 80
                    }
                }
            },
            "equip_type": "melee",
            "affix_type": "mob_effect",
            "name": "bloodletting"
        }
    }
