import React, { useContext, useEffect } from 'react';
import { DataContext } from '@/context/dataContext/DataContext';
import { Box, getOverlayAlpha, Typography } from '@mui/material';
import {
  AreaLevelLabels,
  metrics,
  MetricsLabels,
  MetricsValues,
} from '@/context/dataContext/dataContextTypes';
import { getFormattedValue } from '@/utils/getFormattedValue';
import DataTable from './DataTable';
import { useSetSettings } from '@/context/dataContext/updateSettings';
import Graph from './Graph';

const Stats = () => {
  const dataContext = useContext(DataContext);
  if (!dataContext)
    return (
      <Box m={3}>
        <Typography variant="h6" color="error">
          Data nejsou k dispozici
        </Typography>
      </Box>
    );
  const data = dataContext.data ?? {};
  const settings = dataContext.settings;
  const metric = settings.selectedMetric;
  const updateSettings = useSetSettings();
  const isSelectedData = settings.polygonId.length > 0;

  const selectedYear = settings?.selectedYear ?? 2023;

  const selectedData = data[selectedYear]?.[0] ?? {};

  return (
    <>
      <Box m={3}>
        <Typography variant="h3" my={3}>
          {!isSelectedData
            ? 'Zvolte ' + AreaLevelLabels[settings.areaLevel]
            : `${selectedData.name} v roce ${selectedYear}`}
        </Typography>

        {isSelectedData && (
          <Box display="flex" gap={8} alignItems="center">
            <Box flex="4">
              <DataTable
                selectedData={selectedData}
                updateSettings={updateSettings}
                metric={metric}
              />
            </Box>
            <Box flex="8">
              <Typography variant="h6" align="center" gutterBottom>
                {MetricsLabels[metric]} v průběhu času
              </Typography>
              <Graph
                data={data}
                selectedYear={selectedYear}
                metric={metric}
                updateSettings={updateSettings}
              />
            </Box>

            {/* {data[selectedYear][0]?.cities.map((city) => (
        <li key={city.id}>{city.name}</li>
      ))} */}
          </Box>
        )}
      </Box>
      )
    </>
  );
};

export default Stats;
