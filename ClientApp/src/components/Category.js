import React, { Component } from 'react'
import axios from 'axios'

class Category extends Component {
  state = {
    database: [],
    Categories: [],
    ImageUrls: []
  }
  componentDidMount = () => {
    this.loadInfo()
  }
  loadInfo = () => {
    axios.get('/api/Update').then(resp => {
      console.log({ resp })
      this.setState({
        database: resp.data
      })
    })
  }
  render() {
    return <div />
  }
}

export default Category
