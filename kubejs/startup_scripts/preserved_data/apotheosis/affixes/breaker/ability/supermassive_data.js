const breaker_supermassive_data = function supermassive() {
        return {
            "init": {
                "type": "apotheosis:radial",
                "categories": [
                    "apotheosis:breaker"
                ],
                "definition": {
                    "affix_type": "ability",
                    "exclusive_set": [
                        "apotheosis:breaker/effect/radial"
                    ],
                    "weights": {
                        "pinnacle": {
                            "quality": 0.75,
                            "weight": 20
                        }
                    }
                },
                "values": {
                    "apotheosis:mythic": [
                        {
                            "x": 7,
                            "xOff": 0,
                            "y": 7,
                            "yOff": 0
                        }
                    ]
                }
            },
            "equip_type": "breaker",
            "affix_type": "ability",
            "name": "supermassive"
        }
    }
