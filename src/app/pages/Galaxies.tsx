import React from 'react';
import { LOADING_STATUS, ERROR_STATUS, useFetchGalaxiesInfo } from '../hooks/useFetchGalaxiesInfo';

export const Galaxies = () => {

  const { galaxies, requestStatus } = useFetchGalaxiesInfo()
  
  if (requestStatus === LOADING_STATUS) return <h1>Cargando...</h1>
  if (requestStatus === ERROR_STATUS) return <h1>Error</h1>

  return <code>{JSON.stringify(galaxies)}</code>
}