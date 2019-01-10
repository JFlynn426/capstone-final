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
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
          <a onClick={this.showSettings} className="menu-item--small" href="">
            Settings
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
