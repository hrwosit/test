import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';

 class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    return (
      <View style={styles.container} >
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   
    alignSelf:'flex-end',
    marginTop:'40%',
        //  marginTop:'15%',
    //  alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    marginRight:'5%',
   
  
  },
  input: {

    width: 350,
    height: 46,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
export default Login;