/* eslint-disable no-unused-vars */
import 'ol-layerswitcher/dist/ol-layerswitcher.css';

import LayerGroup from 'ol/layer/Group';
import LayerTile from 'ol/layer/Tile';
import SourceOSM from 'ol/source/OSM';
import LayerSwitcher from 'ol-layerswitcher';
import { useEffect } from 'react';

import { XYZ } from 'ol/source';

const LayerSwitcherControl = ({ map, visible = 'osm' }) => {
  useEffect(() => {
    if (!map) return;

    const osm = new LayerTile({
      title: 'OSM',
      type: 'base',
      visible: visible === 'osm',
      source: new SourceOSM(),
    });

    const baseMaps = new LayerGroup({
      title: 'Base maps',
      layers: [osm],
    });

    const layerSwitcher = new LayerSwitcher({
      reverse: true,
      groupSelectStyle: 'group',
    });
    map.addLayer(baseMaps);
    map.addControl(layerSwitcher);
  }, [map, visible]);

  return null;
};

export default LayerSwitcherControl;
