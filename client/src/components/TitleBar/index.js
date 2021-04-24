import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function TitleBar({ text }) {

  return (
    <div className={styles.root}>
      <h4> {text} </h4>
    </div>
  )
}

TitleBar.propTypes = {
  text: PropTypes.string.isRequired
}

export default TitleBar;

