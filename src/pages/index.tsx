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

  useEffect(() => {
    const getData = async () => {
      const dataF = await axios.get('/api/get-data');
      const { data } = dataF;
      setDataToUse(data.data);
    };
    getData();
  }, []);
  return (
    <>
      {dataToUse ? (
        <MapContextProvider>
          <DataContextProvider initialData={dataToUse}>
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
  const initialData = completeDataMapper(completeData, districtsRegions);
  return { props: { initialData } };
};

export default Home;
