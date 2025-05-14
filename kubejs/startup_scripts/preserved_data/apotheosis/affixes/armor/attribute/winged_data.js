const armor_winged_data = function winged() {
        return {
            "init": {
                "type": "apotheosis:attribute",
                "attribute": "apothic_attributes:elytra_flight",
                "categories": [
                    "apotheosis:chestplate"
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
                    "apotheosis:epic": 1.0,
                    "apotheosis:mythic": 1.0
                }
            },
            "equip_type": "armor",
            "affix_type": "attribute",
            "name": "winged"
        }
    }
