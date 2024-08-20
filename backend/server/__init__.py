"""
This module contains the Flask application factory.
"""
from flask import Flask
from . import views

def create_app():
    """
    Create a Flask application instance.
    """
    app = Flask(__name__)
    # Register the api blueprint that contains the views (route handlers).
    app.register_blueprint(views.api_bp)

    return app
