import {
  DataContextSettings,
  metrics,
} from '@/context/dataContext/dataContextTypes';
import {
  BasicData,
  CityData,
  RegionData,
  DistrictData,
  CountryData,
} from '@/context/dataContext/mappers/completeDataMapper';
import { useSetSettings } from '@/context/dataContext/updateSettings';
import { getFormattedValue } from '@/utils/getFormattedValue';
import { Box, Typography, useTheme } from '@mui/material';
import React, { FC } from 'react';

interface DataTableProps {
  selectedData: BasicData;
  updateSettings: (newSettings: Partial<DataContextSettings>) => void;
  metric: keyof BasicData;
}

const DataTable: FC<DataTableProps> = ({
  selectedData,
  updateSettings,
  metric,
}) => {
  const theme = useTheme();
  const tableData = metrics.map((metricItem) => ({
    ...metricItem,
    number: getFormattedValue(
      selectedData[metricItem.value],
      metricItem.value.includes('relative')
    ),
    color: selectedData[metricItem.value] >= 0 ? 'success.main' : 'error.main',
  }));

  return (
    <>
      {tableData.map((item, index) => (
        <Box
          key={index}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bgcolor={
            item.value === metric
              ? theme.palette.mode === 'dark'
                ? 'primary.main'
                : 'primary.light'
              : index % 2 === 0
              ? theme.palette.background.paper
              : theme.palette.grey[theme.palette.mode === 'dark' ? 800 : 100]
          }
          sx={{
            padding: '10px 16px',
            marginBottom: '4px',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          }}
          onClick={() => updateSettings({ selectedMetric: item.value })}
        >
          <Typography variant="body1">{item.label}</Typography>
          <Typography
            variant="body1"
            color={item.color}
            sx={{ fontWeight: 'bold' }}
          >
            {item.number ?? ''}
          </Typography>
        </Box>
      ))}
    </>
  );
};

export default DataTable;