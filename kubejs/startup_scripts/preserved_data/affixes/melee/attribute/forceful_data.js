let melee_forceful_data = function forceful() {
    return {
        "type": "apotheosis:attribute",
        "attribute": "minecraft:generic.attack_knockback",
        "categories": [
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
            "apotheosis:common": {
                "min": 0.5,
                "max": 1.0,
                "step": 0.25
            },
            "apotheosis:uncommon": {
                "min": 0.5,
                "max": 1.5,
                "step": 0.25
            },
            "apotheosis:rare": {
                "min": 0.75,
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
                "max": 3.0,
                "step": 0.25
            }
        }
    }
}