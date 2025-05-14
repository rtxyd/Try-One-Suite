const breaker_enlightened_data = function enlightened() {
        return {
            "init": {
                "type": "apotheosis:enlightened",
                "definition": {
                    "affix_type": "ability",
                    "exclusive_set": [],
                    "weights": {
                        "quality": 0.1,
                        "weight": 25
                    }
                },
                "values": {
                    "apotheosis:rare": {
                        "min": 12.0,
                        "max": 8.0,
                        "step": -1.0
                    },
                    "apotheosis:epic": {
                        "min": 10.0,
                        "max": 5.0,
                        "step": -1.0
                    },
                    "apotheosis:mythic": {
                        "min": 5.0,
                        "max": 0.0,
                        "step": -1.0
                    }
                }
            },
            "equip_type": "breaker",
            "affix_type": "ability",
            "name": "enlightened"
        }
    }
