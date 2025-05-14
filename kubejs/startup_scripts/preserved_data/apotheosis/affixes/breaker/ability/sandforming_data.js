const breaker_sandforming_data = function sandforming() {
        return {
            "init": {
                "type": "apotheosis:stoneforming",
                "candidates": "#apotheosis:sandforming_candidates",
                "categories": [
                    "apotheosis:breaker"
                ],
                "definition": {
                    "affix_type": "ability",
                    "exclusive_set": [
                        "apotheosis:breaker/ability/stoneforming"
                    ],
                    "weights": {
                        "quality": 0.1,
                        "weight": 25
                    }
                }
            },
            "equip_type": "breaker",
            "affix_type": "ability",
            "name": "sandforming"
        }
    }
