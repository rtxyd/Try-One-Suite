let shield_devilish_data = function devilish() {
    return {
        "type": "apotheosis:mob_effect",
        "definition": {
            "affix_type": "basic_effect",
            "exclusive_set": [],
            "weights": {
                "weight": 25
            }
        },
        "mob_effect": "apothic_attributes:bleeding",
        "stack_on_reapply": true,
        "stacking_limit": 4,
        "target": "block_attacker",
        "types": [
            "apotheosis:shield"
        ],
        "values": {
            "apotheosis:uncommon": {
                "duration": 100.0,
                "amplifier": 0.0,
                "cooldown": 40
            },
            "apotheosis:rare": {
                "duration": {
                    "min": 100.0,
                    "max": 120.0,
                    "step": 20.0
                },
                "amplifier": 0.0,
                "cooldown": 40
            },
            "apotheosis:epic": {
                "duration": {
                    "min": 100.0,
                    "max": 140.0,
                    "step": 20.0
                },
                "amplifier": {
                    "min": 0.0,
                    "max": 1.0,
                    "step": 0.125
                },
                "cooldown": 40
            },
            "apotheosis:mythic": {
                "duration": {
                    "min": 100.0,
                    "max": 140.0,
                    "step": 20.0
                },
                "amplifier": {
                    "min": 0.0,
                    "max": 1.0,
                    "step": 0.25
                },
                "cooldown": 40
            }
        }
    }
}