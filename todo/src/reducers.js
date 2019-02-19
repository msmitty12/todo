import { combineReducers } from 'redux';
import { db } from './index';

function addDoc(doc) {
  db.collection("todos").add(doc)
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

function removeDoc(docName) {
  var doc_query = db.collection('todos').where('name','==',docName);
  doc_query.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      doc.ref.delete();
    });
  });
}

function updateDoc(docName, key, val) {
  var doc_query = db.collection('todos').where('name','==',docName);

  let updateDict = {}
  updateDict[key] = val
  doc_query.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      doc.ref.update(updateDict);
    });
  });
}

function todos(todos = [], action) {
  switch (action.type) { 
    case 'ADD_TODO':
      const newTodo = {
        name: action.name,
        description: action.description,
        dueDate: action.dueDate,
        completed: false
      }
      addDoc(newTodo);

      return [
        ...todos,
        newTodo
      ]
    case 'MARK_COMPLETE':
      updateDoc(action.name, "completed", true)
      return todos.map(todo =>
        todo.name === action.name ? { ...todo, completed: true } : todo
      )
    case 'DELETE_TODO':
      removeDoc(action.name);
      return todos.filter(todo => todo.name !== action.name)
    default:
      return todos
  }
}

export const reducer = combineReducers({
  todos
})

