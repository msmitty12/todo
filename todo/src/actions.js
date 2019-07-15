import {v4 as uuid} from 'uuid';

export const addTodo = (name, description, dueDate, folder) => ({
  id: uuid(),
  type: 'ADD_TODO',
  name: name,
  description: description,
  dueDate: dueDate,
  folder: folder
})

export const setActiveFolder = (name) => ({
  type: 'SET_ACTIVE_FOLDER',
  name: name
})

export const acceptAddFolderInput = () => ({
  type: 'SET_ACCEPT_ADD_FOLDER'
})

export const acceptAddTaskInput = () => ({
  type: 'SET_ACCPET_ADD_TASK'
})

export const addFolder = (name) => ({
  type: 'ADD_FOLDER',
  name: name
})

export const markComplete = (id) => ({
  type: 'MARK_COMPLETE',
  id: id
})

export const deleteTodo = (id, folder) => ({
  type: 'DELETE_TODO',
  id: id,
  folder: folder
})

export const toggleLeftColumn = () => ({
    type: 'TOGGLE_LEFT_COLUMN'
})