let generic_lucky_data = function lucky() {
    return {
        "type": "apotheosis:attribute",
        "attribute": "minecraft:generic.luck",
        "categories": [
            "apotheosis:bow",
            "apotheosis:breaker",
            "apotheosis:helmet",
            "apotheosis:chestplate",
            "apotheosis:leggings",
            "apotheosis:boots",
            "apotheosis:shield",
            "apotheosis:trident",
            "apotheosis:melee_weapon"
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
            "apotheosis:uncommon": {
                "min": 1.0,
                "max": 1.5,
                "step": 0.25
            },
            "apotheosis:rare": {
                "min": 2.0,
                "max": 3.0,
                "step": 0.25
            },
            "apotheosis:epic": {
                "min": 2.5,
                "max": 4.0,
                "step": 0.25
            },
            "apotheosis:mythic": {
                "min": 3.0,
                "max": 6.0,
                "step": 0.25
            }
        }
    }
}