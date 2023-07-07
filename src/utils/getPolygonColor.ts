import {
  Data,
  Polygons,
  MetricsValues,
} from '@/context/dataContext/dataContextTypes';
import { BasicData } from '@/context/dataContext/mappers/completeDataMapper';

export const getPolygonColor = (
  polygon: Polygons,
  data: BasicData[],
  metric: MetricsValues,
) => {
  const metricValues = data.map((item: BasicData) => item[metric]);
  const max = Math.max(0, ...metricValues);
  const min = Math.min(0, ...metricValues);
  const selected = data.find((item) => item.id === polygon.id);
  const value = selected?.[metric];

  // Scale lightness between 95% and 5%
  const lowerBound = 95; // the color for the maximum value (lighter)
  const upperBound = 20; // the color for the minimum value (darker)

  let scaledValue;
  let hue;

  if (value && value >= 0) {
    // For positive values, use green color with scaled lightness
    hue = 120; // green
    const logMax = Math.log(max + 1);
    scaledValue =
      lowerBound - (lowerBound - upperBound) * (Math.log(value + 1) / logMax);
  } else if (value) {
    // For negative values, use red color with scaled lightness
    hue = 0; // red
    const logAbsMin = Math.log(Math.abs(min) + 1);
    scaledValue =
      lowerBound -
      (lowerBound - upperBound) * (Math.log(Math.abs(value) + 1) / logAbsMin);
  }

  return `hsl(${hue}, 100%, ${scaledValue}%)`;
};
