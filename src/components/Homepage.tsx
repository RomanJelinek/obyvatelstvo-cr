'use client';

import { DataContextProvider } from '@/context/dataContext/DataContext';
import { MapContextProvider } from '@/context/mapContext/MapContext';
import { Box } from '@mui/material';
import React, { FC } from 'react';
import Map from './Map';
import Setttings from './settings/Settings';
import Stats from './stats/Stats';

const Homepage: FC = () => {
  return (
    <DataContextProvider>
      <MapContextProvider>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="end"
        >
          <Setttings />
          <Map />
        </Box>
        <Stats />
      </MapContextProvider>
    </DataContextProvider>
  );
};

export default Homepage;
