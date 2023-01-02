import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GalaxiesLayout } from '../components/GalaxiesLayout';
import { LoadingSpinner } from '../components/LoadingSpinner';

const GalaxiesPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 3rem;
  width: calc(100% - 6rem);
`

export const Galaxies = () => {

  const [galaxies, setGalaxies] = useState([])

  useEffect(() => {
    setGalaxies(window.__INITIAL_PROPS__.galaxies)
    delete window.__INITIAL_PROPS__
  }, [])

  const renderLayout = () => {
    if (galaxies?.length === 0) return <LoadingSpinner />
    return <GalaxiesLayout galaxies={galaxies} />
  }

  return (
    <GalaxiesPageWrapper>
      <h1>Galaxias</h1>
      {renderLayout()}
    </GalaxiesPageWrapper>
  );
}

Galaxies.defaultProps = {
  galaxies: []
}