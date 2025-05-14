const armor_blast_forged_data = function blast_forged() {
        return {
            "init": {
                "type": "apotheosis:damage_reduction",
                "categories": [
                    "apotheosis:chestplate",
                    "apotheosis:leggings"
                ],
                "damage_type": "explosion",
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
                        "max": 0.2
                    },
                    "apotheosis:epic": {
                        "min": 0.15,
                        "max": 0.25
                    },
                    "apotheosis:mythic": {
                        "min": 0.15,
                        "max": 0.35
                    }
                }
            },
            "equip_type": "armor",
            "affix_type": "dmg_reduction",
            "name": "blast_forged"
        }
    }
