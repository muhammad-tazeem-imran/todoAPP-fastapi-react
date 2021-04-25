const defaultTypes = {
  FETCH_TODOS_REQUEST: null,
  FETCH_TODOS_SUCCESS: null,
  FETCH_TODOS_FAILURE: null,
  ADD_TODOS_REQUEST: null,
  ADD_TODOS_SUCCESS: null,
  ADD_TODOS_FAILURE: null,
  UPDATE_TODOS_REQUEST: null,
  UPDATE_TODOS_SUCCESS: null,
  UPDATE_TODOS_FAILURE: null,
  DELETE_TODOS_REQUEST: null,
  DELETE_TODOS_SUCCESS: null,
  DELETE_TODOS_FAILURE: null,
}

function mirrorKey(types) {
  const actionTypes = {};
  Object.keys(types).forEach((type) => { actionTypes[type] = type; });
  return actionTypes;
}

export default mirrorKey(defaultTypes);
