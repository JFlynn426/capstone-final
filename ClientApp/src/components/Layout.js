import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { NavMenu } from './NavMenu'
import { stack as Menu } from 'react-burger-menu'
export class Layout extends Component {
  static displayName = Layout.name
  showSettings(event) {
    event.preventDefault()
  }

  render() {
    return (
      <div className="background">
        <Menu>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="CategoryView" className="menu-item" href="/CategoryView">
            Category View
          </a>
          <a id="PhotoView" className="menu-item" href="/PhotoView">
            Photo View
          </a>
          <a className="menu-item--small" href="/PhotoUpload">
            Photo Upload
          </a>
        </Menu>
        <header className="title">
          <h1>John Flynn Photography</h1>
        </header>
        <div>{this.props.children}</div>
      </div>
    )
  }
}
