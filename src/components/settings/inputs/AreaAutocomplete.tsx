import { Autocomplete, createFilterOptions, TextField } from '@mui/material';
import React, { ChangeEvent, FC, useContext } from 'react';
import * as turf from '@turf/turf';
import {
  AreaLevelLabels,
  AreaLevelValues,
  DataContextType,
} from '@/context/dataContext/dataContextTypes';
import { MapContextType } from '@/context/mapContext/mapContextTypes';

interface AreaAutocompleteProps {
  dataContext: DataContextType | undefined;
  mapContext: MapContextType | undefined;
}

interface AutocompleteOption {
  value: string;
  label: string;
}

const AreaAutocomplete: FC<AreaAutocompleteProps> = ({
  dataContext,
  mapContext,
}) => {
  const getCenterCoordinates = (sourceData: any) => {
    const bbox = turf.bbox(sourceData);
    const center = turf.centerOfMass(turf.bboxPolygon(bbox));
    return center.geometry.coordinates;
  };

  const updateSettings = (v: AutocompleteOption | null) => {
    dataContext?.setSettings((prev) => ({
      ...prev,
      polygonId: v?.value ?? '',
      polygonName: v?.label ?? '',
    }));
  };

  const handleAutocompleteChange = (
    _e: ChangeEvent<{}>,
    v: { value: string; label: string } | null
  ) => {
    if (!v) return;
    updateSettings(v);
    if (
      !mapContext?.mapInstance ||
      dataContext?.settings.areaLevel === AreaLevelValues.municipality
    )
      return;
    const sourceData = (mapContext?.mapInstance.getSource(v.value) as any)
      ._data;
    const [lng, lat] = getCenterCoordinates(sourceData);
    mapContext?.mapInstance?.flyTo({ center: [lng, lat], zoom: 7 });
  };

  const options =
    dataContext?.polygons.map((area) => ({
      value: area.id,
      label: area.name,
    })) || [];

  return (
    <Autocomplete
      disablePortal
      value={
        {
          label: dataContext?.settings.polygonName,
          value: dataContext?.settings.polygonId,
        } as { label: string; value: string }
      }
      options={options}
      sx={{ width: 300, display: 'inline-block' }}
      onChange={handleAutocompleteChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label={AreaLevelLabels[dataContext?.settings.areaLevel ?? 'country']}
        />
      )}
    />
  );
};

export default AreaAutocomplete;
