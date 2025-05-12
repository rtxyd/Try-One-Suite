let melee_festive_data = function festive() {
    return {
        "type": "apotheosis:festive",
        "definition": {
            "affix_type": "basic_effect",
            "exclusive_set": [],
            "weights": {
                "weight": 25
            }
        },
        "values": {
            "apotheosis:epic": {
                "min": 0.02,
                "max": 0.05,
                "step": 0.005
            },
            "apotheosis:mythic": {
                "min": 0.03,
                "max": 0.06,
                "step": 0.005
            }
        }
    }
}