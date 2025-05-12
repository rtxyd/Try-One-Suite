let armor_unbound_data = function unbound() {
    return {
        "type": "apotheosis:attribute",
        "attribute": "neoforge:creative_flight",
        "categories": [
            "apotheosis:chestplate"
        ],
        "definition": {
            "affix_type": "stat",
            "exclusive_set": [
                "apotheosis:armor/attribute/winged"
            ],
            "weights": {
                "pinnacle": {
                    "quality": 5.0,
                    "weight": 20
                }
            }
        },
        "operation": "add_value",
        "values": {
            "apotheosis:mythic": 1.0
        }
    }
}