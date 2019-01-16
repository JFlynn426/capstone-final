import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'
import baldeaglebanking from './NortheastPhotos/BaldEagleBanking.jpg'
import burrowingowlpounce from './FloridaPhotos/BurrowingOwlPounce.jpg'
import oystercatchercalling from './FloridaPhotos/OystercatcherCalling.jpg'
import barredowlportrait from './NortheastPhotos/BarredOwlPortrait.jpg'
import snowyowlraiseup from './NortheastPhotos/SnowOwlRaiseUp.jpg'
import sunset from './TravelLandscape/Sunset.jpg'
import quail from './TravelLandscape/Quail.jpg'
import redeyed from './TravelLandscape/RedEyedTreeFrog.jpg'
import whistling from './FloridaPhotos/WhistlingDuckFlight.jpg'

const items = [
  {
    src: baldeaglebanking,
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: burrowingowlpounce,
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: barredowlportrait,
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: snowyowlraiseup,
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: sunset,
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: quail,
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: redeyed,
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: whistling,
    altText: '',
    caption: '',
    header: ''
  }
]

const Example = () => <UncontrolledCarousel items={items} />

export default Example
