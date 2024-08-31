"use client";
// components/GoogleMap.tsx
import React, { useEffect } from "react";

const GoogleMapComponent: React.FC = () => {
  useEffect(() => {
    const loadGoogleMapsScript = (): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Check if Google Maps script is already loaded
        if (document.querySelector(`script[src*="maps.googleapis.com"]`)) {
          return resolve();
        }

        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
        script.async = true;
        script.defer = true;
        script.onerror = () =>
          reject(new Error("Failed to load Google Maps script"));
        script.onload = () => resolve();
        document.head.appendChild(script);
      });
    };

    // Initialize the map
    const initMap = () => {
      const mapElement = document.getElementById("map");
      if (mapElement) {
        new google.maps.Map(mapElement, {
          center: { lat: -34.397, lng: 150.644 }, // Replace with your desired latitude and longitude
          zoom: 8,
        });
      } else {
        console.error("Map element not found");
      }
    };

    // Make sure initMap is globally accessible
    (window as any).initMap = initMap;

    // Load the Google Maps script
    loadGoogleMapsScript().catch((error) => {
      console.error("Error loading Google Maps script:", error);
    });
  }, []);

  return <div id="map" style={{ height: "500px", width: "100%" }}></div>;
};

export default GoogleMapComponent;
