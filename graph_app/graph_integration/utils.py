import networkx as nx
import json
import os

GRAPH_FILE_PATH = os.environ.get("GRAPH_FILE_PATH", './graph_app/graph_integration/graph_example.json')


def load_graph() -> nx.Graph:
    with open(GRAPH_FILE_PATH, 'r') as file:
        data = json.load(file)

    graph = nx.Graph()
    for vertex, route_vertexes in data.items():
        node = tuple(map(float, vertex.strip("()").split(", ")))
        for route_vertex in route_vertexes:
            graph.add_edge(node, tuple(route_vertex))
    return graph


def generate_kml(path: list[tuple[float, float]]) -> str:
    return f"""<?xml version="1.0" encoding="UTF-8"?>
    <kml xmlns="http://www.opengis.net/kml/2.2">
      <Document>
        <name>Route</name>
        <Placemark>
          <LineString>
            <coordinates>
            {''.join([f"{longitude},{latitude},0 " for latitude, longitude in path])}
            </coordinates>
          </LineString>
        </Placemark>
      </Document>
    </kml>"""
