import React, { createContext, useContext } from "react";

interface ContextProps {}

export const LocationsContext = createContext<ContextProps>({} as ContextProps);

export function useLocations() {
  return useContext(LocationsContext);
}

interface ChildrenProps {
  children: JSX.Element | JSX.Element[];
}

export function LocationsProvider({ children }: ChildrenProps){
  const value = {}

  return (
    <LocationsContext.Provider value={value}>
      { children }
    </LocationsContext.Provider>
  )
}