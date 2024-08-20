"""
This module contains the Flask application factory.
"""

from flask import Flask
from . import views


def create_app():
    """
    Create a Flask application instance.
    """
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_pyfile("config.py")
    # Register the api blueprint that contains the views (route handlers).
    app.register_blueprint(views.api_bp)

    return app
