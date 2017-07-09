import React, {Component} from 'react'
import {Text, View, StyleSheet, Button, Alert, TextInput} from 'react-native'

export default class Login extends Component {

  state = {
    userEmail: '',
    password: ''
  };

  constructor(props) {
    super(props);

    this._clearForm = this._clearForm.bind(this);
    this._validateLogin = this._validateLogin.bind(this);
    this._handleEmailTextChange = this._handleEmailTextChange.bind(this);
    this._handlePasswordTextChange = this._handlePasswordTextChange.bind(this);
    this._handleLoginButtonPress = this._handleLoginButtonPress.bind(this);
  }

  _clearForm() {
    this.state = {
      userEmail: '',
      password: ''
    }
  }

  _validateLogin() {
    return this.state.userEmail !== '' && this.state.password !== '';
  }

  _handleLoginButtonPress() {
    if (!this._validateLogin()) {
      Alert.alert(
        'Error',
        `Email o password incorrecto? ${this.state.userEmail} / ${this.state.password}`
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
