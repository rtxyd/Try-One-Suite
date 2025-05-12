let breaker_lengthy_data = function lengthy() {
    return {
        "type": "apotheosis:attribute",
        "attribute": "minecraft:player.block_interaction_range",
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
        "operation": "add_value",
        "values": {
            "apotheosis:common": {
                "min": 0.5,
                "max": 1.5,
                "step": 0.25
            },
            "apotheosis:uncommon": {
                "min": 0.5,
                "max": 1.5,
                "step": 0.25
            },
            "apotheosis:rare": {
                "min": 1.0,
                "max": 2.5,
                "step": 0.25
            },
            "apotheosis:epic": {
                "min": 1.0,
                "max": 2.5,
                "step": 0.25
            },
            "apotheosis:mythic": {
                "min": 1.5,
                "max": 4.0,
                "step": 0.25
            }
        }
    }
}