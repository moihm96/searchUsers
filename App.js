import React from 'react';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import {createStore, applyMiddleware} from 'redux';
import AppStack from './src/app';
console.disableYellowBox = true;
export default class App extends React.Component{
  
  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
        <AppStack/>
      </Provider>
    )
  }
}