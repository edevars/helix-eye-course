import React from 'react';
import { StyledHero } from './styles'

const LOGO_IMAGE = "https://i.imgur.com/w9Smf8E.png"

export const Hero = () => {
  return (
    <StyledHero>
      <h1>helix eye</h1>
      <img src={LOGO_IMAGE} alt="helix eye" />
      <p>
        Toda el conocimiento del espacio en un solo lugar.
      </p>
    </StyledHero>
  )
}