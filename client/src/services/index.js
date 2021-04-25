import axios from './axios';

const services = {
  fetchTodos: () => (
    axios.get('/api/v1/todos/')
  ),
  addTodo: (payload) => (
    axios.post('/api/v1/todos/', payload)
  ),
  updateTodo: ({ id, title, description }) => (
    axios.put(`/api/v1/todos/${id}`, {title, description})
  ),
  deleteTodo: ({ id }) => (
    axios.delete(`/api/v1/todos/${id}`)
  )
};

export default services;
