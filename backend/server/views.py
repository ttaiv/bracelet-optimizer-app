"""
This module contains the views (route handlers).
The routes are associated with the main blueprint.
"""
from flask import Blueprint

bp = Blueprint("main", __name__)

@bp.route("/")
def index():
    return "Hello, index!"
