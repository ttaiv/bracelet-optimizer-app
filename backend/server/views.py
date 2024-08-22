"""
This module contains the views (route handlers).
The routes are associated with the api blueprint.
"""

from flask import Blueprint, request, jsonify, current_app
from .bracelet_texts_optimizer import find_best_texts_ilp
from .validation import validate_solve
from .utils import preprocess_texts

api_bp = Blueprint("api", __name__, url_prefix="/api")


@api_bp.route("/solve", methods=["POST"])
def solve_best_texts():
    """
    Solve the bracelet texts problem for the the letter counts and texts provided in the request.
    If no texts are provided, the default texts are used.

    Returns:
        Response: JSON response containing the minimized letter count and the best texts.
    """
    data: dict = request.get_json()
    validate_solve(data)  # Will raise an error if the data is invalid

    letter_counts: dict[str, int] = data["letter_counts"]
    texts: list[str] = data.get("texts", current_app.config["DEFAULT_TEXTS"])
    preprocessed_texts = preprocess_texts(texts)

    # Solve the problem
    minimized_letter_count, best_texts = find_best_texts_ilp(
        letter_counts, preprocessed_texts, print_output=False
    )

    return jsonify(
        {"minimized_letter_count": minimized_letter_count, "best_texts": best_texts}
    )


@api_bp.route("/texts", methods=["GET"])
def get_default_texts():
    """
    Get the default texts.

    Returns:
        Response: JSON response containing the default texts.
    """
    return jsonify(current_app.config["DEFAULT_TEXTS"])
