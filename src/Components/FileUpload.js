import React, { useState } from 'react';
import DisplayImage from './DisplayImage';

const FileUpload = () => {
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'uploadImages')
    setLoading(true)
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dcbdpbzd2/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()
    setImage(file.secure_url)
    setLoading(false)
  }
  console.log(JSON.stringify(image))
  const handleAddImage=()=>{
    fetch('http://localhost:5000/addImage',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body:JSON.stringify({image})
    })
    .catch(error => console.log('Authorization failed : ' + error.message));
  }
    return (
        <div className="App">
            <h1>Upload Image</h1>
            <input
            type="file"
            name="file"
            placeholder="Upload an image"
            onChange={uploadImage}
            />
            {loading ? (
            <h3>Loading...</h3>
            ) : (
          
              <button onClick={handleAddImage}>Send Image</button>
            )}
      </div>
    );
};

export default FileUpload;