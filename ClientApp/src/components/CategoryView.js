import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class CategoryView extends Component {
  state = {
    search: []
  }
  componentDidMount() {
    this.loadInfo()
  }
  loadInfo = () => {
    axios.get('https://localhost:5001/api/Update').then(resp => {
      this.setState({
        search: resp.data
      })
    })
  }
  render() {
    return (
      <div className="CatView">
        {this.state.search.map(image => {
          return (
            <Link
              key={image.id}
              to={`/PhotoView/${image.id}`}
              className="ImageContainer"
            >
              <img className="catImage" src={image.imageUrl} />
              <section className="nameplate">{image.speciesName}</section>
            </Link>
          )
        })}
      </div>
    )
  }
}

export default CategoryView
