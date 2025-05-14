const melee_graceful_data = function graceful() {
        return {
            "init": {
                "type": "apotheosis:attribute",
                "attribute": "minecraft:generic.attack_speed",
                "categories": [
                    "apotheosis:melee_weapon",
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
                        "min": 0.2,
                        "max": 0.3
                    },
                    "apotheosis:rare": {
                        "min": 0.2,
                        "max": 0.35
                    },
                    "apotheosis:epic": {
                        "min": 0.25,
                        "max": 0.5
                    },
                    "apotheosis:mythic": {
                        "min": 0.4,
                        "max": 0.85
                    }
                }
            },
            "equip_type": "melee",
            "affix_type": "attribute",
            "name": "graceful"
        }
    }
