from graph_app.models.vertex import VertexModel
from networkx import Graph, shortest_path


class GraphManager:

    @staticmethod
    def find_closest_node(vertex: VertexModel, graph: Graph) -> tuple[float, float]:
        '''
        Finds the closest node in the graph to the given vertex.
        :param vertex: The geographical coordinates (latitude and longitude) of the vertex.
        :param graph: The graph containing nodes with geographical coordinates.
        :return: The coordinates of the closest node in the graph as a tuple (latitude, longitude).
        '''
        return min(graph.nodes,
                   key=lambda node: (node[0] - vertex.x) ** 2 + (node[1] - vertex.y) ** 2)

    @staticmethod
    def shortest_path(source_node: tuple[float, float], target_node: tuple[float, float], graph: Graph) \
            -> list[tuple[float, float]]:
        '''
        Finds the shortest path between the source and target nodes in the graph.
        :param source_node: The coordinates of the starting node as a tuple (latitude, longitude).
        :param target_node: The coordinates of the ending node as a tuple (latitude, longitude).
        :param graph: The graph containing nodes and edges.
        :return: A list of nodes representing the shortest path, with each node given as a tuple (latitude, longitude).
        '''
        return shortest_path(graph, source=source_node, target=target_node)
