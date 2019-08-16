import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function VerticalTabs({value, setValue}) {
  const classes = useStyles();

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        >
        <Tab icon={        <ItemCard/>} />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
      </Tabs>
    </div>
  );
}

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
    <CardMedia
      className={classes.card}
      component="img"
      alt="Slack"
      height="60"
      image="https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png"
      title="Slack"
      />
  );
}

const layoutStyle = makeStyles(theme => ({
  root: {
    height: "100%",

  },
  content: {
    backgroundColor: 'red',
    margin: 0,
    padding: 0
  },
  list: {
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
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
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
