import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

function TabPanel({value, index, className, src, id}) {
  return (
    <Box
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className={className}
    >
      <webview
        className={className}
        src={src}
        enableremotemodule="false"
        partition={`persist:${id}`}
      />
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  src: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default TabPanel;
