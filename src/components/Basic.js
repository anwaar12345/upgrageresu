import React, {Component} from 'react';
import {ScrollView , Image} from 'react-native';
import { createStore, applyMiddleware } from "redux";
import Router from "./Router"; // I have created router.js file
import { Provider } from "react-redux";

import reducers from "./reducers";
class Basic extends Component {
    render() {
       // Here router.js file is called in provider

       // Store and provider is created
       
       const store = createStore(reducers);
        return (
          <Provider store={store}>
            
            <Router />
         
          </Provider>
        );
      }
    }

export default Basic;