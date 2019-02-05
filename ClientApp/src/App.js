import React, { Component } from 'react'
import { Route } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './components/Home'
import CategoryView from './components/CategoryView'
import PhotoView from './components/PhotoView'
import PhotoUpload from './components/PhotoUpload'
import TagView from './components/TagView'
import Categories from './components/Category'
import UploadLogin from './components/UploadLogin'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/CategoryView/:category" component={CategoryView} />
        <Route path="/TagView/:tag" component={TagView} />
        <Route path="/Categories" component={Categories} />
        <Route path="/PhotoView/:photoID" component={PhotoView} />
        <Route exact path="/PhotoUpload" component={UploadLogin} />
        <Route path="/PhotoUpload/John" component={PhotoUpload} />
      </Layout>
    )
  }
}
