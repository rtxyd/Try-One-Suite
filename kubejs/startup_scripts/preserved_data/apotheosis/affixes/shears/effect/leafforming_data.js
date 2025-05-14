const shears_leafforming_data = function leafforming() {
        return {
            "init": {
                "type": "apotheosis:stoneforming",
                "candidates": "#apotheosis:leafforming_candidates",
                "categories": [
                    "apotheosis:shears"
                ],
                "definition": {
                    "affix_type": "basic_effect",
                    "exclusive_set": [
                        "apotheosis:shears/effect/gardening"
                    ],
                    "weights": {
                        "quality": 0.1,
                        "weight": 25
                    }
                }
            },
            "equip_type": "shears",
            "affix_type": "effect",
            "name": "leafforming"
        }
    }
