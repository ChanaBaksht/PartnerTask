import React from 'react';
import { TextField,  Grid } from '@mui/material';

function VertexInput({vertex, setVertex }) {

  return (
      <Grid container spacing={2} direction="row" alignItems="center">
        <Grid item>
          <TextField
            label="X Coordinate"
            variant="outlined"
            value={vertex.x}
            onChange={(e) => setVertex(prevState => ({...prevState, x:parseFloat(e.target.value)}))}
            type="number"
            required
          />
        </Grid>
        <Grid item>
          <TextField
            label="Y Coordinate"
            variant="outlined"
            value={vertex.y}
            onChange={(e) => setVertex(prevState => ({...prevState, y:parseFloat(e.target.value)}))}
            type="number"
            required
          />
        </Grid>
        <Grid item>
        </Grid>
      </Grid>
  );
}

export default VertexInput;
