import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function Button({text, variant, ...rest}) {
  const buttonClass = variant === 'primary' ? styles.primaryButton : styles.secondaryButton
  return (
    <button className={buttonClass} {...rest}>
      <p className={styles.text}> {text} </p>
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string,
  rest: PropTypes.objectOf(PropTypes.any),
}
Button.defaultProps = {
  variant: 'primary',
  rest: {},
}

export default Button;

