const ranged_windswept_data = function windswept() {
        return {
            "init": {
                "type": "apotheosis:attribute",
                "attribute": "minecraft:generic.movement_speed",
                "categories": [
                    "apotheosis:bow",
                    "apotheosis:trident"
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
                        "min": 0.15,
                        "max": 0.25
                    },
                    "apotheosis:uncommon": {
                        "min": 0.15,
                        "max": 0.3
                    },
                    "apotheosis:rare": {
                        "min": 0.15,
                        "max": 0.3
                    },
                    "apotheosis:epic": {
                        "min": 0.15,
                        "max": 0.35
                    },
                    "apotheosis:mythic": {
                        "min": 0.2,
                        "max": 0.4
                    }
                }
            },
            "equip_type": "ranged",
            "affix_type": "attribute",
            "name": "windswept"
        }
    }
