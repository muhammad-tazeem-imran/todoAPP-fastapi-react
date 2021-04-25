import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from './store/actions';

import AddNewCard from './components/AddNew';
import Card from './components/Card';
import TitleBar from './components/TitleBar';

import styles from './App.module.scss'
import './theme/theme.scss';

export default function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchTodos());
  }, [])

  return (
    <div className={styles.main}>
      <TitleBar text="Todo App" />

      <div className={styles.cardList}>
        <AddNewCard />
        {todos.map(({ title, description, id }) => (
          <Card
            key={id}
            id={id}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
}
