import React, { Component } from 'react'
import { Route } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './components/Home'
import FloridaPhotos from './components/FloridaPhotos'
import NorthEastPhotos from './components/NorthEastPhotos'
import TravelLandscapePhotos from './components/TravelLandscapePhotos'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/FloridaPhotos" component={FloridaPhotos} />
        <Route path="/NorthEastPhotos" component={NorthEastPhotos} />
        <Route
          path="/TravelLandscapePhotos"
          component={TravelLandscapePhotos}
        />
      </Layout>
    )
  }
}
