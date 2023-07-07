export interface MapContextType {
  mapInstance: mapboxgl.Map | null;
  setMapInstance: React.Dispatch<React.SetStateAction<mapboxgl.Map | null>>;
}
