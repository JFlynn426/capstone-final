import React, { Component } from 'react'
import classNames from 'classnames'
import Dropzone from 'react-dropzone'
import uploadicon from './backgrounds/cloud-upload-1.png'
import axios from 'axios'

class PhotoUpload extends Component {
  state = {
    title: '',
    description: '',
    image: uploadicon
  }
  onDrop = files => {
    const form = new FormData()
    form.append('file', files[0])
    console.log(files)

    axios
      .post('/api/image', form, {
        headers: {
          'content-type': 'multipart/form-data',
          accept: 'application/json'
        }
      })
      .then(resp => {
        console.log({ resp })
        this.setState({
          image: resp.data.secure_url
        })
      })
  }
  updateTitle = event => {
    this.setState({
      title: event.target.value
    })
  }
  updateDescription = event => {
    this.setState({
      description: event.target.value
    })
  }
  sendToDB = event => {
    axios
      .post('https://localhost:5001/api/Update', {
        SpeciesName: `${this.state.title}`,
        PictureInfo: `${this.state.description}`,
        ImageUrl: `${this.state.image}`
      })
      .then(
        this.setState({
          title: '',
          description: '',
          image: uploadicon
        })
      )
  }

  render() {
    return (
      <div className="App">
        <Dropzone onDrop={this.onDrop}>
          {({ getRootProps, getInputProps, isDragActive }) => {
            return (
              <div
                {...getRootProps()}
                className={classNames('dropzone', {
                  'dropzone--isActive': isDragActive
                })}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop files here...</p>
                ) : (
                  <section>
                    <img
                      className="uploadicon"
                      src={this.state.image}
                      alt="upload icon"
                    />
                    <p>
                      Drag and drop picture here or click to navigate to file.
                    </p>
                  </section>
                )}
              </div>
            )
          }}
        </Dropzone>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Species/Picture Name
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={this.updateTitle}
          />
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              Species/Picture Information
            </span>
          </div>
          <textarea
            className="form-control"
            aria-label="With textarea"
            rows="10"
            onChange={this.updateDescription}
          />
        </div>
        <button
          type="button"
          className="btn btn-success"
          onClick={this.sendToDB}
        >
          Submit to site
        </button>
      </div>
    )
  }
}

export default PhotoUpload
