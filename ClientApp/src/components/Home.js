import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Example from './Carousel'

export class Home extends Component {
  static displayName = Home.name

  render() {
    return (
      <div className="App">
        <div className="carouselCont">
          <Example className="carouselCont" />
        </div>
        <Link to="/FloridaPhotos">
          <h2>Florida Photography</h2>
        </Link>
        <Link to="/NorthEastPhotos">
          <h2>North East Photography</h2>
        </Link>
        <Link to="/TravelLandscapePhotos">
          <h2>Travel/Landscape Photography</h2>
        </Link>
      </div>
    )
  }
}
