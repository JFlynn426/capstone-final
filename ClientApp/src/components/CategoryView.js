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

class CategoryView extends Component {
  render() {
    return (
      <div className="CatView">
        <div className="ImageContainer">
          <img className="catImage" src={burrowingowlpounce} />
          <section className="nameplate">Burrowing Owl</section>
        </div>
        <div className="ImageContainer">
          <img className="catImage" src={oystercatchercalling} />
          <section className="nameplate">Oystercatcher</section>
        </div>
        <div className="ImageContainer">
          <img className="catImage" src={whistling} />
          <section className="nameplate">Black-Bellied Whistling Duck</section>
        </div>
        <div className="ImageContainer">
          <img className="catImage" src={barredowlportrait} />
          <section className="nameplate">Barred Owl</section>
        </div>
        <div className="ImageContainer">
          <img className="catImage" src={snowyowlraiseup} />
          <section className="nameplate">Snowy Owl</section>
        </div>
        <div className="ImageContainer">
          <img className="catImage" src={baldeaglebanking} />
          <section className="nameplate">Bald Eagle</section>
        </div>
        <div className="ImageContainer">
          <img className="catImage" src={sunset} />
          <section className="nameplate">Sunset Over The Lake</section>
        </div>
        <div className="ImageContainer">
          <img className="catImage" src={quail} />
          <section className="nameplate">California Quail</section>
        </div>
        <div className="ImageContainer">
          <img className="catImage" src={redeyed} />
          <section className="nameplate">Red-Eyed Tree Frog</section>
        </div>
      </div>
    )
  }
}

export default CategoryView
