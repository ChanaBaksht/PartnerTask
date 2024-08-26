from graph_app.api_server.manager import GraphManager
from graph_app.models.vertex import VertexModel
from graph_app.graph_integration.utils import generate_kml
from networkx import Graph


class GraphController:
    @staticmethod
    def create_kml_path(source_vertex: VertexModel, target_vertex: VertexModel, graph: Graph) \
            -> str:
        source_node = GraphManager.find_closest_node(source_vertex, graph)
        target_node = GraphManager.find_closest_node(target_vertex, graph)
        path = GraphManager.shortest_path(source_node, target_node, graph)
        return generate_kml(path)
