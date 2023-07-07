import React, { createContext, useState, FC, PropsWithChildren } from 'react';
import { MapContextType } from './mapContextTypes';

export const MapContext = createContext<MapContextType | undefined>(undefined);

export const MapContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [mapInstance, setMapInstance] = useState<mapboxgl.Map | null>(null);

  return (
    <MapContext.Provider value={{ mapInstance, setMapInstance }}>
      {children}
    </MapContext.Provider>
  );
};
