let melee_sophisticated_data = function sophisticated() {
    return {
        "type": "apotheosis:mob_effect",
        "definition": {
            "affix_type": "basic_effect",
            "exclusive_set": [],
            "weights": {
                "weight": 25
            }
        },
        "mob_effect": "apothic_attributes:knowledge",
        "stack_on_reapply": true,
        "stacking_limit": 3,
        "target": "attack_self",
        "types": [
            "apotheosis:melee_weapon",
            "apotheosis:trident"
        ],
        "values": {
            "apotheosis:uncommon": {
                "duration": {
                    "min": 400.0,
                    "max": 600.0,
                    "step": 20.0
                },
                "amplifier": 0.0,
                "cooldown": 400
            },
            "apotheosis:rare": {
                "duration": {
                    "min": 400.0,
                    "max": 800.0,
                    "step": 20.0
                },
                "amplifier": 0.0,
                "cooldown": 400
            },
            "apotheosis:epic": {
                "duration": {
                    "min": 400.0,
                    "max": 800.0,
                    "step": 20.0
                },
                "amplifier": {
                    "min": 0.0,
                    "max": 1.0,
                    "step": 0.25
                },
                "cooldown": 400
            },
            "apotheosis:mythic": {
                "duration": {
                    "min": 400.0,
                    "max": 1000.0,
                    "step": 20.0
                },
                "amplifier": {
                    "min": 0.0,
                    "max": 2.0,
                    "step": 0.25
                },
                "cooldown": 400
            }
        }
    }
}