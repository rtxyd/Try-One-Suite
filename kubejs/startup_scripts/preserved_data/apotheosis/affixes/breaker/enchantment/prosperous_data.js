const breaker_prosperous_data = function prosperous() {
        return {
            "init": {
                "type": "apotheosis:enchantment",
                "categories": [
                    "apotheosis:breaker"
                ],
                "definition": {
                    "affix_type": "basic_effect",
                    "exclusive_set": [],
                    "weights": {
                        "quality": 0.1,
                        "weight": 25
                    }
                },
                "enchantment": "minecraft:fortune",
                "mode": "existing",
                "values": {
                    "apotheosis:uncommon": 1.0,
                    "apotheosis:rare": {
                        "min": 1.0,
                        "max": 2.0,
                        "step": 0.5
                    },
                    "apotheosis:epic": {
                        "min": 1.0,
                        "max": 3.0,
                        "step": 0.5
                    },
                    "apotheosis:mythic": {
                        "min": 2.0,
                        "max": 4.0,
                        "step": 0.5
                    }
                }
            },
            "equip_type": "breaker",
            "affix_type": "enchantment",
            "name": "prosperous"
        }
    }
