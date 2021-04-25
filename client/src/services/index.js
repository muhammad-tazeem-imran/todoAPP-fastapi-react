import axios from './axios';

const services = {
  fetchTodos: () => (
    axios.get('')
  ),
  addTodo: (payload) => (
    axios.post('', payload)
  ),
  updateTodo: (payload) => (
    axios.post('', payload)
  ),
};

export default services;
