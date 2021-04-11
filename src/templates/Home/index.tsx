import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'
import { NextSeo } from 'next-seo'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show in a map the places that i went and show more informations and photo when clicked."
        // canonical="https://"
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="about" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
