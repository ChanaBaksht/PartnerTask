from pydantic import BaseModel


class VertexModel(BaseModel):
    x: float
    y: float
