import React, { FC, useContext, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { DataContext } from '@/context/dataContext/DataContext';
import { MapContext } from '@/context/mapContext/MapContext';
import { Box, Typography } from '@mui/material';
import { useSetSettings } from '@/context/dataContext/updateSettings';
import { AreaLevelValues, DataContextType } from '@/context/dataContext/dataContextTypes';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapContextType } from '@/context/mapContext/mapContextTypes';

mapboxgl.accessToken =
  'pk.eyJ1IjoiamVsZW45MSIsImEiOiJjbGZ3bGFobDEwN204M3R0YTMwdnRiNHJ5In0.H5Fxt1iilORVt2Dtjc93OA';

const Map: FC = () => {
  const previousPolygon = useRef<string | null>(null);
  const mapContainer = useRef<HTMLDivElement>(null);

  const dataContext = useContext(DataContext);
  const mapContext = useContext(MapContext);
  const updateSettings = useSetSettings();

  const { mapInstance, setMapInstance } = mapContext as MapContextType
  const { settings, polygons } = dataContext as DataContextType

  const handleColorChange = (newPolygon: string) => {
    if (mapInstance && mapInstance.getLayer(newPolygon)) {
      if (previousPolygon.current) {
        const previousPolygonData = polygons.find(
          ({ id }) => id === previousPolygon.current
        );

        if (previousPolygonData && previousPolygon.current) {
          mapInstance.setPaintProperty(
            previousPolygon.current,
            'fill-color',
            previousPolygonData.color
          );
        }
      }

      mapInstance.setPaintProperty(newPolygon, 'fill-color', 'yellow');
      previousPolygon.current = newPolygon;
    }
  };

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current as HTMLElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [15.4378, 49.8],
      zoom: 6,
      maxZoom: 8,
      minZoom: 6.5,
    });

    setMapInstance(map);

    return () => {
      map.remove();
    };
  }, [polygons[0]?.value]);

  useEffect(() => {
    if (
      !mapInstance ||
      !polygons ||
      settings.areaLevel === AreaLevelValues.municipality
    )
      return;
    mapInstance.on('load', () => {
      polygons.forEach(({ id, coordinates, color, name, value }) => {
        mapInstance.addSource(id, {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {
              name,
              value,
            },
            geometry: {
              type: 'Polygon',
              coordinates: coordinates as number[][][],
            },
          },
        });

        mapInstance.addLayer({
          id,
          type: 'fill',
          source: id,
          layout: {},
          paint: {
            'fill-color': color ?? 'none',
            'fill-opacity': 1,
          },
        });

        mapInstance.addLayer({
          id: `${id}-outline`,
          type: 'line',
          source: id,
          layout: {},
          paint: {
            'line-color': '#000',
            'line-width': 1,
          },
        });

        mapInstance.addLayer({
          id: `${id}-label`,
          type: 'symbol',
          source: id,
          layout: {
            'text-field': ['get', 'value'],
            'text-size': 12,
          },
          paint: {
            'text-color': 'black',
            'text-halo-color': 'white',
            'text-halo-width': 10,
          },
        });

        mapInstance.on('click', id, (e) => {
          handleColorChange(id);
          updateSettings({ polygonId: id, polygonName: name });
          mapInstance.flyTo({ center: e.lngLat, zoom: 7 });
        });

        mapInstance.on('mousemove', id, () => {
          mapInstance.getCanvas().style.cursor = 'pointer';
        });

        mapInstance.on('mouseleave', id, () => {
          mapInstance.getCanvas().style.cursor = '';
        });
      });
    });
  }, [mapInstance, polygons]);

  useEffect(() => {
    if (settings?.polygonId) {
      handleColorChange(settings.polygonId);
    }
    if (settings.areaLevel === AreaLevelValues.municipality && mapInstance) {
      const selectedPolygon = polygons.find(
        (polygon) => polygon.id === settings.polygonId
      );
      selectedPolygon &&
        new mapboxgl.Marker()
          .setLngLat(selectedPolygon?.coordinates as [number, number])
          .addTo(mapInstance);
      mapInstance.flyTo({
        center: selectedPolygon?.coordinates as [number, number],
        zoom: 10,
        speed: 0.6,
        curve: 1,
      });
      return;
    }
  }, [settings?.polygonId]);

  return (
    <Box
      flex="60%"
      height={500}
      margin={3}
      sx={{
        '& .mapboxgl-ctrl-attrib': {
          display: 'none',
        },
      }}
    >
      <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />
    </Box>
  );
};

export default Map;
