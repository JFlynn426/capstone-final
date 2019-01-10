import React, { Component } from 'react'
import burrowingowlpounce from './FloridaPhotos/BurrowingOwlPounce.jpg'
import oystercatchercalling from './FloridaPhotos/OystercatcherCalling.jpg'
import barredowlportrait from './NortheastPhotos/BarredOwlPortrait.jpg'
import snowyowlraiseup from './NortheastPhotos/SnowOwlRaiseUp.jpg'
import baldeaglebanking from './NortheastPhotos/BaldEagleBanking.jpg'
import sunset from './TravelLandscape/Sunset.jpg'
import quail from './TravelLandscape/Quail.jpg'
import redeyed from './TravelLandscape/RedEyedTreeFrog.jpg'
import whistling from './FloridaPhotos/WhistlingDuckFlight.jpg'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export class Home extends Component {
  static displayName = Home.name

  render() {
    return (
      <Router>
        <div className="App">
          <section>
            <Link to="/FloridaPhotos">
              <h2>Florida Photography</h2>
              <section className="ImageContainer">
                <img className="catImage" src={burrowingowlpounce} />
                <img className="catImage" src={oystercatchercalling} />
                <img className="catImage" src={whistling} />
              </section>
            </Link>
          </section>
          <section>
            <Link to="/NorthEastPhotos">
              <h2>North East Photography</h2>
              <section className="ImageContainer">
                <img className="catImage" src={barredowlportrait} />
                <img className="catImage" src={snowyowlraiseup} />
                <img className="catImage" src={baldeaglebanking} />
              </section>
            </Link>
          </section>
          <section>
            <Link to="/TravelLandscapePhotos">
              <h2>Travel/Landscape Photography</h2>
              <section className="ImageContainer">
                <img className="catImage" src={sunset} />
                <img className="catImage" src={quail} />
                <img className="catImage" src={redeyed} />
              </section>
            </Link>
          </section>
        </div>
      </Router>
    )
  }
}
