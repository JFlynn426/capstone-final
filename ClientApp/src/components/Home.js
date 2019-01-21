import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Example from './Carousel'
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
        <div className="Navs">
          <section>
            {this.state.categoryInfo.map(cats => {
              return (
                <Link to={`/${cats.place}`}>
                  <h2>{cats.place}</h2>
                </Link>
              )
            })}
          </section>
          <section className="tags">
            {this.state.tagInfo.map(tags => {
              return (
                <Link to={`/${tags.tags}`}>
                  <h2>{tags.tags}</h2>
                </Link>
              )
            })}
          </section>
        </div>
      </div>
    )
  }
}
