const melee_thunderstruck_data = function thunderstruck() {
        return {
            "init": {
                "type": "apotheosis:thunderstruck",
                "categories": [
                    "apotheosis:melee_weapon",
                    "apotheosis:trident"
                ],
                "definition": {
                    "affix_type": "ability",
                    "exclusive_set": [],
                    "weights": {
                        "quality": 0.1,
                        "weight": 25
                    }
                },
                "values": {
                    "apotheosis:epic": {
                        "min": 3.0,
                        "max": 6.0,
                        "step": 1.0
                    },
                    "apotheosis:mythic": {
                        "min": 4.0,
                        "max": 8.0,
                        "step": 1.0
                    }
                }
            },
            "equip_type": "melee",
            "affix_type": "ability",
            "name": "thunderstruck"
        }
    }
