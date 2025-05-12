let ranged_acidic_data = function acidic() {
    return {
        "type": "apotheosis:mob_effect",
        "definition": {
            "affix_type": "basic_effect",
            "exclusive_set": [],
            "weights": {
                "pinnacle": {
                    "quality": 5.0,
                    "weight": 20
                }
            }
        },
        "mob_effect": "apothic_attributes:sundering",
        "stack_on_reapply": true,
        "stacking_limit": 4,
        "target": "arrow_target",
        "types": [
            "apotheosis:bow"
        ],
        "values": {
            "apotheosis:mythic": {
                "duration": {
                    "min": 80.0,
                    "max": 160.0,
                    "step": 20.0
                },
                "amplifier": 0.0,
                "cooldown": 40
            }
        }
    }
}