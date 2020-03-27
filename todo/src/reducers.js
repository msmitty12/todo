import { combineReducers } from 'redux';
import { db } from './index';

const DEFAULT_FOLDER_NAME = "default"

function addDoc(doc) {
  db.collection("todos").add(doc)
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

function addFolderDoc(doc) {
  db.collection("folders").add(doc)
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

function deleteFolderDoc(folder_name) {
  db.collection("folders").where('name', '==', folder_name)
    .get()
    .then(function(querySnapshot) {
      if (querySnapshot.length > 1) {
        console.error("Found too many items to delete")
        return
      }
      querySnapshot.forEach(function(doc) {
        db.collection("folders").doc(doc.id).delete()
          .then(function() {
              console.log("Successfully delete folder: " + folder_name);
          })
          .catch(function(error) {
              console.error("Error deleting folder: " + folder_name, error);
          });
      })
    })
}

function updateFolderDoc(folder) {
  db.collection("folders").where('name','==',folder.name)
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        console.log(doc.id, " => ", doc.data());
        db.collection("folders").doc(doc.id).update(folder);
      });
    })
}

function removeDoc(docId) {
  var doc_query = db.collection('todos').where('id','==',docId);

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
      if (action.id && todos.filter(todo => todo.id === action.id)) {
        removeDoc(action.id);
      }
      return todos.filter(todo => todo.id !== action.id)
    default:
      return todos
  }
}

function folders(folders = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      // TODO: Changing object directly :( )
      let folder = folders.find(it => {return it.name === action.folder | DEFAULT_FOLDER_NAME})
      folder.todos.push(action.id)
      updateFolderDoc(folder)

      return folders
    case 'DELETE_TODO':
      console.log("DELETE") 
      console.log(action.id)
      let delFolder = folders.find(it => {return it.name === action.folder | DEFAULT_FOLDER_NAME})
      delFolder.todos = delFolder.todos.filter(id => {return id !== action.id})
      updateFolderDoc(delFolder)

      return folders
    case 'ADD_FOLDER':
      let new_folder = {name: action.name, todos: []}
      addFolderDoc(new_folder)
      return folders.concat([new_folder])
    case 'DELETE_FOLDER':
      if (action.name === DEFAULT_FOLDER_NAME) {
         console.error("Cannot delete default folder")
         return folders.filter(folder => {return true})
      }
      else {
         deleteFolderDoc(action.name)
         return folders.filter(folder => {return folder.name !== action.name})
      }
    default:
      return folders
  }
}

function page(page = {}, action) {
  switch (action.type) {
    case 'SHOW_STONKS_PAGE':
      return {...page, active_page: "stonks"}
    case 'SHOW_GAME_PAGE':
      return {...page, active_page: "game"}
    case 'SHOW_TODO_PAGE':
      return {...page, active_page: "todo"}
    case 'TOGGLE_LEFT_COLUMN':
      const visible = page && page.leftColumn && page.leftColumn.visible
      return {...page, leftColumn: {...page["leftColumn"], visible: !visible}}
    case 'SET_ACTIVE_FOLDER':
      return {...page, active_folder: action.name}
    case 'TOGGLE_ADD_FOLDER':
      const accept_input = page && page.add_folder_accept_input
      return {...page, add_folder_accept_input: !accept_input}
    case 'TOGGLE_ADD_TASK':
      const accept_task_input = page && page.add_task_accept_input
      return {...page, add_task_accept_input: !accept_task_input}
    case 'ADD_FOLDER':
      return {...page, add_folder_accept_input: false}
    case 'DELETE_FOLDER':
      let new_active_folder = page.active_folder;
      if (new_active_folder === action.name) {
         new_active_folder = DEFAULT_FOLDER_NAME
      }
      return {...page, active_folder: new_active_folder}
    case 'ADD_TODO':
      return {...page, add_task_accept_input: false}
    default:
      return page
  }
}

export const reducer = combineReducers({
  todos,
  folders,
  page
})

