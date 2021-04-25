import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import * as actions from '../../store/actions';
import styles from './styles.module.scss';
import Button from '../Button';

function EditTodo({ id, currentTitle, currentDescription, onSubmit }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(currentTitle);
  const [description, setDescription] = useState(currentDescription);

  const handleSubmit = (event) => {
    const actionToDispatch = id
      ? actions.updateTodos({id, title, description})
      : actions.addTodos({title, description});
    dispatch(actionToDispatch);
    onSubmit();
    event.preventDefault();
  }

  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit}>
        <label>
          <h4 className={styles.inputLabel}>Title</h4>
          <input
            className={styles.inputField}
            required
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          <h4 className={styles.inputLabel}>Description</h4>
          <textarea
            className={`${styles.inputField} ${styles.inputMultiline}`}
            required
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)} />
        </label>
        <Button text="Done" type="submit"/>
      </form>
    </div>
  )
}

EditTodo.propTypes = {
  id: PropTypes.string,
  currentTitle: PropTypes.string,
  currentDescription: PropTypes.string,
  onSubmit: PropTypes.func,
};

EditTodo.defaultProps = {
  id: undefined,
  currentTitle: '',
  currentDescription: '',
  onSubmit: () => {},
}

export default EditTodo;

