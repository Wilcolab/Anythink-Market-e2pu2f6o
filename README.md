# Anythink Market - Multi-Server Architecture

This project has been migrated from a Python-only server to a multi-server architecture using both Python and Node.js. The project now contains a FastAPI Python server (legacy) and an Express Node.js server (new) for managing a task list.

## Project Structure

The project has the following files and directories:

### Python Server (Legacy - Port 8000)
- `python-server/src/main.py`: FastAPI implementation with task management endpoints
- `python-server/src/__init__.py`: Python package marker
- `python-server/requirements.txt`: Python dependencies (fastapi, uvicorn)
- `python-server/Dockerfile`: Docker image configuration for Python server

### Node.js Server (New - Port 8001)
- `node-server/index.js`: Express.js implementation with migrated endpoints (GET /, POST /tasks, GET /tasks)
- `node-server/package.json`: Node.js dependencies and scripts (express, nodemon)
- `node-server/Dockerfile`: Docker image configuration for Node.js server

### Docker Orchestration
- `docker-compose.yml`: Multi-container orchestration file that runs both Python and Node.js servers

## Getting Started

To run both servers using Docker Compose:

```shell
docker compose up --build
```

This command will:
- Build Docker images for both the Python and Node.js servers
- Start both containers on their respective ports
- Mount volumes for hot-reloading during development

## API Routes

### Node.js Server (Port 8001) - **Primary**
- `GET /`: Returns "Hello World"
- `POST /tasks`: Adds a task to the task list. Request body: `{"text": "task description"}`
- `GET /tasks`: Retrieves all tasks in the list

### Python Server (Port 8000) - **Legacy**
- `GET /`: Returns "Hello World"
- `POST /tasks`: Adds a task to the task list. Request body: `{"text": "task description"}`
- `GET /tasks`: Retrieves all tasks in the list

## Testing Endpoints

### Node.js Server (Port 8001)
```bash
# Get root
curl http://localhost:8001/

# Get all tasks
curl http://localhost:8001/tasks

# Add a new task
curl -X POST http://localhost:8001/tasks \
  -H "Content-Type: application/json" \
  -d '{"text":"New task"}'
```

### Python Server (Port 8000)
```bash
# Get root
curl http://localhost:8000/

# Get all tasks
curl http://localhost:8000/tasks

# Add a new task
curl -X POST http://localhost:8000/tasks \
  -H "Content-Type: application/json" \
  -d '{"text":"New task"}'
```

## Development

Both servers support hot-reloading:
- **Python Server**: Uses uvicorn with `--reload` flag
- **Node.js Server**: Uses nodemon to watch for file changes

To develop locally, simply edit the files and the servers will automatically restart.
