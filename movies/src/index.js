import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Details from './Details' 
import UpdateReducer from './reducers/update';
import { BrowserRouter as Router, Route} from "react-router-dom"
import  {createStore} from 'redux'
import {Provider} from 'react-redux'
import allRed from './reducers';


const store =  createStore(allRed)

ReactDOM.render(
     <Provider store = {store}>
        <Router>
              <switch>
                  <Route exact path = "/" component = {App} />
                <Route exact path = "/Details" component = {Details} />
              </switch>
        </Router>
     </Provider>

  
      
,

  document.getElementById('root')
);

