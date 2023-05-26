import React, { createContext, useContext, useState } from 'react';

interface MapFilterProps {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  filterOptions: Array<string>
}

export const MapFilterContext = createContext<MapFilterProps>({} as MapFilterProps);

export function useMapFilter() {
  return useContext(MapFilterContext);
}

interface ChildrenProps {
  children: JSX.Element | JSX.Element[];
}

export function MapFilterProvider({ children }: ChildrenProps){
  const filterOptions = [
    'All', // status: -1, 0, 1
    'Collected', // status: 1
    'Not Collected' // status: -1, 0
  ]
  const [selected, setSelected] = useState(0);
  const value = { selected, setSelected, filterOptions };

  return (
    <MapFilterContext.Provider value={value}>
      { children }
    </MapFilterContext.Provider>
  )
}