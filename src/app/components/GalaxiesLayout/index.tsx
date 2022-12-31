import React from 'react';
import { GalaxiesProps } from './types'

export const GalaxiesLayout = ({galaxies}: GalaxiesProps)=> {
  return (
    <code>
      {JSON.stringify(galaxies)}
    </code>
  )
}