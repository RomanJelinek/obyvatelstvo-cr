import React, {
  createContext,
  useState,
  FC,
  PropsWithChildren,
  useEffect,
  useMemo,
} from 'react';
import { completeDataMapper } from '@/context/dataContext/mappers/completeDataMapper';
import {
  DataContextType,
  DataContextSettings,
  AreaLevelValues,
  Polygons,
  Data,
  MetricsValues,
} from './dataContextTypes';
import { completeData } from '../../data/years';
import { districtPolygons } from '@/data/districts/polygons/_districtPolygons';
import { countryPolygon } from '@/data/countryPolygon/_countryPolygon';
import {
  districtsRegions,
  regionPolygons,
} from '@/data/regions/polygons/_regionPolygons';
import { getPolygonColor } from '@/utils/getPolygonColor';
import { getPolygonValue } from '@/utils/getPolygonValue';
import { municipalities } from '@/data/municipality';

export const DataContext =
  createContext<DataContextType | undefined>(undefined);

export const DataContextProvider: FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [settings, setSettings] = useState<DataContextSettings>({
    polygonId: 'CZ0100',
    polygonName: 'Praha',
    areaLevel: AreaLevelValues.district,
    selectedYear: '2023',
    selectedMetric: MetricsValues.total,
  });
  const [polygons, setPolygons] = useState<Polygons[]>([]);
  const [data, setData] = useState<Data>({});

  const { districtData, regionData, countryData, cityData } = useMemo(
    () => completeDataMapper(completeData, districtsRegions),
    []
  );

  useEffect(() => {
    let data: Data = {};
    let polygons: Polygons[] = [];

    switch (settings.areaLevel) {
      case AreaLevelValues.district:
        data = districtData;
        polygons = districtPolygons;
        break;
      case AreaLevelValues.region:
        data = regionData;
        polygons = regionPolygons;
        break;
      case AreaLevelValues.country:
        data = countryData;
        polygons = countryPolygon;
        break;
      case AreaLevelValues.municipality:
        data = countryData;
        polygons = municipalities;
        break;
      default:
        data = countryData;
        polygons = countryPolygon;
        return;
    }

    setPolygons(
      polygons.map((polygon) => ({
        ...polygon,
        color: getPolygonColor(
          polygon,
          data[settings.selectedYear],
          settings.selectedMetric || undefined
        ),
        value: getPolygonValue(
          polygon,
          data[settings.selectedYear],
          settings.selectedMetric || undefined
        ),
      }))
    );
  }, [settings.selectedYear, settings.selectedMetric, settings.areaLevel]);

  useEffect(() => {
    if (settings.areaLevel === AreaLevelValues.district)
      setData(filterById(districtData, settings.polygonId));
    if (settings.areaLevel === AreaLevelValues.region)
      setData(filterById(regionData, settings.polygonId));
    if (settings.areaLevel === AreaLevelValues.municipality)
      setData(filterById(cityData as Data, settings.polygonId));
    if (settings.areaLevel === AreaLevelValues.country) setData(countryData);
  }, [settings.areaLevel, settings.polygonId, settings.selectedYear]);

  return (
    <DataContext.Provider
      value={{
        data,
        polygons,
        settings,
        setSettings,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

function filterById(data: Data, id: string): Data {
  const filteredData: Data = {};
  Object.keys(data).forEach((year) => {
    filteredData[year] = data[year].filter((item) => item.id === id);
  });
  return filteredData;
}
