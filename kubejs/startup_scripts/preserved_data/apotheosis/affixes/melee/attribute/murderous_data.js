const melee_murderous_data = function murderous() {
        return {
            "init": {
                "type": "apotheosis:attribute",
                "attribute": "minecraft:generic.attack_damage",
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
                "operation": "add_multiplied_base",
                "values": {
                    "apotheosis:rare": {
                        "min": 0.15,
                        "max": 0.43
                    },
                    "apotheosis:epic": {
                        "min": 0.18,
                        "max": 0.48
                    },
                    "apotheosis:mythic": {
                        "min": 0.25,
                        "max": 0.55
                    }
                }
            },
            "equip_type": "melee",
            "affix_type": "attribute",
            "name": "murderous"
        }
    }
