from flask import Flask

def create_app(config_filename=None):
    app = Flask(__name__)

    # Load configuration settings
    if config_filename:
        app.config.from_pyfile(config_filename)
    else:
        app.config.from_object('config.Config')  # Load default config

    # Initialize extensions here, if any

    # Register Blueprints (routes) here

    # Other app setup tasks
    # e.g., app.before_first_request(some_function)

    return app
