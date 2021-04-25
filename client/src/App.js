import React from 'react';
import { Provider, useSelector } from 'react-redux';

import AddNewCard from './components/AddNew';
import Card from './components/Card';
import TitleBar from './components/TitleBar';


import styles from './App.module.scss'
import './theme/theme.scss';

export default function App() {
  const todos = useSelector((state) => state.todos);

  return (
    <div className={styles.main}>
      <TitleBar text="Todo App" />

      <div className={styles.cardList}>
        <AddNewCard />
        {todos.map(({ title, description, id }) => (
          <Card
            title={title}
            description={description}
            id={id}
          />
        ))}
      </div>
    </div>
  );
}
