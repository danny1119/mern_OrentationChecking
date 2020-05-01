import React, { Fragment, useState } from 'react';
import Message from './Message';
import Progress from './Progress';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState( '' );
  const [filename, setFilename] = useState( 'Choose File' );
  const [uploadedFile, setUploadedFile] = useState( {} );
  const [message, setMessage] = useState( '' );
  const [uploadPercentage, setUploadPercentage] = useState( 0 );

  const onChange = e => {
    setFile( e.target.files[ 0 ] );
    setFilename( e.target.files[ 0 ].name );
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append( 'file', file );

    try {
      const res = await axios.post( '/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage( parseInt( Math.round( (progressEvent.loaded * 100) / progressEvent.total ) ) );
          setTimeout( () => setUploadPercentage( 0 ), 10000 );
        }
      } );

      const {fileName, filePath} = res.data;
      setUploadedFile( {
        fileName,
        filePath
      } );
      setMessage( 'File uploaded' );
    } catch (err) {
      if ( err.response.status === 500 ) {
        setMessage( 'There was a problem with he server' );
      } else {
        setMessage( err.response.data.msg );
      }
    }
  }

  return (
  <Fragment>
    { message ? <Message msg={ message } /> : null }
    <form onSubmit={ onSubmit }>
      <div class="custom-file">
        <input type="file"
               class="custom-file-input"
               id="customFile"
               onChange={ onChange } />
        <label class="custom-file-label" for="customFile">
          Choose file
        </label>
        <label className='custom-file-label' htmlFor='customFile'>
            {filename}
        </label>
      </div>
      <br/>
      <br/>
      <Progress percentage={ uploadPercentage } />
      <input type="submit"
             value="Upload"
             className="btn btn-primary btn-block mt-4" />
    </form>
  </Fragment>
  );
};

export default FileUpload;
