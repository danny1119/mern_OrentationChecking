import React, {useEffect, useState} from 'react';
import { csv } from 'd3';
import MaterialTable from 'material-table';
import CSVReader from 'react-csv-reader'

import * as d3 from 'd3';
import file from './../fileupload/test.csv';

export default function Table() {
  const [state, setState] = useState( {
    columns: [
      {
        title: 'PantherId',
        field: 'panther_id'
      },
      {
        title: 'First Name',
        field: 'first_name'
      },
      {
        title: 'Last Name',
        field: 'last_name',
      },
      {
        title: 'Department',
        field: 'department',
      },
      {
        title: 'Level',
        field: 'level'
      },
      {
        title: 'Campus',
        field: 'campus',
      },
      {
        title: 'Degree',
        field: 'degree',
      },
      {
        title: 'Email',
        field: 'email',
      },
      {
        title: 'College',
        field: 'college',
      },
      {
        title: 'Year',
        field: 'year',
      },
      {
        title: 'Check in ',
        field: 'check_in',
      },
    ],
    data: [
      {
        panther_id: '900915662',
        first_name: 'An',
        last_name: 'Nguyen',
        department: 'CS',
        level: 'Bachelor',
        campus: 'ATL',
        degree: 'Bachelor',
        email: 'ntta239@gmail.com',
        college: 'GSU',
        year: '4',
        check_in: 1,

      },
      {
        panther_id: '900915662',
        first_name: 'An',
        last_name: 'Nguyen',
        department: 'CS',
        level: 'Bachelor',
        campus: 'ATL',
        degree: 'Bachelor',
        email: 'ntta239@gmail.com',
        college: 'GSU',
        year: '4',
        check_in: 1,

      },
      {
        panther_id: '900915662',
        first_name: 'An',
        last_name: 'Nguyen',
        department: 'CS',
        level: 'Bachelor',
        campus: 'ATL',
        degree: 'Bachelor',
        email: 'ntta239@gmail.com',
        college: 'GSU',
        year: '4',
        check_in: 1,

      },
      {
        panther_id: '900915662',
        first_name: 'An',
        last_name: 'Nguyen',
        department: 'CS',
        level: 'Bachelor',
        campus: 'ATL',
        degree: 'Bachelor',
        email: 'ntta239@gmail.com',
        college: 'GSU',
        year: '4',
        check_in: 1,

      },
    ],
  } );

  // d3.csv(data, data => {
  //   setState ({
  //     data.forEach(element => {
  //       'panther_id': element.panther_id,
  //       'first_name': element.first_name,
  //       'last_name': element.last_name,
  //       'department': element.department,
  //       'level': element.level,
  //       'campus': element.campus,
  //       'degree': element.degree,
  //       'email': element.email,
  //       'college': element.college,
  //       'year': element.year,
  //       'check_in': element.check_in,
  //     })
  //   })
  // });
   
  return (
  <MaterialTable title="Student table"
                 columns={ state.columns }
                 data={ state.data }
                 options={{
                    exportButton: true
                 }}
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
