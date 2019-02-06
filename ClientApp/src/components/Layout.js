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
import axios from 'axios'
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
        <div>
          <Navbar color="dark" light expand="md">
            <a className="navtitle" href="/">
              <h1>John Flynn Photography</h1>
            </a>
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
