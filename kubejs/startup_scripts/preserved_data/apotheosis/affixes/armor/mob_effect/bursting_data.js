const armor_bursting_data = function bursting() {
        return {
            "init": {
                "type": "apotheosis:mob_effect",
                "definition": {
                    "affix_type": "basic_effect",
                    "exclusive_set": [
                        "apotheosis:armor/mob_effect/revitalizing"
                    ],
                    "weights": {
                        "quality": 0.1,
                        "weight": 25
                    }
                },
                "mob_effect": "apothic_attributes:vitality",
                "target": "hurt_self",
                "types": [
                    "apotheosis:chestplate",
                    "apotheosis:leggings"
                ],
                "values": {
                    "apotheosis:epic": {
                        "duration": 200.0,
                        "amplifier": 0.0,
                        "cooldown": 300
                    },
                    "apotheosis:mythic": {
                        "duration": 200.0,
                        "amplifier": {
                            "min": 0.0,
                            "max": 1.0,
                            "step": 0.25
                        },
                        "cooldown": 300
                    }
                }
            },
            "equip_type": "armor",
            "affix_type": "mob_effect",
            "name": "bursting"
        }
    }
