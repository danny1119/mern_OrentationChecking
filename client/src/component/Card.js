import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FileUpload from './FileUpload';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles( (theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',

  },
  cardGrid: {
    paddingTop: theme.spacing( 8 ),
    paddingBottom: theme.spacing( 8 ),
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}) );

export default function CardEvent(props) {
  const classes = useStyles();
  return (
  <Fragment>
    <Container>
        <Card className={ classes.card }>
          <CardMedia className={ classes.cardMedia }
                     image={props.img}
                     title="Gsu students" />
          <CardContent className={ classes.cardContent }>
            <Typography gutterBottom
                        variant="h5"
                        component="h2">
              GSU Event
            </Typography>
            <Typography>
              {props.text}
            </Typography>
          </CardContent>
          <CardActions>
            <FileUpload />
            <Button size="small"
                    color="primary"
                    onClick={ props.onClick }>
              View
            </Button>
          </CardActions>
        </Card>
        <br />
      <br />
    </Container>
  </Fragment>

  );
}
