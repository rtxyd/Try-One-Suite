const melee_giant_slaying_data = function giant_slaying() {
        return {
            "init": {
                "type": "apotheosis:attribute",
                "attribute": "apothic_attributes:current_hp_damage",
                "categories": [
                    "apotheosis:melee_weapon"
                ],
                "definition": {
                    "affix_type": "stat",
                    "exclusive_set": [],
                    "weights": {
                        "pinnacle": {
                            "quality": 0.75,
                            "weight": 15
                        }
                    }
                },
                "operation": "add_value",
                "values": {
                    "apotheosis:epic": {
                        "min": 0.1,
                        "max": 0.2
                    },
                    "apotheosis:mythic": {
                        "min": 0.1,
                        "max": 0.25
                    }
                }
            },
            "equip_type": "melee",
            "affix_type": "attribute",
            "name": "giant_slaying"
        }
    }
