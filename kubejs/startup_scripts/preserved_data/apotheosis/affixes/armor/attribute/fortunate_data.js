const armor_fortunate_data = function fortunate() {
        return {
            "init": {
                "type": "apotheosis:attribute",
                "attribute": "minecraft:generic.luck",
                "categories": [
                    "apotheosis:helmet",
                    "apotheosis:chestplate",
                    "apotheosis:leggings",
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
                "operation": "add_value",
                "values": {
                    "apotheosis:common": {
                        "min": 0.5,
                        "max": 1.5,
                        "step": 0.25
                    },
                    "apotheosis:uncommon": {
                        "min": 0.5,
                        "max": 1.5,
                        "step": 0.25
                    },
                    "apotheosis:rare": {
                        "min": 1.5,
                        "max": 3.0,
                        "step": 0.25
                    },
                    "apotheosis:epic": {
                        "min": 1.5,
                        "max": 3.5,
                        "step": 0.25
                    },
                    "apotheosis:mythic": {
                        "min": 3.0,
                        "max": 5.0,
                        "step": 0.25
                    }
                }
            },
            "equip_type": "armor",
            "affix_type": "attribute",
            "name": "fortunate"
        }
    }
