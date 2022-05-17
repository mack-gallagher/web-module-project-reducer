import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

import reducer, { initialState } from '../reducers/index.js';

import { applyNumber, 
         APPLY_NUMBER, 
         changeOperation, 
         CHANGE_OPERATION,
         clearDisplay,
         CLEAR_DISPLAY,
         memWrite,
         MEM_WRITE,
         memRead,
         MEM_READ,
         memClear,
         MEM_CLEAR,
         } from '../actions/index.js';

function App() {

  const CLEAR_DISPLAY = "CLEAR_DISPLAY";

  function handleNumberClick(number) {
    dispatch(applyNumber(number));
  }

  function handleOpChange(operation) {
    dispatch(changeOperation(operation));
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={ () => dispatch(memWrite()) } />
              <CalcButton value={"MR"} onClick={ () => dispatch(memRead()) } />
              <CalcButton value={"MC"} onClick={ () => dispatch(memClear()) } />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={ () => handleNumberClick(1)} />
              <CalcButton value={2} onClick={ () => handleNumberClick(2)} />
              <CalcButton value={3} onClick={ () => handleNumberClick(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={ () => handleNumberClick(4) } />
              <CalcButton value={5} onClick={ () => handleNumberClick(5) } />
              <CalcButton value={6} onClick={ () => handleNumberClick(6) } />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={ () => handleNumberClick(7) } />
              <CalcButton value={8} onClick={ () => handleNumberClick(8) } />
              <CalcButton value={9} onClick={ () => handleNumberClick(9) } />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={ () => handleOpChange("+") } />
              <CalcButton value={"*"} onClick={ () => handleOpChange("*") } />
              <CalcButton value={"-"} onClick={ () => handleOpChange("-") } />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={ () => dispatch(clearDisplay()) }/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
