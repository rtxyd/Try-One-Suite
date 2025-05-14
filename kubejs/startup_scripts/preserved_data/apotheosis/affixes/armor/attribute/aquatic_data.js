const armor_aquatic_data = function aquatic() {
        return {
            "init": {
                "type": "apotheosis:attribute",
                "attribute": "neoforge:swim_speed",
                "categories": [
                    "apotheosis:boots"
                ],
                "definition": {
                    "affix_type": "stat",
                    "exclusive_set": [],
                    "weights": {
                        "quality": 0.1,
                        "weight": 25
                    }
                },
                "operation": "add_multiplied_total",
                "values": {
                    "apotheosis:common": {
                        "min": 0.2,
                        "max": 0.3
                    },
                    "apotheosis:uncommon": {
                        "min": 0.2,
                        "max": 0.3
                    },
                    "apotheosis:rare": {
                        "min": 0.3,
                        "max": 0.5
                    },
                    "apotheosis:epic": {
                        "min": 0.3,
                        "max": 0.5
                    },
                    "apotheosis:mythic": {
                        "min": 0.4,
                        "max": 0.7
                    }
                }
            },
            "equip_type": "armor",
            "affix_type": "attribute",
            "name": "aquatic"
        }
    }
