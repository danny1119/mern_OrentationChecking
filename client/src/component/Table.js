import React from 'react';

import MaterialTable from 'material-table';

export default function Table() {
  const [state, setState] = React.useState( {
    columns: [
      {
        title: 'Name',
        field: 'name'
      },
      {
        title: 'Surname',
        field: 'surname'
      },
      {
        title: 'Birth Year',
        field: 'birthYear',
      },
      {
        title: 'Attending',
        field: 'attendance',
      },
    ],
    data: [
      {
        name: 'Thien An',
        surname: 'Nguyen',
        birthYear: 1996,
        attendance: 'no'
      },
      {
        name: 'Binh',
        surname: 'Trinh',
        birthYear: 2017,
        attendance: 'yes',
      },
      {
        name: 'Chung',
        surname: 'Mai',
        birthYear: 2016,
        attendance: 'yes',
      },
      {
        name: 'Danh',
        surname: 'Nguyen',
        birthYear: 1111,
        attendance: 'yes',
      },
      {
        name: 'Yen',
        surname: 'Vo',
        birthYear: 2015,
        attendance: 'yes',
      },
      {
        name: 'Ngoc',
        surname: 'Truong',
        birthYear: 2017,
        attendance: 'yes',
      },
    ],
  } );

  return (
  <MaterialTable title="Student table"
                 columns={ state.columns }
                 data={ state.data }
                 editable={ { 
                 onRowUpdate: (newData, oldData) =>
                 new Promise((resolve) => {
                   setTimeout(() => {
                     resolve();
                     if (oldData) {
                       setState((prevState) => {
                         const data = [...prevState.data];
                         data[data.indexOf(oldData)] = newData;
                         return { ...prevState, data };
                       });
                     }
                   }, 600);
                 }),
  }}
/>
  );
}
