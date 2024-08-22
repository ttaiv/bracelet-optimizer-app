"""
This module contains the validation schema for the solve endpoint.
"""

from marshmallow import Schema, fields, validate


class SolveSchema(Schema):
    """
    Schema for the request data of the solve endpoint.
    """

    letter_counts = fields.Dict(
        keys=fields.Str(validate=validate.Regexp(r"^[a-zA-Z]$")),
        values=fields.Int(validate=validate.Range(min=0)),
        required=True,
    )
    texts = fields.List(fields.Str(), required=False)
