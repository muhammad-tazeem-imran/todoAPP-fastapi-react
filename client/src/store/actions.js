import types from "./types";

const createAction = (type) => (payload) => ({
  type, payload,
});

export const fetchTodos = createAction(types.FETCH_TODOS_REQUEST);
export const fetchTodosSuccess = createAction(types.FETCH_TODOS_SUCCESS);
export const fetchTodosFailure = createAction(types.FETCH_TODOS_FAILURE);


export const addTodos = createAction(types.ADD_TODOS_REQUEST);
export const addTodosSuccess = createAction(types.ADD_TODOS_SUCCESS);
export const addTodosFailure = createAction(types.ADD_TODOS_FAILURE);

export const updateTodos = createAction(types.UPDATE_TODOS_REQUEST);
export const updateTodosSuccess = createAction(types.UPDATE_TODOS_SUCCESS);
export const updateTodosFailure = createAction(types.UPDATE_TODOS_FAILURE);

export const deleteTodos = createAction(types.DELETE_TODOS_REQUEST);
export const deleteTodosSuccess = createAction(types.DELETE_TODOS_SUCCESS);
export const deleteTodosFailure = createAction(types.DELETE_TODOS_FAILURE);
