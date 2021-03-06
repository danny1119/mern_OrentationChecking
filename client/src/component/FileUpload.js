import React, { Fragment, useState } from 'react';
import Progress from './Progress';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState( '' );
  const [filename, setFilename] = useState( 'Choose File' );
  const [uploadedFile, setUploadedFile] = useState( {} );
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
      const res = await axios.post( 'http://localhost:5000/api/students/csvimport', formData, {
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

    } catch (err) {
      console.log(err);
    }
  }


  return (
  <Fragment>
    <Container>
      <form onSubmit={ onSubmit }>
        <div className="custom-file">
          <input type="file"
                 className="custom-file-input"
                 id="customFile"
                 onChange={ onChange } />
          <label className="custom-file-label" htmlFor="customFile">
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
    </Container>
  </Fragment>
  );
};

export default FileUpload;
