import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Example from './Carousel'
import { Nav, NavItem, NavLink } from 'reactstrap'
import axios from 'axios'
export class Home extends Component {
  static displayName = Home.name
  constructor(props) {
    super(props)
    this.state = {
      categoryInfo: [],
      tagInfo: []
    }
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
      <div className="App">
        <div className="carouselCont">
          <Example className="carouselCont" />
        </div>
        <div>
          <Nav className="bottomnav">
            {this.state.categoryInfo.map(cat => {
              return (
                <NavItem className="">
                  <NavLink href={`/CategoryView/${cat.place}`}>
                    {cat.place}
                  </NavLink>
                </NavItem>
              )
            })}
            {this.state.tagInfo.map(tag => {
              return (
                <NavItem>
                  <NavLink href={`/TagView/${tag.tags}`}>{tag.tags}</NavLink>
                </NavItem>
              )
            })}
          </Nav>
        </div>
      </div>
    )
  }
}
