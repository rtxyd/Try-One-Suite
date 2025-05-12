let armor_runed_data = function runed() {
    return {
        "type": "apotheosis:damage_reduction",
        "categories": [
            "apotheosis:helmet",
            "apotheosis:chestplate",
            "apotheosis:leggings",
            "apotheosis:boots"
        ],
        "damage_type": "magic",
        "definition": {
            "affix_type": "ability",
            "exclusive_set": [
                "apotheosis:armor/dmg_reduction/blockading"
            ],
            "weights": {
                "weight": 25
            }
        },
        "values": {
            "apotheosis:common": {
                "min": 0.01,
                "max": 0.05
            },
            "apotheosis:uncommon": {
                "min": 0.01,
                "max": 0.05
            },
            "apotheosis:rare": {
                "min": 0.05,
                "max": 0.1
            },
            "apotheosis:epic": {
                "min": 0.05,
                "max": 0.1
            },
            "apotheosis:mythic": {
                "min": 0.05,
                "max": 0.15
            }
        }
    }
}