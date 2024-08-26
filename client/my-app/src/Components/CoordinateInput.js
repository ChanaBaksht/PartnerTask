import React, { useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import VertexInput from './VertexesInputs'
import { CreatePath } from '../ApiRequest/graphAxios';
import { getCoordinatesFromKML, downloadKML, drawPath } from './tools'

const CoordinateForm = ({coordinates, setCoordinates})=> {
  const [sourceVertex, setSourceVertex] = useState({x: '', y: ''})
  const [targetVertex, setTargetVertex] = useState({x: '', y: ''})

  const handleCoordinateSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await CreatePath(sourceVertex, targetVertex);
      const kmlText = response.data;
      setCoordinates(getCoordinatesFromKML(kmlText));
      downloadKML(kmlText)
    } catch (error) {
      console.error('Error downloading KML file:', error);
    }
  };

  React.useEffect(() => {
    drawPath(coordinates);
  }, [coordinates]);

  return (
    <form onSubmit={handleCoordinateSubmit}>
      <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item>
          <Typography variant="h6">Enter source vertex:</Typography>
          <VertexInput vertex={sourceVertex} setVertex={setSourceVertex}/>
      </Grid>
      <Grid item>
          <Typography variant="h6">Enter target vertex:</Typography>
          <VertexInput vertex={targetVertex} setVertex={setTargetVertex}/>
      </Grid>
      <Button variant="contained" color="primary" type="submit" sx={{"margin":"10px"}}>Get Path</Button>
    </Grid>
    </form>
  );
}

export default CoordinateForm;
