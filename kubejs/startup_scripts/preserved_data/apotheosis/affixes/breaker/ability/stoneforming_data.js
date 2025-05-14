const breaker_stoneforming_data = function stoneforming() {
        return {
            "init": {
                "type": "apotheosis:stoneforming",
                "candidates": "#apotheosis:stoneforming_candidates",
                "categories": [
                    "apotheosis:breaker"
                ],
                "definition": {
                    "affix_type": "ability",
                    "exclusive_set": [
                        "apotheosis:breaker/ability/sandforming"
                    ],
                    "weights": {
                        "quality": 0.1,
                        "weight": 25
                    }
                }
            },
            "equip_type": "breaker",
            "affix_type": "ability",
            "name": "stoneforming"
        }
    }
