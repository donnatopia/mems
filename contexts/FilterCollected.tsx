import React, { createContext, useContext } from 'react';

interface MapFilterProps {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  filterOptions: Array<string>
}

export const MapFilterContext = createContext<MapFilterProps>({} as MapFilterProps);

export function useMapFilter() {
  return useContext(MapFilterContext);
}