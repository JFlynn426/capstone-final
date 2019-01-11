import React, { Component } from 'react'
import { Route } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './components/Home'
import CategoryView from './components/CategoryView'
import NorthEastPhotos from './components/NorthEastPhotos'
import TravelLandscapePhotos from './components/TravelLandscapePhotos'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/CategoryView" component={CategoryView} />
        <Route path="/NorthEastPhotos" component={NorthEastPhotos} />
        <Route
          path="/TravelLandscapePhotos"
          component={TravelLandscapePhotos}
        />
      </Layout>
    )
  }
}
