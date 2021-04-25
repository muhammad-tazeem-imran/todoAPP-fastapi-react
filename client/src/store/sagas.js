import {
  call, put, takeLeading
} from 'redux-saga/effects';

import services from '../services';
import types from './types';
import * as actions from './actions';

function* fetchTodoSaga() {
  try {
    const response = yield call(services.fetchTodos);
    yield put(actions.fetchTodosSuccess(response.data));
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
  yield call(fetchTodoSaga);
}

function* updateTodoSaga({ payload }) {
  try {
    yield call(services.updateTodo, payload);
    yield put(actions.updateTodosSuccess());
  } catch (e) {
    yield put(actions.updateTodosFailure(e.message));
  }
  yield call(fetchTodoSaga);
}

function* deleteTodoSaga({ payload }) {
  try {
    yield call(services.deleteTodo, payload);
    yield put(actions.deleteTodosSuccess());
  } catch (e) {
    yield put(actions.deleteTodosFailure(e.message));
  }
  yield call(fetchTodoSaga);
}

export default function* todosWatcherSaga() {
  yield takeLeading(types.FETCH_TODOS_REQUEST, fetchTodoSaga);
  yield takeLeading(types.ADD_TODOS_REQUEST, addTodoSaga);
  yield takeLeading(types.UPDATE_TODOS_REQUEST, updateTodoSaga);
  yield takeLeading(types.DELETE_TODOS_REQUEST, deleteTodoSaga);
}
