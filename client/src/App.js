import React from 'react';
import { Provider } from 'react-redux';

import AddNewCard from './components/AddNew';
import Card from './components/Card';
import TitleBar from './components/TitleBar';

import store from './store';

import styles from './App.module.scss'
import './theme/theme.scss';

export default function App() {
  return (
    <Provider store={store}>
      <div className={styles.main}>
        <TitleBar text="Todo App" />

        <div className={styles.cardList}>
          <AddNewCard />
          <Card title="First TODO"/>
          <Card title="First TODO"/>
          <Card title="First TODO"/>
          <Card title="First TODO"/>
        </div>
      </div>
    </Provider>
  );
}
