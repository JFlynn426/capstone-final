import React, { Component } from 'react'
import axios from 'axios'
import ModalImage from 'react-modal-image'
class CategoryView extends Component {
  state = {
    SpeciesName: '',
    PictureInfo: '',
    ImageUrl: ''
  }
  componentDidMount() {
    this.loadInfo()
  }
  loadInfo = () => {
    const photoID = parseInt(this.props.match.params.photoID)
    axios.get(`/api/PhotoView/${photoID}`).then(resp => {
      console.log({ resp })
      this.setState({
        SpeciesName: resp.data[0].speciesName,
        PictureInfo: resp.data[0].pictureInfo,
        ImageUrl: resp.data[0].imageUrl
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h2>{this.state.SpeciesName}</h2>
        <ModalImage
          className="photoview"
          small={this.state.ImageUrl}
          large={this.state.ImageUrl}
        />
        <h5>Click image for fullscreen</h5>
        <footer>
          <p>{this.state.PictureInfo}</p>
        </footer>
      </div>
    )
  }
}

export default CategoryView
