const shears_gardening_data = function gardening() {
        return {
            "init": {
                "type": "apotheosis:stoneforming",
                "candidates": "#apotheosis:gardening_candidates",
                "categories": [
                    "apotheosis:shears"
                ],
                "definition": {
                    "affix_type": "basic_effect",
                    "exclusive_set": [
                        "apotheosis:shears/effect/leafforming"
                    ],
                    "weights": {
                        "quality": 0.1,
                        "weight": 25
                    }
                }
            },
            "equip_type": "shears",
            "affix_type": "effect",
            "name": "gardening"
        }
    }
