import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: '60 !important',
    minHeight: 60
  },
  tab: {
    width: 87,
    height: 76,
    minWidth: '76px !important',
    minHeight: '76px !important',
    maxHeight: '76px !important'
  },
  card: {
    maxWidth: 60,
    maxHeight: 60,
    minWidth: 60,
    minHeight: 60,
    height: 60,
    width: 60,
  },
}));

function ItemCard({image, title}) {
  const classes = useStyles();
  return (
    <CardMedia
      className={classes.card}
      component="img"
      alt={title}
      height="60"
      image={image}
      title={title}
      />
  );
}

function fetchIconSrc(icon) {
  return `https://img.icons8.com/dusk/96/000000/${icon}.png`
}

function tabIcon({ icon, image, title, id }) {
  const classes = useStyles();

  return (
    <Tab
      key={id}
      icon={<ItemCard image={image || fetchIconSrc(icon)} title={title}/>}
      className={classes.tab}
      />
  );
}

export default function VerticalTabs({value, setValue, itens}) {
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
        {itens.map((item) => tabIcon(item))}
      </Tabs>
    </div>
  );
}
