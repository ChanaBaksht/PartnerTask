from fastapi import APIRouter, HTTPException, Depends
from fastapi.responses import Response
from graph_app.models.vertex import VertexModel
from graph_app.api_server.controller import GraphController
from graph_app.graph_integration.utils import load_graph
import networkx as nx

router = APIRouter(tags=["graph"])


@router.post("/path")
async def create_path(source_vertex: VertexModel, target_vertex: VertexModel, graph: nx.Graph = Depends(load_graph)):
    '''
    :param source_vertex: Represents the geographical coordinates of the starting vertex of the path.
    :param target_vertex: Represents the geographical coordinates of the ending vertex of the path.
    :param graph: A NetworkX graph object that represents the underlying graph structure used for finding the path.
    :return: The function returns a Response containing the generated KML if successful.
    '''
    try:
        kml_file = GraphController.create_kml_path(source_vertex, target_vertex, graph)
        return Response(kml_file, media_type="application/vnd.google-earth.kml+xml")
    except Exception as e:
        raise HTTPException(status_code=500, detail=e)
