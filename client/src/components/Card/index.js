import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import Button from '../Button';

function Card({title, description}) {
  return (
    <div className={styles.cardRoot}>
      <h3 className={styles.title}> {title} </h3>

      <div className={styles.descriptionWrapper}>
        <p className={styles.description}> {description} </p>
      </div>

      <div className={styles.buttonWrapper}>
        <Button text="Edit" />
        <Button text="Delete" variant="secondary"/>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}
Card.defaultProps = {
  description: 'Some description to indicate that a certain todo element has been added for no specific reason whatsoever. \
  Some description to indicate that a certain todo element has been added for no specific reason whatsoever. \
  Some description to indicate that a certain todo element has been added for no specific reason whatsoever.'
}

export default Card;

