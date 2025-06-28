'use client'

import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function Map() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (map.current) return; // Initialize map only once
    
    if (mapContainer.current) {
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: 'https://tiles.stadiamaps.com/styles/outdoors.json', // Free outdoors style
        center: [-98.5, 39.8], // Center of US
        zoom: 4,
        attributionControl: false,
      });

      // Add navigation controls
      map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={mapContainer} 
      className="w-full h-full min-h-[500px] rounded-lg"
    />
  );
}
