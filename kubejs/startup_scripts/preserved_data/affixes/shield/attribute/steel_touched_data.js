let shield_steel_touched_data = function steel_touched() {
    return {
        "type": "apotheosis:attribute",
        "attribute": "minecraft:generic.armor_toughness",
        "categories": [
            "apotheosis:shield"
        ],
        "definition": {
            "affix_type": "stat",
            "exclusive_set": [],
            "weights": {
                "weight": 25
            }
        },
        "operation": "add_multiplied_base",
        "values": {
            "apotheosis:rare": {
                "min": 0.15,
                "max": 0.2
            },
            "apotheosis:epic": {
                "min": 0.15,
                "max": 0.2
            },
            "apotheosis:mythic": {
                "min": 0.2,
                "max": 0.3
            }
        }
    }
}