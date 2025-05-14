const melee_piercing_data = function piercing() {
        return {
            "init": {
                "type": "apotheosis:attribute",
                "attribute": "apothic_attributes:armor_pierce",
                "categories": [
                    "apotheosis:melee_weapon",
                    "apotheosis:trident",
                    "apotheosis:bow"
                ],
                "definition": {
                    "affix_type": "stat",
                    "exclusive_set": [],
                    "weights": {
                        "quality": 0.1,
                        "weight": 25
                    }
                },
                "operation": "add_value",
                "values": {
                    "apotheosis:common": {
                        "min": 2.0,
                        "max": 4.0,
                        "step": 0.25
                    },
                    "apotheosis:uncommon": {
                        "min": 2.0,
                        "max": 4.0,
                        "step": 0.25
                    },
                    "apotheosis:rare": {
                        "min": 4.0,
                        "max": 8.0,
                        "step": 0.25
                    },
                    "apotheosis:epic": {
                        "min": 5.0,
                        "max": 10.0,
                        "step": 0.25
                    },
                    "apotheosis:mythic": {
                        "min": 5.0,
                        "max": 12.0,
                        "step": 0.25
                    }
                }
            },
            "equip_type": "melee",
            "affix_type": "attribute",
            "name": "piercing"
        }
    }
