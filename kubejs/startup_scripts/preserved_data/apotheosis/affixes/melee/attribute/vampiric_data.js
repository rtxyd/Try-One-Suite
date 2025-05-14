const melee_vampiric_data = function vampiric() {
        return {
            "init": {
                "type": "apotheosis:attribute",
                "attribute": "apothic_attributes:life_steal",
                "categories": [
                    "apotheosis:melee_weapon",
                    "apotheosis:trident"
                ],
                "definition": {
                    "affix_type": "stat",
                    "exclusive_set": [
                        "apotheosis:melee/attribute/berserking"
                    ],
                    "weights": {
                        "quality": 0.1,
                        "weight": 25
                    }
                },
                "operation": "add_value",
                "values": {
                    "apotheosis:common": {
                        "min": 0.05,
                        "max": 0.08
                    },
                    "apotheosis:uncommon": {
                        "min": 0.05,
                        "max": 0.08
                    },
                    "apotheosis:rare": {
                        "min": 0.05,
                        "max": 0.1
                    },
                    "apotheosis:epic": {
                        "min": 0.08,
                        "max": 0.13
                    },
                    "apotheosis:mythic": {
                        "min": 0.1,
                        "max": 0.15
                    }
                }
            },
            "equip_type": "melee",
            "affix_type": "attribute",
            "name": "vampiric"
        }
    }
