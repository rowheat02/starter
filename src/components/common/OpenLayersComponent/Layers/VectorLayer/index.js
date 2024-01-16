/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable react/forbid-prop-types */
import { useEffect, useState } from 'react';
import { get } from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';
import { Vector as VectorSource } from 'ol/source';
import OLVectorLayer from 'ol/layer/Vector';
import { getStyles } from '@Components/common/OpenLayersComponent/helpers/styleUtils';

export function isExtentValid(extent) {
  return !extent.some(value => value === Infinity || Number.isNaN(value));
}

const VectorLayer = ({
  map,
  geojson,
  style,
  zIndex,
  zoomToLayer = false,
  visibleOnMap = true,
  properties,
}) => {
  const [vectorLayer, setVectorLayer] = useState(null);

  useEffect(
    () => () => map && vectorLayer && map.removeLayer(vectorLayer),
    [map, vectorLayer],
  );

  useEffect(() => {
    if (!map) return;

    const vectorLyr = new OLVectorLayer({
      source: new VectorSource({
        features: new GeoJSON().readFeatures(geojson, {
          featureProjection: get('EPSG:3857'),
        }),
      }),
      declutter: true,
    });

    setVectorLayer(vectorLyr);
  }, [map, geojson]);

  useEffect(() => {
    if (!map || !vectorLayer) return;
    if (visibleOnMap) {
      map.addLayer(vectorLayer);
    } else {
      map.removeLayer(vectorLayer);
    }
  }, [map, vectorLayer, visibleOnMap]);

  useEffect(() => {
    if (!vectorLayer || !style?.visibleOnMap) return;

    vectorLayer.setStyle((feature, resolution) =>
      getStyles({ style, feature, resolution }),
    );
  }, [vectorLayer, style]);

  useEffect(() => {
    if (!vectorLayer) return;
    vectorLayer.setZIndex(zIndex);
  }, [vectorLayer, zIndex]);

  useEffect(() => {
    if (!map || !vectorLayer || !zoomToLayer) return;
    const extent = vectorLayer.getSource().getExtent();
    if (!isExtentValid(extent)) return;
    map.getView().fit(extent, {
      padding: [50, 50, 50, 50],
      duration: 900,
      constrainResolution: true,
    });
  }, [map, vectorLayer, zoomToLayer]);

  useEffect(() => {
    if (!vectorLayer || !properties) return;
    const features = vectorLayer.getSource().getFeatures();
    features.forEach(feat => {
      feat.setProperties(properties);
    });
  }, [vectorLayer, properties]);

  return null;
};

export default VectorLayer;
