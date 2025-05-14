const melee_glacial_data = function glacial() {
        return {
            "init": {
                "type": "apotheosis:attribute",
                "attribute": "apothic_attributes:cold_damage",
                "categories": [
                    "apotheosis:melee_weapon",
                    "apotheosis:trident"
                ],
                "definition": {
                    "affix_type": "stat",
                    "exclusive_set": [
                        "apotheosis:melee/attribute/infernal"
                    ],
                    "weights": {
                        "quality": 0.1,
                        "weight": 25
                    }
                },
                "operation": "add_value",
                "values": {
                    "apotheosis:uncommon": {
                        "min": 2.0,
                        "max": 4.0,
                        "step": 0.25
                    },
                    "apotheosis:rare": {
                        "min": 2.0,
                        "max": 5.0,
                        "step": 0.25
                    },
                    "apotheosis:epic": {
                        "min": 4.0,
                        "max": 6.0,
                        "step": 0.25
                    },
                    "apotheosis:mythic": {
                        "min": 4.0,
                        "max": 10.0,
                        "step": 0.25
                    }
                }
            },
            "equip_type": "melee",
            "affix_type": "attribute",
            "name": "glacial"
        }
    }
