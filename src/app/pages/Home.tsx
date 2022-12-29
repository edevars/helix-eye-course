import React from 'react';
import { Hero } from '../components/Hero';
import { AstronautSection } from '../components/AstronautSection';
import { HighlightedContent } from '../components/HighlightedContent';

export const Home = () => (
  <main>
    <Hero />
    <AstronautSection />
    <HighlightedContent />
  </main>
)