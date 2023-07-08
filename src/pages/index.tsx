import React, { FC } from 'react';
import Homepage from '@/components/Homepage';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { completeDataMapper } from '@/context/dataContext/mappers/completeDataMapper';
import { completeData } from '@/data/years';
import { districtsRegions } from '@/data/regions/polygons/_regionPolygons';
import { DataContextProvider } from '@/context/dataContext/DataContext';
import { Data, InitialData } from '@/context/dataContext/dataContextTypes';
import { MapContextProvider } from '@/context/mapContext/MapContext';

interface HomeProps {
  initialData: InitialData;
}

export const Home: FC<HomeProps> = ({ initialData }) => {
  return (
    <MapContextProvider>
      <DataContextProvider initialData={initialData}>
        <Homepage />
      </DataContextProvider>
    </MapContextProvider>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async (
  context: GetStaticPropsContext
) => {
  const initialData = completeDataMapper(completeData, districtsRegions);
  return { props: { initialData }, revalidate: 24 * 60 * 60 }; 
};

export default Home;
