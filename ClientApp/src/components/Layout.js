import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import { NavMenu } from './NavMenu'
import axios from 'axios'
import { stack as Menu } from 'react-burger-menu'
export class Layout extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      categoryInfo: [],
      tagInfo: [],
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  static displayName = Layout.name
  showSettings(event) {
    event.preventDefault()
  }
  componentDidMount = () => {
    this.getCategories()
    this.getTags()
  }
  getCategories = () => {
    axios.get('/api/cats').then(resp => {
      console.log({ resp })
      this.setState({
        categoryInfo: resp.data
      })
    })
  }
  getTags = () => {
    axios.get('/api/tags').then(resp => {
      console.log({ resp })
      this.setState({
        tagInfo: resp.data
      })
    })
  }
  render() {
    return (
      <div className="background">
        {/* <Menu>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="CategoryView" className="menu-item" href="Hawks/Eagles">
            Hawks/Eagles
          </a>
          <a id="Owls" className="menu-item" href="Owls">
            Owls
          </a>
          <a id="Small Songbirds" className="menu-item" href="Small Songbirds">
            Small Songbirds
          </a>
          <a
            id="Ducks and Waterfowl"
            className="menu-item"
            href="Ducks and Waterfowl"
          >
            Ducks and Waterfowl
          </a>
          <a
            id="Larger Misc. Birds"
            className="menu-item"
            href="Larger Misc. Birds"
          >
            Larger Misc. Birds
          </a>
          <a
            id="Non-Avian Wildlife"
            className="menu-item"
            href="Non-Avian Wildlife"
          >
            Non-Avian Wildlife
          </a>
          <a id="Shorebirds" className="menu-item" href="Shorebirds">
            Shorebirds
          </a>
          <a
            id="Northeast Photography"
            className="menu-item"
            href="Northeast Photography"
          >
            Northeast Photography
          </a>
          <a
            id="Florida Photography"
            className="menu-item"
            href="Florida Photography"
          >
            Florida Photography
          </a>
          <a
            id="Travel/Landscape Photography"
            className="menu-item"
            href="Travel/Landscape Photography"
          >
            Travel/Landscape Photography
          </a>
          <a className="menu-item--small" href="/PhotoUpload">
            Photo Upload
          </a>
        </Menu> */}
        {/* <header className="title">
          <h1>John Flynn Photography</h1> */}
        <div>
          <Navbar color="dark" light expand="md">
            <h1 className="navtitle">John Flynn Photography</h1>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Categories
                  </DropdownToggle>
                  <DropdownMenu right>
                    {this.state.categoryInfo.map(cat => {
                      return (
                        <DropdownItem href={`/CategoryView/${cat.place}`}>
                          {cat.place}
                        </DropdownItem>
                      )
                    })}
                    <DropdownItem divider />

                    {this.state.tagInfo.map(tag => {
                      return (
                        <DropdownItem href={`/TagView/${tag.tags}`}>
                          {tag.tags}
                        </DropdownItem>
                      )
                    })}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        {/* </header> */}
        <div>{this.props.children}</div>
      </div>
    )
  }
}
