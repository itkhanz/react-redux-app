import React from 'react';
import './App.css'
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, reset, signIn, signOut} from './actions';


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="log">
        <button onClick={() => dispatch(signIn())}>Sign In</button>
        <button onClick={() => dispatch(signOut())}>Sign Out</button>
      </div>
      <h2>Log State: {isLogged? 'User is Logged In!' : 'User Logged  Out'}</h2>      
      <h2>Counter State: {counter}</h2>
      <div className="count">
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
      <h3>Use <a href="https://github.com/zalmoxisus/redux-devtools-extension" target="_blank">Redux DevTools Extension</a> to see the effect of actions on state</h3>
      <div class="container">
		    <span class="react-logo">
			    <span class="nucleo"></span>
		    </span>
      </div>
    </div>
  );
}

export default App;
