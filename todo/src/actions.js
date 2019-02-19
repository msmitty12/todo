

export const addTodo = (name, description, dueDate) => ({
  type: 'ADD_TODO',
  name: name,
  description: description,
  dueDate: dueDate
})

export const markComplete = (name) => ({
  type: 'MARK_COMPLETE',
  name: name
})

export const deleteTodo = (name) => ({
  type: 'DELETE_TODO',
  name: name
})