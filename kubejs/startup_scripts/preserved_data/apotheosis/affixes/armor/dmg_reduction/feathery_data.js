const armor_feathery_data = function feathery() {
        return {
            "init": {
                "type": "apotheosis:damage_reduction",
                "categories": [
                    "apotheosis:boots"
                ],
                "damage_type": "fall",
                "definition": {
                    "affix_type": "basic_effect",
                    "exclusive_set": [],
                    "weights": {
                        "quality": 0.1,
                        "weight": 25
                    }
                },
                "values": {
                    "apotheosis:common": {
                        "min": 0.05,
                        "max": 0.1
                    },
                    "apotheosis:uncommon": {
                        "min": 0.1,
                        "max": 0.15
                    },
                    "apotheosis:rare": {
                        "min": 0.15,
                        "max": 0.25
                    },
                    "apotheosis:epic": {
                        "min": 0.15,
                        "max": 0.25
                    },
                    "apotheosis:mythic": {
                        "min": 0.15,
                        "max": 0.4
                    }
                }
            },
            "equip_type": "armor",
            "affix_type": "dmg_reduction",
            "name": "feathery"
        }
    }
