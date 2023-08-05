import React, { FC, useEffect, useState } from 'react';
import Homepage from '@/components/Homepage';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { completeDataMapper } from '@/context/dataContext/mappers/completeDataMapper';
import { completeData } from '@/data/years';
import { districtsRegions } from '@/data/regions/polygons/_regionPolygons';
import { DataContextProvider } from '@/context/dataContext/DataContext';
import { Data, InitialData } from '@/context/dataContext/dataContextTypes';
import { MapContextProvider } from '@/context/mapContext/MapContext';
import axios from 'axios';

interface HomeProps {
  initialData: InitialData;
}

export const Home: FC<HomeProps> = ({ initialData }) => {
  const [dataToUse, setDataToUse] = useState<InitialData>();

  return (
    <>
      {initialData ? (
        <MapContextProvider>
          <DataContextProvider initialData={initialData}>
            <Homepage />
          </DataContextProvider>
        </MapContextProvider>
      ) : (
        <>loading</>
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async (
  context: GetStaticPropsContext
) => {
  const initialData = await axios.get('/api/get-data');

  console.log(initialData)

  const { data } = initialData;
  return { props: { initialData: data.data } };
};

export default Home;
