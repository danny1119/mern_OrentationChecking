import React from 'react';
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
  const [showResults, setShowResults] = React.useState( false )
  // const onClick = () => setShowResults( true )
    
  function toggle() {
    setShowResults(wasShowed => !wasShowed);
  }

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
          <Content/>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={10}>
         <Grid sm={12} md={6}>
         <CardEvent onClick = {toggle}/>
        </Grid>
        <Grid sm={12} md={6}>
         <CardEvent onClick = {toggle}/>
        </Grid>
        </Grid>
      </Container>
        { showResults && <Table /> }
        
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
