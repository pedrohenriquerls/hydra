import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class Menu extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
  };

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
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              React & Material-UI Sample Application
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
