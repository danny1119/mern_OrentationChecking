import React, { useState} from 'react';
import MaterialTable from 'material-table';

export default function Table() {
  // const obj = {}
  // d3.csv(file)
  //   .then(el => {
  //       obj.panther_id= el[0].panther_id;
  //         obj.first_name= el[0].first_name;
  //         obj.last_name= el[0].last_name;
  //         obj.department= el[0].department;
  //         obj.level= el[0].level;
  //         obj.campus= el[0].campus;
  //         obj.degree= el[0].degree;
  //         obj.email= el[0].email;
  //         obj.college= el[0].college;
  //         obj.year= el[0].year;
  //         obj.check_in= el[0].check_in;
  //   })

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
    //     d3.csv(file)
    // .then(el => {
    //       const panther_id= el[0].panther_id;
    //       const first_name= el[0].first_name;
    //       const last_name= el[0].last_name;
    //       const department= el[0].department;
    //       const level= el[0].level;
    //       const campus= el[0].campus;
    //       const degree= el[0].degree;
    //       const email= el[0].email;
    //       const college= el[0].college;
    //       const year= el[0].year;
    //       const check_in= el[0].check_in;
    // });
    //   panther_id: panther_id,
    //     first_name: first_name,
    //     last_name: last_name,
    //     department: department,
    //     level: level,
    //     campus: campus,
    //     degree: degree,
    //     email: email,
    //     college: college,
    //     year: year,
    //     check_in: check_in,



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


// const obj = {};
// d3.csv(file)
//     .then(el => {
//        obj.panther_id= el[0].panther_id;
//           obj.first_name= el[0].first_name;
//           obj.last_name= el[0].last_name;
//           obj.department= el[0].department;
//           obj.level= el[0].level;
//           obj.campus= el[0].campus;
//           obj.degree= el[0].degree;
//           obj.email= el[0].email;
//           obj.college= el[0].college;
//           obj.year= el[0].year;
//           obj.check_in= el[0].check_in;
    
//     })

// useEffect(() => {
//   setState({
//     columns: [
//       {
//         title: 'PantherId',
//         field: 'panther_id'
//       },
//       {
//         title: 'First Name',
//         field: 'first_name'
//       },
//       {
//         title: 'Last Name',
//         field: 'last_name',
//       },
//       {
//         title: 'Department',
//         field: 'department',
//       },
//       {
//         title: 'Level',
//         field: 'level'
//       },
//       {
//         title: 'Campus',
//         field: 'campus',
//       },
//       {
//         title: 'Degree',
//         field: 'degree',
//       },
//       {
//         title: 'Email',
//         field: 'email',
//       },
//       {
//         title: 'College',
//         field: 'college',
//       },
//       {
//         title: 'Year',
//         field: 'year',
//       },
//       {
//         title: 'Check in ',
//         field: 'check_in',
//       },
//     ],
//     data: obj
//   })
// },[])


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
