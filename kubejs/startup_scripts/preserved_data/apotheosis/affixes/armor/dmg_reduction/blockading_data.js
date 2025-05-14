const armor_blockading_data = function blockading() {
        return {
            "init": {
                "type": "apotheosis:damage_reduction",
                "categories": [
                    "apotheosis:chestplate",
                    "apotheosis:leggings"
                ],
                "damage_type": "physical",
                "definition": {
                    "affix_type": "ability",
                    "exclusive_set": [],
                    "weights": {
                        "quality": 0.1,
                        "weight": 25
                    }
                },
                "values": {
                    "apotheosis:common": {
                        "min": 0.01,
                        "max": 0.05
                    },
                    "apotheosis:uncommon": {
                        "min": 0.01,
                        "max": 0.05
                    },
                    "apotheosis:rare": {
                        "min": 0.05,
                        "max": 0.1
                    },
                    "apotheosis:epic": {
                        "min": 0.05,
                        "max": 0.1
                    },
                    "apotheosis:mythic": {
                        "min": 0.05,
                        "max": 0.15
                    }
                }
            },
            "equip_type": "armor",
            "affix_type": "dmg_reduction",
            "name": "blockading"
        }
    }
