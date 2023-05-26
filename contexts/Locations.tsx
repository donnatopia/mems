import React, { createContext, useContext, useEffect, useState } from "react";
import { MapProps } from "../types";
import { get } from "../utilities/axios";

interface ContextProps {
  selectedMap: MapProps;
  setSelectedMapID: React.Dispatch<React.SetStateAction<number>>;
}

interface ChildrenProps {
  children: JSX.Element | JSX.Element[];
}
export const LocationsContext = createContext<ContextProps>({} as ContextProps);

export function useLocations() {
  return useContext(LocationsContext);
}

export function LocationsProvider({ children }: ChildrenProps){
  const [selectedMapID, setSelectedMapID] = useState(1);
  const [allMaps, setAllMaps] = useState([] as MapProps[]);
  const [selectedMap, setSelectedMap] = useState({} as MapProps);

  useEffect(() => {
    get('/api/guides/-1')
      .then(({ data }) => setAllMaps(data))
      .catch((err) => console.log('error loading all maps', err));
  }, []);

  useEffect(() => {
    allMaps.forEach((map) => {
      if (map.map_id === selectedMapID) {
        setSelectedMap(map);
      }
    })
  })


  const value = {
    selectedMap,
    setSelectedMapID,
  }

  return (
    <LocationsContext.Provider value={value}>
      { children }
    </LocationsContext.Provider>
  )
}