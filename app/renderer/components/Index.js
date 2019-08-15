import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from './Menu';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';

const cardStyles = makeStyles(theme => ({
  card: {
    maxWidth: 60,
    maxHeight: 60,
    height: 60,
    width: 60,
    margin: theme.spacing(1),
  },
}));

function ItemCard() {
  const classes = cardStyles();
  return (
    <Card className={classes.card} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Slack"
          height="60"
          image="https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png"
          title="Slack"
        />
      </CardActionArea>
    </Card>
  );
}

const layoutStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'blue',
  },
  content: {
    backgroundColor: 'red'
  },
  list: {
    width: 85,
    maxWidth: 85,
    backgroundColor: 'black',
  },
  paper: {
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

function Layout() {
  const classes = layoutStyle();
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="stretch"
      spacing={1}
      >
      <Grid item xs={2} className={classes.list}>
        <ItemCard/>
      </Grid>
      <Grid item xs className={classes.content}>

      </Grid>
    </Grid>
  )
}

export default class Index extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

  }


  state = {
    username: '',
  };

  handleLogin = () => {
    this.props.onLogin({
      username: this.state.username,
      loggedIn: true,
    });
  };

  handleChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Layout/>
      </div>
    );
  }
}
