import React from 'react';
import {StackNavigator} from 'react-navigation';
import Login from './login';


const App = StackNavigator({
  Login: {screen: Login},
});

export default App;
