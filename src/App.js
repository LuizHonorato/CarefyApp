import React from 'react';
import {Provider} from 'react-redux'
import  thunk from 'redux-thunk'
import promise from 'redux-promise'
import {createStore, applyMiddleware} from 'redux'
import Routes from './Routes'
import reducers from './reducers'
import NavigationService from './NavigationService'
  
export default props => (
  <Provider store={createStore(reducers, {}, applyMiddleware(thunk, promise))}>
      <Routes ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)} />
  </Provider>
)