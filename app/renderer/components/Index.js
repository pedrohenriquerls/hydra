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

function Layout({itens: itens}) {
  const classes = layoutStyle();
  const [value, setValue] = React.useState(0);

  const tabsContent = itens.map((item, index) => {
    return (<TabPanel
      key={index}
      index={index}
      className={classes.content}
      src={item.src}
      id={item.id}
      value={value}
    />)
  });

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
        <VerticalTabs
          value={value}
          setValue={setValue}
          itens={itens}
        />
      </Grid>
      <Grid item xs className={classes.content}>
        {tabsContent}
      </Grid>
    </Grid>
  )
}

Layout.propTypes = {
  itens: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }))
}

export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const itens = [{icon: 'slack', title: 'Slack', src: 'http://google.com', id: '1'}, {icon: 'slack', title: 'Slack', src: 'http://trello.com', id: '2'}];
    return (<Layout itens={itens}/>);
  }
}
