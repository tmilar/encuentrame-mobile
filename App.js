import React from 'react';
import {StackNavigator} from 'react-navigation';
import Login from './app/screen/Login';
import Register from './app/screen/Register';


const App = StackNavigator({
  Login: {screen: Login, navigationOptions: {header: null}},
  Register: {screen: Register}
});

export default App;
