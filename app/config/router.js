import {StackNavigator} from 'react-navigation';
import Login from '../screen/Login';
import Register from '../screen/Register';


export const Root = StackNavigator({
  Login: {screen: Login, navigationOptions: {header: null}},
  Register: {screen: Register}
});
