## Graph-Based Route Finder

## Overview
This project is a web application that allows users to find and visualize the shortest path between two geographical coordinates on a predefined graph.
The application consists of a React.js frontend and a FastAPI backend.

## Features
Input source and target geographical coordinates.
Compute and visualize the shortest path between the coordinates.
Download the path as a KML file.

## Technologies Used
Frontend: React.js, MUI (Material-UI), D3.js
Backend: FastAPI, NetworkX
Other: Pydantic, Uvicorn

## Setup Instructions
Prerequisites:
   - Python 3.11
   - Node.js
   - npm

## Backend & Frontend Setup
1. Clone the repository: 
   - git clone https://github.com/ChanaBaksht/PartnerTask.git
2. Navigate to the project directory:
   - cd ./PartnerTask
3. Install Python dependencies:
   - pip install -r ./graph_app/requirements.txt
4. Run the FastAPI server:
   -  uvicorn graph_app.main:app --host 0.0.0.0 --port 80 
5. Navigate to the client directory:
   - cd ./client/my-app/
6. Install Node.js dependencies:
   - npm install
7. Run the React application:
   - npm start
8. Access the application:
   -  Open your browser and navigate to http://localhost:3000

## Configuration
* Graph Data: 
   The backend uses a graph data file (graph_example.json) stored in graph_app/graph_integration/graph_example.json
* CORS Settings: 
   The allowed origin is set to http://localhost:3000 by default.

## Usage
- Enter Coordinates: Input the source and target geographical coordinates.
- Get Path: Click the "Get Path" button to compute and display the shortest path.
- Visualize: The path will be visualized on the map below the form.
- Download KML: The KML file will automatically download after the path is computed.