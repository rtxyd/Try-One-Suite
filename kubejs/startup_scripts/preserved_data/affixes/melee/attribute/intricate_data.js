let melee_intricate_data = function intricate() {
    return {
        "type": "apotheosis:attribute",
        "attribute": "apothic_attributes:crit_chance",
        "categories": [
            "apotheosis:melee_weapon",
            "apotheosis:trident"
        ],
        "definition": {
            "affix_type": "stat",
            "exclusive_set": [],
            "weights": {
                "weight": 25
            }
        },
        "operation": "add_value",
        "values": {
            "apotheosis:common": {
                "min": 0.1,
                "max": 0.2
            },
            "apotheosis:uncommon": {
                "min": 0.1,
                "max": 0.2
            },
            "apotheosis:rare": {
                "min": 0.1,
                "max": 0.25
            },
            "apotheosis:epic": {
                "min": 0.15,
                "max": 0.35
            },
            "apotheosis:mythic": {
                "min": 0.25,
                "max": 0.55
            }
        }
    }
}