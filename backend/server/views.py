"""
This module contains the views (route handlers).
The routes are associated with the api blueprint.
"""
from flask import Blueprint

api_bp = Blueprint("api", __name__, url_prefix="/api")

@api_bp.route("/solve")
def index():
    return "Hello, index!"
