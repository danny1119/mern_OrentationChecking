import React , { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import School from '@material-ui/icons/School';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import CardEvent from './component/Card';
import Content from './component/Content';
import Table from './component/Table';

import * as d3 from 'd3';
import file from './fileupload/test.csv';

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
    data: [
    {
      panther_id: '900915662',
      first_name: 'Ngoc',
      last_name: 'Truong',
      department: 'CS',
      level: 'PHD',
      campus: 'ATL',
      degree: 'Bachelor',
      email: 'ntruong@gmail.com',
      college: 'GSU',
      year: '2',
      check_in: 1,

    },
    {
      panther_id: '900915663',
      first_name: 'Binh',
      last_name: 'Nguyen',
      department: 'CS',
      level: 'Bachelor',
      campus: 'ATL',
      degree: 'Bachelor',
      email: 'abc@gmail.com',
      college: 'Dunwoody',
      year: '3',
      check_in: 1,

    },
    {
      panther_id: '900915664',
      first_name: 'An',
      last_name: 'Nguyen',
      department: 'Chemistry',
      level: 'Master',
      campus: 'ATL',
      degree: 'Bachelor',
      email: 'ntta239@gmail.com',
      college: 'GSU',
      year: '4',
      check_in: 1,

    },
    {
      panther_id: '900915665',
      first_name: 'Tu',
      last_name: 'Le',
      department: 'Physics',
      level: 'Master',
      campus: 'ATL',
      degree: 'Bachelor',
      email: 'tu222@gmail.com',
      college: 'GSU',
      year: '3',
      check_in: 0,

    },
  ],
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

 
  const [showResults, setShowResults] = React.useState( false )
  
  function toggle() {
    setShowResults( wasShowed => !wasShowed );
  }

  useEffect(async () => {
    const res = await d3.csv(file)
     setState((prev) =>  ({
      ...prev,
      data: [...res]
     }));
  }, []);
    
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
          <Grid sm={ 12 } md={ 6 }>
            <CardEvent onClick={ toggle } />
          </Grid>
          <Grid sm={ 12 } md={ 6 }>
            <CardEvent onClick={ toggle } />
          </Grid>
        </Grid>
      </Container>
      { showResults && 
        <Table 
          columns = {state.columns}
          data = {state.data}
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
