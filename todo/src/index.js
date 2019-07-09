import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { reducer } from './reducers';
import * as firebase from 'firebase';
import 'firebase/firestore';

// Initialize Firebase
let db_config = {
  apiKey: "AIzaSyCDpV8g1oV0FuL7m0_xTD8ocd5J0Y9uobM",
  authDomain: "todo-74ead.firebaseapp.com",
  databaseURL: "https://todo-74ead.firebaseio.com",
  projectId: "todo-74ead",
  storageBucket: "todo-74ead.appspot.com",
  messagingSenderId: "11718190880"
};

firebase.initializeApp(db_config);

export const db = firebase.firestore();

function initApp(preloadedState = {}) {
  let store = createStore(reducer, preloadedState)
  store.subscribe(() => (console.log(store.getState())))

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, 
    document.getElementById('root'));
}

let todos = []
let folders = []

db.collection("todos").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
    });
    querySnapshot.forEach((doc) => {
      todos.push(doc.data());
    });

   db.collection("folders").get().then((querySnapshot) => {
       querySnapshot.forEach((doc) => {
           console.log(doc.data());
       });
       querySnapshot.forEach((doc) => {
         folders.push(doc.data());
       });

      initApp({todos: todos, folders: folders, page: {"active_folder": "default"}})
   });
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
