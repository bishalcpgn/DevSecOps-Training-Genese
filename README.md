# Genese Solution Website Clone

**This website serves as a demo project for a DevSecOps training program.**

## Project Structure

```
genese-solution-clone/
├── public/             # Public assets
├── src/                # Source code
│   ├── assets/         # Static assets like images
│   ├── components/     # Reusable React components (Header, Footer, Home, Solutions, etc.)
│   ├── App.css         # Global styles
│   ├── App.jsx         # Main application component with routing
│   ├── index.css       # Entry point styles
│   └── main.jsx        # Application entry point
├── Dockerfile          # Dockerfile for multi-stage build
├── package.json        # Project dependencies and scripts
├── package-lock.json   # Lock file for dependencies
├── vite.config.js      # Vite bundler configuration
└── README.md           # This file
```

## How to Run the Project Locally

To run this project on your local machine, follow these steps:

### Prerequisites

Make sure you have Node.js (version 20 or higher) and npm installed.

### Installation

1.  **Navigate to the project directory:**
    ```bash
    cd genese-solution-clone
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    If you encounter peer dependency conflicts, you might need to run:
    ```bash
    npm install --legacy-peer-deps
    ```

### Running the Development Server

To start the development server with hot-reloading:

```bash
npm run dev
```

The application will be accessible at `http://localhost:5173/` (or another port if 5173 is in use).

### Building for Production

To create a production-ready build of the application:

```bash
npm run build
```

This will generate optimized static assets in the `dist/` directory.

### Previewing compiled project from `dist/` directory.

```bash
npm run preview
```

## Docker Deployment

This project includes a `Dockerfile` for containerization using a multi-stage build process. This allows you to build a lightweight Docker image for deployment.

### Building the Docker Image

From the project root directory, run:

```bash
docker build -t genese-solution-clone .
```

### Running the Docker Container

After building the image, you can run the application in a Docker container:

```bash
docker run -p 80:80 genese-solution-clone
```

The application will be accessible via your Docker host's IP address on port 80 (e.g., `http://localhost/`).

### Stop and remove the genese-solution-clone container:

```bash
docker stop $(docker ps -q --filter ancestor=genese-solution-clone)
docker rm $(docker ps -a -q --filter ancestor=genese-solution-clone)
```

### Remove the genese-solution-clone image:

```bash
docker rmi genese-solution-clone
```

## License

This project is open-source and available under the MIT License.

