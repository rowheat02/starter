/* eslint-disable react-hooks/exhaustive-deps */
import { useOLMap } from '@Components/common/OpenLayersComponent';
import { fromLonLat } from 'ol/proj';
import { dummyGeojson } from '@Constants/index';

import React from 'react';
import MapContainer from '@Components/common/OpenLayersComponent/Mapcontainer';
import LayerSwitcherControl from '@Components/common/OpenLayersComponent/LayerSwitcher';
import 'ol/ol.css';
import VectorLayer from '@Components/common/OpenLayersComponent/Layers/VectorLayer';
import BarChartComponent from '@Components/common/Charts/BarChart';

import { getPopulationRequest } from '@Store/actions/map';

import { useSelector, useDispatch } from 'react-redux';

function Map() {
  const loadingPopulation = useSelector(state => state.map.loadingPopulation);
  const population = useSelector(state => state.map.population);
  const dispatch = useDispatch();

  const { mapRef, map } = useOLMap({
    center: fromLonLat([85.3, 27.7]),
    zoom: 2,
    maxZoom: 25,
  });

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div className="overlays tw-absolute tw-bottom-2 tw-left-2 tw-z-10 tw-w-52 tw-bg-white tw-py-2 tw-pr-6">
        <BarChartComponent data={population} fills={['#1a2fa2', '#fca5a5']} />
        <button
          onClick={() => {
            dispatch(getPopulationRequest());
          }}
          type="button"
          className="w-right-2 tw-top-2 tw-ml-2 tw-rounded-md tw-bg-blue-500 tw-px-4 tw-py-2 tw-text-white"
        >
          <span className="tw-text-sm">
            {loadingPopulation ? 'Loading....' : 'Refetch Population'}
          </span>
        </button>
      </div>
      <MapContainer
        ref={mapRef}
        mapInstance={map}
        className="map"
        style={{ height: '100%', width: '100%' }}
      >
        <LayerSwitcherControl />
        <VectorLayer
          style={{
            lineColor: '#1a2fa2',
            lineWidth: 2,
          }}
          zoomToLayer
          geojson={dummyGeojson}
        />
      </MapContainer>
    </div>
  );
}

export default Map;
