interface GalaxyData {
  data: {
    title: string,
    nasa_id: string,
    keywords: string[],
    media_type: string,
    description: string,
  }[],
  links: {
    href: string,
    rel: string,
    render: string,
  }[]
}

interface GalaxiesProps {
  galaxies?: GalaxyData[]
}

export { GalaxiesProps }