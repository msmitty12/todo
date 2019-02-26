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

function removeDoc(docId) {
  var doc_query = db.collection('todos').where('id','==',docId);
  console.log("query")
  console.log(doc_query.get());
  doc_query.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      doc.ref.delete();
    });
  });
}

function updateDoc(docId, key, val) {
  var doc_query = db.collection('todos').where('id','==',docId);

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
        id: action.id,
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
      updateDoc(action.id, "completed", true)
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, completed: true } : todo
      )
    case 'DELETE_TODO':
      removeDoc(action.id);
      return todos.filter(todo => todo.id !== action.id)
    default:
      return todos
  }
}

function page(page = {}, action) {
  switch (action.type) {
    case 'TOGGLE_LEFT_COLUMN':
      const visible = page && page.leftColumn && page.leftColumn.visible
      return {...page, leftColumn: {...page["leftColumn"], visible: !visible}}
    default:
      return page
  }
}

export const reducer = combineReducers({
  todos,
  page
})

