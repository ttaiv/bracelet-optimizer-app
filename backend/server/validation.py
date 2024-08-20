from jsonschema import validate

solve_schema = {
    "type": "object",
    "properties": {
        "letter_counts": {
            "type": "object",
            "additionalProperties": {"type": "integer"},
            "propertyNames": {"type": "string"},
        },
        "texts": {"type": "array", "items": {"type": "string"}},
    },
    "required": ["letter_counts"],
}


def validate_solve(data):
    validate(data, solve_schema)
