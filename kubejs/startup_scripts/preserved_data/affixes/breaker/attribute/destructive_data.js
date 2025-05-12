let breaker_destructive_data = function destructive() {
    return {
        "type": "apotheosis:attribute",
        "attribute": "apothic_attributes:mining_speed",
        "categories": [
            "apotheosis:breaker"
        ],
        "definition": {
            "affix_type": "stat",
            "exclusive_set": [],
            "weights": {
                "weight": 25
            }
        },
        "operation": "add_multiplied_total",
        "values": {
            "apotheosis:common": {
                "min": 0.15,
                "max": 0.3
            },
            "apotheosis:uncommon": {
                "min": 0.15,
                "max": 0.3
            },
            "apotheosis:rare": {
                "min": 0.25,
                "max": 0.5
            },
            "apotheosis:epic": {
                "min": 0.25,
                "max": 0.7
            },
            "apotheosis:mythic": {
                "min": 0.55,
                "max": 0.85
            }
        }
    }
}