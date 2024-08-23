# Multi stage build that first creates a base image and then uses
# that image to create either a development or production image.
FROM python:3.10-slim AS base

WORKDIR /server

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000

# Development image
FROM base AS dev
CMD ["flask", "--app", "bracelet-opt-server", "run", "--host=0.0.0.0", "--debug"]

# Production image
FROM base AS prod
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "--log-level", "debug", "bracelet-opt-server:create_app()"]
