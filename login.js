import React, {Component} from 'react'
import {Text, View, StyleSheet, Button, Alert, TextInput, AsyncStorage} from 'react-native'
import UserService from './UserService';

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userEmail: '',
      password: ''
    };

    this._clearForm = this._clearForm.bind(this);
    this._validateLogin = this._validateLogin.bind(this);
    this._handleEmailTextChange = this._handleEmailTextChange.bind(this);
    this._handlePasswordTextChange = this._handlePasswordTextChange.bind(this);
    this._handleLoginButtonPress = this._handleLoginButtonPress.bind(this);
  }

  _clearForm() {
    this.setState({
      userEmail: '',
      password: ''
    });
  }

  async _validateLogin() {

    if (this.state.userEmail === '' || this.state.password === '') {
      console.log("userEmail or password can't empty!");
      return false;
    }

    const credentials = {
      email: this.state.userEmail,
      password: this.state.password
    };

    let ok = await UserService.checkCredentials(credentials);

    console.log(`Logged? ${!!ok} ->`, ok);

    return ok;
  }

  async _handleLoginButtonPress() {
    if (!await this._validateLogin()) {
      Alert.alert(
        'Error',
        `Email o password incorrecto?`
      );
      return;
    }

    Alert.alert(
      'Login!',
      `Bienvenido, ${this.state.userEmail}!`
    );

    this._clearForm()
  }

  _handleEmailTextChange(inputValue) {
    this.setState({userEmail: inputValue})
  }

  _handlePasswordTextChange(inputValue) {
    this.setState({password: inputValue})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Encuentrame
        </Text>

        <TextInput
          value={this.state.userEmail}
          placeholder="E-mail"
          style={{width: 200, height: 44, padding: 8}}
          keyboardType="email-address"
          selectTextOnFocus
          onChangeText={this._handleEmailTextChange}
        />

        <TextInput
          value={this.state.password}
          placeholder="Contraseña"
          style={{width: 200, height: 44, padding: 8}}
          secureTextEntry
          returnKeyType="done"
          onChangeText={this._handlePasswordTextChange}
          onSubmitEditing={this._handleLoginButtonPress}
        />

        <Button
          title="Login"
          onPress={this._handleLoginButtonPress}
        />

        <Text
          onPress={() => Alert.alert("Registro", "coming soon...")}
          style={{textDecorationLine: "underline"}}>
          No estoy registrado
        </Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e'
  }
});
