import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import styles from './styles.module.scss';
import Button from '../Button';
import * as actions from '../../store/actions';
import EditTodo from '../EditTodo';

function Card({id, title, description}) {
  const dispatch = useDispatch();
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () => setShowEdit(true);
  const handleDelete = () => dispatch(actions.deleteTodos({ id }));
  const onSubmit = () => setShowEdit(false);

  if (showEdit) {
    return (
      <EditTodo
        id={id}
        currentTitle={title}
        currentDescription={description}
        onSubmit={onSubmit}
      />
    )
  }

  return (
    <div className={styles.cardRoot}>
      <h3 className={styles.title}> {title} </h3>

      <div className={styles.descriptionWrapper}>
        <p className={styles.description}> {description} </p>
      </div>

      <div className={styles.buttonWrapper}>
        <Button text="Edit" onClick={handleEdit}/>
        <Button text="Delete" variant="secondary" onClick={handleDelete}/>
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

