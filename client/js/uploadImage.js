import React from 'react';
import Dropzone from 'react-dropzone'


const handleDropRejected = (...args) => console.log('reject', args)

export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = { preview: null }
    this.handleDrop = this.handleDrop.bind(this)
  }

  handleDrop(files) {
    this.setState({ preview: files["0"].preview  })
    const formData = new FormData(); 
    files.forEach(file => { 
      formData.append('file',file) 
    })
     console.log(' outerererer', formData)
     this.props.uploadImages(formData)
  }
  
  render() {
    const { preview } = this.state
    
    return (    
      <section>
        <Dropzone onDrop={ this.handleDrop } accept="image/jpg, image/jpeg" multiple={ false } onDropRejected={ handleDropRejected }>
          Drag a file here or click to upload.
        </Dropzone>
        { preview &&
        <img src={ preview } alt="image preview" />
        }
      </section>
    )
  }
}