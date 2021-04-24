import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import Button from '../Button';

function EditTodo({ handleSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

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
  handleSubmit: PropTypes.func.isRequired,
};

export default EditTodo;

