import {
  call, put, takeLeading
} from 'redux-saga/effects';

import services from '../services';
import types from './types';
import * as actions from './actions';

function* fetchTodoSaga() {
  try {
    yield call(services.fetchTodos);
    yield put(actions.fetchTodosSuccess());
  } catch (e) {
    yield put(actions.fetchTodosFailure(e.message));
  }
}

function* addTodoSaga({ payload }) {
  try {
    yield call(services.addTodo, payload);
    yield put(actions.addTodosSuccess());
  } catch (e) {
    yield put(actions.addTodosFailure(e.message));
  }
}

function* updateTodoSaga({ payload }) {
  try {
    yield call(services.updateTodo, payload);
    yield put(actions.updateTodosSuccess());
  } catch (e) {
    yield put(actions.updateTodosFailure(e.message));
  }
}

export default function* todosWatcherSaga() {
  yield takeLeading(types.FETCH_TODOS_REQUEST, fetchTodoSaga);
  yield takeLeading(types.ADD_TODOS_REQUEST, addTodoSaga);
  yield takeLeading(types.UPDATE_TODOS_REQUEST, updateTodoSaga);
}
