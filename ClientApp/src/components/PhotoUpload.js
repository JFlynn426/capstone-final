import React, { Component } from 'react'
import classNames from 'classnames'
import Dropzone from 'react-dropzone'
import uploadicon from './backgrounds/cloud-upload-1.png'

class PhotoUpload extends Component {
  state = {
    title: '',
    description: ''
  }
  onDrop = (acceptedFiles, rejectedFiles) => {}
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

  render() {
    return (
      <div>
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
                      src={uploadicon}
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
        <section className="UploadInputs">
          <p className="inputtext" onChange={this.updateTitle}>
            Species/Picture Name
          </p>
          <input type="text" />
        </section>
        <p className="inputtext" onChange={this.updateDescription}>
          Species/Picture Information
        </p>
        <textarea rows="8" cols="100" />
      </div>
    )
  }
}

export default PhotoUpload
