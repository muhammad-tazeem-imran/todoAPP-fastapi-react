import types from "./types";

const createAction = (type) => (payload) => ({
  type, payload,
});

export const fetchTodos = createAction(types.FETCH_TODOS);
export const fetchTodosSuccess = createAction(types.FETCH_TODOS_SUCCESS);
export const fetchTodosFailure = createAction(types.FETCH_TODOS_FAILURE);


export const addTodos = createAction(types.ADD_TODOS);
export const addTodosSuccess = createAction(types.ADD_TODOS_SUCCESS);
export const addTodosFailure = createAction(types.ADD_TODOS_FAILURE);

export const updateTodos = createAction(types.UPDATE_TODOS);
export const updateTodosSuccess = createAction(types.UPDATE_TODOS_SUCCESS);
export const updateTodosFailure = createAction(types.UPDATE_TODOS_FAILURE);
