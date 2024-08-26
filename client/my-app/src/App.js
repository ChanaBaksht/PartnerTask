import React, { useState } from 'react';
import CoordinateForm from './Components/CoordinateInput';
import { Grid, Typography } from '@mui/material';

function App() {
  const [coordinates, setCoordinates] = useState([]);

  return (
    <Grid container direction="column" alignItems="center">
      <Typography variant="h3">Path App</Typography>
      
      <CoordinateForm coordinates={coordinates} setCoordinates={setCoordinates}/>

      {coordinates.length > 0 && (
        <Grid container direction="row" alignItems="center" justifyContent="center">

          <Typography variant="h5">Path vertexes:</Typography>
          {coordinates.map((vertex, index) => (
            <Typography key={index} variant="body1" align="center">
              ({vertex.longitude.toFixed(2)}, {vertex.latitude.toFixed(2)}),
            </Typography>
          ))}
        </Grid>
      )}

      <Grid id="map" style={{ margin: "10px", width: 900, height: 550, border: "1px solid #ccc" }}></Grid>
    </Grid>
  );
}

export default App;
