import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import VerticalTabs from './verticalTabs';
import TabPanel from './tabPanel';

const layoutStyle = makeStyles(theme => ({
  root: {
    height: "100%",
  },
  content: {
    height: '100%',
    widht: '100%',
    margin: 0,
    padding: '0 !important'
  },
  list: {
    padding: '0px !important',
    width: 85,
    maxWidth: 85,
    backgroundColor: 'transparent',
  },
  paper: {
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

function Layout() {
  const classes = layoutStyle();
  const [value, setValue] = React.useState(0);

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="stretch"
      spacing={1}
      className={classes.root}
    >
      <Grid item xs={2} className={classes.list}>
        <VerticalTabs value={value} setValue={setValue}/>
      </Grid>
      <Grid item xs className={classes.content}>
        <TabPanel index={0} className={classes.content} value={value}/>
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
    return (<Layout/>);
  }
}
