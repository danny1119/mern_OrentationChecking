import React , { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import School from '@material-ui/icons/School';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useForceUpdate from 'use-force-update';
import CardEvent from './component/Card';
import Content from './component/Content';
import Table from './component/Table';
import axios from 'axios';


import * as d3 from 'd3';
// import file from './fileupload/test.csv';

const useStyles = makeStyles( (theme) => ({
  icon: {
    marginRight: theme.spacing( 2 ),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing( 8, 0, 6 ),
  },
  heroButtons: {
    marginTop: theme.spacing( 4 ),
  },
  cardGrid: {
    paddingTop: theme.spacing( 8 ),
    paddingBottom: theme.spacing( 8 ),
  },
  footer: {
    backgroundColor: '#18181A',
    color: 'white',
    padding: theme.spacing( 5 ),
    height: '40px'
  },
}) );

const App = () => {
  const classes = useStyles();
  
  const [state, setState] = useState( {
    data: [ {} ],
    columns:[
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
  ]
});
  
  const forceUpdate = useForceUpdate();
 
  const [showResults, setShowResults] = React.useState( false )
  
  async function toggle() {
  const res = await axios.get('http://localhost:5000/api/students')
    console.log(res.data)
     setState((prev) =>  ({
      ...prev,
      data: [...res.data]
     }));
    setShowResults( wasShowed => !wasShowed );
  }
  
 // function changeStatus(id) {
 //   setState((prev) => ({
 //      ...prev,
 //      data: state.data.map(el => (el.panther_id === id ? {
 //        ...el, first_name : 'asdda'
 //      } : {...el, check_in: !el.check_in}))
 //    }))
 //    forceUpdate();
 //    toggle();
 //  }

  // useEffect(async () => {
  //   const res = await axios.get('http://localhost:5000/api/students')
  //   console.log(res.data)
  //    setState((prev) =>  ({
  //     ...prev,
  //     data: [...res.data]
  //    }));
  // }, []);

  console.log(state.data[0])
    
  return (
  <React.Fragment>
    <CssBaseline />
    <AppBar position="relative">
      <Toolbar>
        <School className={ classes.icon } />
        <Typography variant="h6"
                    color="inherit"
                    noWrap>
          Georgia State University
        </Typography>
      </Toolbar>
    </AppBar>
    <main>
      <div className={ classes.heroContent }>
        <Container maxWidth="sm">
          <Content />
        </Container>
      </div>
      <Container className={ classes.cardGrid } maxWidth="md">
        <Grid container spacing={ 10 }>
          <Grid md={ 12 }>
            <CardEvent 
            onClick={ toggle } 
            img ="https://orientation.gsu.edu/files/2019/02/orientation-home-bg-6.jpg"
            text = "Students attending orientation receive academic advisement from representatives of the University Advisement Center. Academic advisement gives students a chance to learn about the curriculum for their degree program and how to plan their first semester schedule."
            />
          </Grid>
        </Grid>
      </Container>
      { showResults && 
        <Table 
          columns = {state.columns}
          data = {state.data}
          // onStatusChange = {changeStatus}
        /> }
    </main>
    <footer className={ classes.footer }>
      <Typography variant="h6"
                  align="center"
                  gutterBottom>
        <a href="https://www.youtube.com/">Youtube link</a>
      </Typography>
    </footer>
  </React.Fragment>
  );
}

export default App;
