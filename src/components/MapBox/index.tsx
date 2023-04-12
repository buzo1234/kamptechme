import React from 'react'
import mapboxgl, { Marker } from 'mapbox-gl';
import Head from 'next/head';
import 'mapbox-gl/dist/mapbox-gl.css'; 

const MapBoxComp = () => {
    const [map, setMap] = React.useState<mapboxgl.Map>();

    // React ref to store a reference to the DOM node that will be used
  // as a required parameter `container` when initializing the mapbox-gl
  // will contain `null` by default
    const mapNode = React.useRef(null);

  React.useEffect(() => {
    const node = mapNode.current;
        // if the window object is not found, that means
        // the component is rendered on the server
        // or the dom node is not initialized, then return early
    if (typeof window === "undefined" || node === null) return;

        // otherwise, create a map instance
    var mapboxMap = new mapboxgl.Map({
      container: node,
            accessToken: "pk.eyJ1Ijoia2lubnlidXpvIiwiYSI6ImNsZ2RzaTQwZDBvY3QzZnA4dXdsd2g3djkifQ.Fjv_5plbOmFi_3-NLr2_jg",
            style: "mapbox://styles/mapbox/streets-v11",
      center: [55.32423381087544, 25.259052426409283 ],
      zoom: 12,
    });

  
    mapboxMap && mapboxMap.on('load' , () => {
        new mapboxgl.Marker({
            anchor:"top",
            scale:1.2,
            color: "#000000",
            draggable: false
            }).setLngLat([55.32423381087544, 25.259052426409283]).addTo(mapboxMap);
    })

   

    

        // save the map object to React.useState
    setMap(mapboxMap);

        return () => {
      mapboxMap.remove();
    };
  }, []);

    return (<><div ref={mapNode} style={{height: "500px", width:"100%" }} className='mt-10 mb-20 flex flex-col overflow-hidden  ' />
   
    
    </>);
}

export default MapBoxComp