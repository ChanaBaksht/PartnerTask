import * as d3 from 'd3';


export const getCoordinatesFromKML = (kmlText)=>{
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(kmlText, "application/xml");
    const coordinates = xmlDoc.getElementsByTagName("coordinates")[0].textContent.trim().split(" ");
    return coordinates.map(coord => {
      const [longitude, latitude] = coord.split(",");
      return { longitude: parseFloat(longitude), latitude: parseFloat(latitude) };
    });
  }
  
  export const downloadKML = (kmlText) => {
    const blob = new Blob([kmlText], { type: 'application/vnd.google-earth.kml+xml' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'route.kml';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();  
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };
  
  
  export const drawPath = (coordinates) => {
    d3.select("#map").selectAll("*").remove();
    
    if (!coordinates) return;
  
    const width = 900, height = 550;
    const svg = d3.select("#map").append("svg").attr("width", width).attr("height", height);
    const xScale = d3.scaleLinear().domain(d3.extent(coordinates, d => d.longitude)).range([0, width]);
    const yScale = d3.scaleLinear().domain(d3.extent(coordinates, d => d.latitude)).range([height, 0]);
    const line = d3.line().x(d => xScale(d.longitude)).y(d => yScale(d.latitude));
  
    svg.append("path").datum(coordinates).attr("fill", "none").attr("stroke", "blue").attr("stroke-width", 2).attr("d", line);
    coordinates.forEach(({ longitude, latitude }) => {
      const x = xScale(longitude);
      const y = yScale(latitude);
      svg.append("circle").attr("cx", x).attr("cy", y).attr("r", 5).attr("fill", "red");
      svg.append("text").attr("x", x + 5).attr("y", y - 5).attr("font-size", "12px").attr("fill", "black")
        .text(`(${longitude.toFixed(2)}, ${latitude.toFixed(2)})`);
    });
  };