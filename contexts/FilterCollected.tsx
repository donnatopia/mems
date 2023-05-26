import React, { createContext, useContext, useState } from 'react';

interface MapFilterProps {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  filterOptions: Array<string>;
  getNumOfSelectedPlaces: (collected: number, not_collected: number) => number;
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
    'All',
    'Collected', // status: 1
    'Not Collected' // status: -1, 0
  ]
  const [selected, setSelected] = useState(0);

  const getNumOfSelectedPlaces = (collected: number, not_collected: number): number => {
    if (selected === 0) {
      return collected + not_collected;
    } else if (selected === 1) {
      return collected;
    } else {
      return not_collected;
    }
  }

  const value = { selected, setSelected, filterOptions, getNumOfSelectedPlaces };

  return (
    <MapFilterContext.Provider value={value}>
      { children }
    </MapFilterContext.Provider>
  )
}