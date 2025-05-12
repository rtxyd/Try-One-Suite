let melee_omniscient_data = function omniscient() {
    return {
        "type": "apotheosis:mob_effect",
        "definition": {
            "affix_type": "basic_effect",
            "exclusive_set": [
                "apotheosis:melee/mob_effect/sophisticated"
            ],
            "weights": {
                "pinnacle": {
                    "quality": 5.0,
                    "weight": 20
                }
            }
        },
        "mob_effect": "apothic_attributes:knowledge",
        "stack_on_reapply": true,
        "stacking_limit": 8,
        "target": "attack_self",
        "types": [
            "apotheosis:melee_weapon",
            "apotheosis:trident"
        ],
        "values": {
            "apotheosis:mythic": {
                "duration": {
                    "min": 100.0,
                    "max": 160.0,
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
    }
}