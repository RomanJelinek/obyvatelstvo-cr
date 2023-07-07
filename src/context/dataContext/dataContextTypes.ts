import { DistrictPolygons } from '@/data/types/dataTypes';
import { BasicData } from '@/context/dataContext/mappers/completeDataMapper';

export enum AreaLevelLabels {
  country = 'ČR',
  region = 'Kraj',
  district = 'Okres',
  municipality = 'Obec',
}

export enum AreaLevelValues {
  country = 'country',
  region = 'region',
  district = 'district',
  municipality = 'municipality',
}

export const areaLevels = [
  { value: AreaLevelValues.country, label: AreaLevelLabels.country },
  { value: AreaLevelValues.region, label: AreaLevelLabels.region },
  { value: AreaLevelValues.district, label: AreaLevelLabels.district },
  { value: AreaLevelValues.municipality, label: AreaLevelLabels.municipality },
];

export const years = [
  '2010',
  '2011',
  '2012',
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
  '2023',
] as const;

export type DataYears = typeof years[number];

export enum MetricsLabels {
  total = 'Počet obyvatel',
  men = 'Počet mužů',
  women = 'Počet žen',
  total_average_age = 'Průměrný věk',
  men_average_age = 'Průměrný věk mužů',
  women_average_age = 'Průměrný věk žen',
  total_change_absolute = 'Přírustek za rok absolutní',
  total_change_relative = 'Přírustek za rok relativní',
}

export enum MetricsValues {
  total = 'total',
  men = 'men',
  women = 'women',
  total_average_age = 'total_average_age',
  men_average_age = 'men_average_age',
  women_average_age = 'women_average_age',
  total_change_absolute = 'total_change_absolute',
  total_change_relative = 'total_change_relative',
}

export const metrics = [
  { value: MetricsValues.total, label: MetricsLabels.total },
  { value: MetricsValues.men, label: MetricsLabels.men },
  { value: MetricsValues.women, label: MetricsLabels.women },
  {
    value: MetricsValues.total_average_age,
    label: MetricsLabels.total_average_age,
  },
  {
    value: MetricsValues.men_average_age,
    label: MetricsLabels.men_average_age,
  },
  {
    value: MetricsValues.women_average_age,
    label: MetricsLabels.women_average_age,
  },
  {
    value: MetricsValues.total_change_absolute,
    label: MetricsLabels.total_change_absolute,
  },
  {
    value: MetricsValues.total_change_relative,
    label: MetricsLabels.total_change_relative,
  },
];

export interface DataContextSettings {
  polygonId: string;
  polygonName: string;
  areaLevel: AreaLevelValues;
  selectedYear: DataYears;
  selectedMetric: MetricsValues;
}

export interface Polygons {
  coordinates: number[][][] | number[];
  region?: string;
  id: string;
  name: string;
  color?: string | null;
  value?: string | null;
}

export type Data = Record<string, BasicData[]>;

export interface DataContextType {
  data: Data;
  polygons: Polygons[];
  settings: DataContextSettings;
  setSettings: React.Dispatch<React.SetStateAction<DataContextSettings>>;
}