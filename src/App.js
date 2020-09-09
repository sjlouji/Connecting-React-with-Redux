  import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


const initialState = {
  val: 14
}

function reducer(state = initialState, action){
  switch (action.type) {
    case "INC":
      console.log("INC")
      return {
        val: state.val + 1
      }
    case "DEC":
      console.log("DEC")
      return {
        val: state.val - 1
      }
    default:
      return state;    
  }
}
const store = createStore(reducer);
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
