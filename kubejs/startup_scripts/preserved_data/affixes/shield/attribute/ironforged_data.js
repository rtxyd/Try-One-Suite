let shield_ironforged_data = function ironforged() {
    return {
        "type": "apotheosis:attribute",
        "attribute": "minecraft:generic.armor",
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
            "apotheosis:common": {
                "min": 0.1,
                "max": 0.15
            },
            "apotheosis:uncommon": {
                "min": 0.1,
                "max": 0.15
            },
            "apotheosis:rare": {
                "min": 0.15,
                "max": 0.2
            },
            "apotheosis:epic": {
                "min": 0.15,
                "max": 0.25
            },
            "apotheosis:mythic": {
                "min": 0.2,
                "max": 0.3
            }
        }
    }
}