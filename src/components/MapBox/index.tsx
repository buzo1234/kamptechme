import React from 'react'
import mapboxgl from 'mapbox-gl';
import Head from 'next/head';

const index = () => {
  return (
    <div>
        <Head>
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.css' rel='stylesheet' />
        </Head>
    </div>
  )
}

export default index