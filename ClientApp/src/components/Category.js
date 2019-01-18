import React, { Component } from 'react'
import axios from 'axios'

class Category extends Component {
  state = {
    SpeciesName: '',
    PictureInfo: '',
    ImageUrl: ''
  }
  componentDidMount = () => {
    this.getCategories()
    this.getTags()
    this.loadInfo()
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
  loadInfo = () => {
    axios.get('/api/Update').then(resp => {
      console.log({ resp })
      this.setState({})
    })
  }
  render() {
    return <div />
  }
}

export default Category
