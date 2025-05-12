let armor_winged_data = function winged() {
    return {
        "type": "apotheosis:attribute",
        "attribute": "apothic_attributes:elytra_flight",
        "categories": [
            "apotheosis:chestplate"
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
            "apotheosis:epic": 1.0,
            "apotheosis:mythic": 1.0
        }
    }
}