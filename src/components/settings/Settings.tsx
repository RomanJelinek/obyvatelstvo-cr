import { DataContext } from '@/context/dataContext/DataContext';
import {
  areaLevels,
  metrics,
  years,
  DataYears,
  MetricsValues,
  AreaLevelValues,
} from '@/context/dataContext/dataContextTypes';
import { useSetSettings } from '@/context/dataContext/updateSettings';
import { MapContext } from '@/context/mapContext/MapContext';
import { Box, Typography } from '@mui/material';
import React, { ChangeEvent, FC, useContext } from 'react';
import AreaAutocomplete from './inputs/AreaAutocomplete';
import SelectType from './inputs/SelectType';

const Setttings: FC = () => {
  const dataContext = useContext(DataContext);
  const mapContext = useContext(MapContext);
  const updateSettings = useSetSettings();

  return (
    <Box
      m={5}
      gap={2}
      display="flex"
      flexDirection="column"
      width="100%"
      height="auto"
      flex="20%"
    >
      <Typography variant="h4" mb={3}>
        Filtr dat
      </Typography>
      <SelectType
        label="Rok"
        value={dataContext?.settings.selectedYear}
        onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
          updateSettings({ selectedYear: e.target.value as DataYears })
        }
        options={years.map((year) => ({ value: year, label: year }))}
      />

      <SelectType
        label="Metrika"
        value={dataContext?.settings.selectedMetric}
        onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
          updateSettings({ selectedMetric: e.target.value as MetricsValues })
        }
        options={metrics}
      />

      <SelectType
        label="Oblast"
        value={dataContext?.settings.areaLevel}
        onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
          updateSettings({
            areaLevel: e.target.value as AreaLevelValues,
            polygonId: '',
            polygonName: '',
          })
        }
        options={areaLevels}
      />

      <AreaAutocomplete dataContext={dataContext} mapContext={mapContext} />
    </Box>
  );
};

export default Setttings;
