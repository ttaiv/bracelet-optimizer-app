"""
This module contains the Flask application factory.
"""

from pathlib import Path
from flask import Flask
from flask_cors import CORS
from . import views


def create_app():
    """
    Create a Flask application instance.
    """
    app = Flask(__name__)
    # Load config from backend/config.py
    config_file = Path(__file__).parent.parent / "config.py"
    app.config.from_pyfile(config_file)

    # Enable CORS
    CORS(app, origins=app.config["CORS_ORIGINS"])

    # Register the api blueprint that contains the views (route handlers).
    app.register_blueprint(views.api_bp)

    return app
