import {
  Data,
  DataContextSettings,
} from '@/context/dataContext/dataContextTypes';
import { BasicData } from '@/context/dataContext/mappers/completeDataMapper';
import { useSetSettings } from '@/context/dataContext/updateSettings';
import React, { FC } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface GraphProps {
  updateSettings: (newSettings: Partial<DataContextSettings>) => void;
  data: Data;
  selectedYear: string;
  metric: keyof BasicData;
}

const Graph: FC<GraphProps> = ({
  data,
  selectedYear,
  metric,
  updateSettings,
}) => {
  const graphData = Object.entries(data).map(([year, values]) => {
    const value = values[0]?.[metric];
    const total =
      typeof value === 'number'
        ? Math.round(value * Math.pow(10, 3)) / Math.pow(10, 3)
        : 0;
    return {
      year: String(year),
      total,
    };
  });

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={graphData}>
        <Line
          type="monotone"
          dataKey="total"
          stroke="#8884d8"
          activeDot={({ payload, cx, cy, r }) => {
            const fill =
              payload.year === String(selectedYear) ? 'yellow' : '#8884d8';
            const selectedR = 14;
            return (
              <circle
                cursor="pointer"
                stroke={
                  payload.year === String(selectedYear) ? 'black' : 'none'
                }
                cx={cx}
                cy={cy}
                r={selectedR}
                fill={fill}
                onClick={() => updateSettings({ selectedYear: payload.year })}
                pointerEvents="visible"
              />
            );
          }}
          dot={({ payload, cx, cy, r }) => {
            const fill =
              payload.year === String(selectedYear) ? 'yellow' : '#8884d8';
            const selectedR =
              payload.year === String(selectedYear) ? r + 6 : r + 2;
            return (
              <circle
                cursor="pointer"
                stroke={
                  payload.year === String(selectedYear) ? 'black' : 'none'
                }
                cx={cx}
                cy={cy}
                r={selectedR}
                fill={fill}
                onClick={() => updateSettings({ selectedYear: payload.year })}
                pointerEvents="visible"
              />
            );
          }}
        />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="year" />

        <YAxis domain={['dataMin', 'dataMax']} />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graph;
