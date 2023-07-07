import {
  Polygons,
  MetricsValues,
} from '@/context/dataContext/dataContextTypes';
import { BasicData } from '@/context/dataContext/mappers/completeDataMapper';
import { getFormattedValue } from './getFormattedValue';

export const getPolygonValue = (
  polygon: Polygons,
  data: BasicData[],
  metric: MetricsValues
) => {
  const value = data.find((v) => v.id === polygon.id)?.[metric];

  if (value == null) {
    return '0';
  }

  const isRelative = metric.includes('relative');
  return getFormattedValue(value, isRelative);
};
