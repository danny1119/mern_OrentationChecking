import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';

export default function Table( props ) {
  const [gridData, setGridData] = useState( {
    data: props.data,
    columns: props.columns,
    resolve: () => {
    },
  } );

  useEffect( () => {
    gridData.resolve();
  }, [ gridData ] );

  const onRowUpdate = (newData, oldData) => new Promise( (resolve, reject) => {
    const data = [ ...gridData.data ];
    const index = data.indexOf( oldData );
    data[ index ] = newData;
    setGridData( {
      ...gridData,
      data,
      resolve
    } );
  } );
  return (
    <MaterialTable title="Student check-list"
                   columns={ gridData.columns }
                   data={ gridData.data }
                   options={ { exportButton: true } }
                   editable={ { onRowUpdate: onRowUpdate } } 

    />
  );
}
