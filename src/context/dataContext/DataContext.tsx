import React, {
  createContext,
  useState,
  FC,
  PropsWithChildren,
  useEffect,
} from 'react';
import {
  DataContextType,
  DataContextSettings,
  AreaLevelValues,
  Polygons,
  Data,
  MetricsValues,
  InitialData,
} from './dataContextTypes';
import { districtPolygons } from '@/data/districts/polygons/_districtPolygons';
import { countryPolygon } from '@/data/countryPolygon/_countryPolygon';
import { regionPolygons } from '@/data/regions/polygons/_regionPolygons';
import { getPolygonColor } from '@/utils/getPolygonColor';
import { getPolygonValue } from '@/utils/getPolygonValue';
import { municipalities } from '@/data/municipality';
import { filterById } from '@/utils/filterById';

export const DataContext =
  createContext<DataContextType | undefined>(undefined);

export const DataContextProvider: FC<
  PropsWithChildren<{ initialData: InitialData }>
> = ({ initialData, children }) => {
  const [settings, setSettings] = useState<DataContextSettings>({
    polygonId: 'CZ0100',
    polygonName: 'Praha',
    areaLevel: AreaLevelValues.district,
    selectedYear: '2023',
    selectedMetric: MetricsValues.total,
  });
  const [polygons, setPolygons] = useState<Polygons[]>([]);
  const [data, setData] = useState<Data>({});

  const { districtData, regionData, countryData, cityData } = initialData;

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
