import {v4 as uuid} from 'uuid';

export const addTodo = (name, description, dueDate) => ({
  id: uuid(),
  type: 'ADD_TODO',
  name: name,
  description: description,
  dueDate: dueDate
})

export const markComplete = (id) => ({
  type: 'MARK_COMPLETE',
  id: id
})

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  id: id
})

export const toggleLeftColumn = () => ({
    type: 'TOGGLE_LEFT_COLUMN'
})