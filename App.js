import React from 'react';
import {StackNavigator} from 'react-navigation';
import Login from './login';
import Register from './Register';


const App = StackNavigator({
  Login: {screen: Login, navigationOptions: {header: null}},
  Register: {screen: Register}
});

export default App;
