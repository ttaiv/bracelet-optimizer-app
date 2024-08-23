# Friendship Bracelet Optimizer

This will be a fullstack app that allows users to optimize building [friendship bracelets](https://www.theguardian.com/music/2024/feb/07/taylor-swift-eras-tour-australia-friendship-bracelets-inspiration-beads-explained). The integer linear programming solution from repository [taylor-bracelet-optimizer](https://github.com/ttaiv/taylor-bracelet-optimizer) is used as a backend service.

## Development setup

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Docker](https://docs.docker.com/get-docker/) (engine and compose)

### Running the backend

1. Clone the repository and navigate to the root directory.
2. Run

    ```bash
    docker-compose up server-dev
    ```

    for development backend server or

    ```bash
    docker-compose up server-prod
    ```

    for production backend server.

3. The backend server will be available at [http://localhost:5000](http://localhost:5000).

### Running the frontend

- See the [frontend README](./frontend/README.md) for instructions.
