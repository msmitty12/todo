import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const preloadedState = {};
  let store = createStore(reducer, preloadedState)
  
  store.subscribe(() => (console.log(store.getState())))
  ReactDOM.render(<Provider store={store}>
      <App />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
