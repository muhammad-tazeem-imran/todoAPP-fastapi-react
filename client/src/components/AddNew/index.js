import React, { useState } from 'react';

import EditTodo from '../EditTodo';

import styles from './styles.module.scss';

function AddNewCard() {
  const [showInput, setShowInput] = useState(false);

  const rootStyles = !showInput ? styles.emptyRoot : styles.root;

  const onSubmit = () => setShowInput(false);

  const onClick = () => {
    if (!showInput) {
      setShowInput(true)
      return;
    }
  };

  return (
    <div className={rootStyles} onClick={onClick}>
      {showInput ? (
        <EditTodo onSubmit={onSubmit} />
      ) : (
        <div className={styles.description}> + Add a new task </div>
      )}
    </div>
  )
}

AddNewCard.propTypes = {
}
AddNewCard.defaultProps = {
}

export default AddNewCard;

