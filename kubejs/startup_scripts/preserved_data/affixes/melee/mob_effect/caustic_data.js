let melee_caustic_data = function caustic() {
    return {
        "type": "apotheosis:mob_effect",
        "definition": {
            "affix_type": "basic_effect",
            "exclusive_set": [],
            "weights": {
                "weight": 25
            }
        },
        "mob_effect": "apothic_attributes:sundering",
        "stack_on_reapply": true,
        "stacking_limit": 3,
        "target": "attack_target",
        "types": [
            "apotheosis:melee_weapon",
            "apotheosis:trident"
        ],
        "values": {
            "apotheosis:rare": {
                "duration": {
                    "min": 100.0,
                    "max": 180.0,
                    "step": 20.0
                },
                "amplifier": 0.0,
                "cooldown": 60
            },
            "apotheosis:epic": {
                "duration": {
                    "min": 100.0,
                    "max": 200.0,
                    "step": 20.0
                },
                "amplifier": {
                    "min": 0.0,
                    "max": 1.0,
                    "step": 0.125
                },
                "cooldown": 60
            },
            "apotheosis:mythic": {
                "duration": {
                    "min": 200.0,
                    "max": 400.0,
                    "step": 20.0
                },
                "amplifier": {
                    "min": 0.0,
                    "max": 1.0,
                    "step": 0.25
                },
                "cooldown": 60
            }
        }
    }
}