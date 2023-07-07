import { districtPolygons } from '../districts/polygons/_districtPolygons';
import { regionPolygons } from '../regions/polygons/_regionPolygons';

export type DistrictIds = typeof districtPolygons[number]['id'];

export type RegionIds = typeof regionPolygons[number]['id'];

export type DistrictNames = typeof districtPolygons[number]['name'];

export type RegionNames = typeof regionPolygons[number]['name'];

export interface DistrictPolygons {
  id: string;
  coordinates: number[][][];
  name: string;
  region?: string;
}

export interface RegionPolygons {
  id: string;
  coordinates: number[][][];
  name: string;
}

export interface YearsData {
  district: string;
  municipality: number;
  name_of_municipality: string;
  total: number;
  men: number;
  women: number;
  total_average_age: number;
  men_average_age: number;
  women_average_age: number;
}
