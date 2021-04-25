import types from './types'

const initialState = {
  todos: [],

  isTodosLoading: false,
  isUpdateTodoLoading: [],
  isAddTodoLoading: false,

  error: null,
};

export default function crawlerReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_TODOS_REQUEST:
      return { ...state, isTodosLoading: true };
    case types.FETCH_TODOS_SUCCESS:
      return { ...state, isTodosLoading: false, todos: action.payload };
    case types.FETCH_TODOS_FAILURE:
      return { ...state, isTodosLoading: false, error: action.payload };

    case types.ADD_TODOS_REQUEST:
      return { ...state, isAddTodoLoading: true };
    case types.ADD_TODOS_SUCCESS:
      return { ...state, isAddTodoLoading: false };
    case types.ADD_TODOS_FAILURE:
      return { ...state, isAddTodoLoading: false, error: action.payload };

    case types.UPDATE_TODOS_REQUEST:
      const newUpdateTodos = [...state.isUpdateTodoLoading];
      newUpdateTodos.push(action.payload.id);

      return {
        ...state,
        isUpdateTodoLoading: true,
        isUpdateTodoLoading: newUpdateTodos,
      };

    case types.UPDATE_TODOS_SUCCESS:
      return { ...state, isUpdateTodoLoading: false };
    case types.UPDATE_TODOS_FAILURE:
      return { ...state, isUpdateTodoLoading: false, error: action.payload };

    default:
      return state;
  }
}
