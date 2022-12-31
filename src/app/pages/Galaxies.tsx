import React from 'react';
import { GalaxiesLayout } from '../components/GalaxiesLayout';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { LOADING_STATUS, ERROR_STATUS, useFetchGalaxiesInfo } from '../hooks/useFetchGalaxiesInfo';


export const Galaxies = () => {

  const { galaxies, requestStatus } = useFetchGalaxiesInfo()
  
  const renderLayout = () => {
    if (requestStatus === LOADING_STATUS) return  <LoadingSpinner />
    if (requestStatus === ERROR_STATUS) return <h1>Error</h1>
    return <GalaxiesLayout galaxies={galaxies}/>
  }

  return <>
    <h1>Galaxias</h1>
    {renderLayout()}
  </>
}