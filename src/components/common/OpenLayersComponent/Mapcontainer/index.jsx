/* eslint-disable react/display-name */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';

const { Children, cloneElement, forwardRef } = React;

const MapContainer = forwardRef(({ children, mapInstance, ...rest }, ref) => {
  const childrenCount = Children.count(children);
  const props = {
    map: mapInstance,
  };
  return (
    <div ref={ref} id="ol-map" className="ol-map" {...rest}>
      {childrenCount < 1 ? (
        <></>
      ) : childrenCount > 1 ? (
        Children.map(children, child =>
          child ? cloneElement(child, { ...props }) : <></>,
        )
      ) : (
        cloneElement(children, { ...props })
      )}
    </div>
  );
});

export default MapContainer;
