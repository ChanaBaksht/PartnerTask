import axios from "axios";
import { config } from "./config";


export const CreatePath = async (sourceVertex, targetVertex) =>{
    try {
        return await axios.post(`${config.GRAPH_URL}/path`, {
            source_vertex: sourceVertex,
            target_vertex: targetVertex
        });
    } catch (err) {
        throw err;
    }
}
   