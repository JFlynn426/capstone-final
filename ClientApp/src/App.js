import React, { Component } from 'react'
import { Route } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './components/Home'
import CategoryView from './components/CategoryView'
import PhotoView from './components/PhotoView'
import PhotoUpload from './components/PhotoUpload'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/CategoryView" component={CategoryView} />
        <Route path="/PhotoView/:photoID" component={PhotoView} />
        <Route path="/PhotoUpload" component={PhotoUpload} />
      </Layout>
    )
  }
}
