import React from "react";
import "./App.scss";
import Counter from "./Counter";
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const initialState = {
  count: 0
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
      case 'RESET':
        return {
          count: 0
        };
    default:
      return state;
  }
}
const store = createStore(reducer);


function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
