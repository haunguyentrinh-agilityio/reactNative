import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// var {FBLogin, FBLoginManager} = require('react-native-facebook-login');
import {FBLogin, FBLoginManager} from 'react-native-facebook-login';

import Info from './Info'
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }
  render() {
    let _this = this;
    let user = this.state.user;
    return (
      <View style={styles.container}>

          { user && <Info user={user} /> }

          <FBLogin
            permissions={["email","user_friends"]}
            loginBehavior={FBLoginManager.LoginBehaviors.Native}
            onLogin={function(data){
              console.log("Logged in!");
              console.log(data);
              _this.setState({ user : data.credentials });
            }}
            onLogout={function(){
              console.log("Logged out.");
              _this.setState({ user : null });
            }}
            onLoginFound={function(data){
              console.log("Existing login found.");
              console.log(data);
              _this.setState({ user : data.credentials });
            }}
            onLoginNotFound={function(){
              console.log("No user logged in.");
              _this.setState({ user : null });
            }}
            onError={function(data){
              console.log("ERROR");
              console.log(data);
            }}
            onCancel={function(){
              console.log("User cancelled.");
            }}
            onPermissionsMissing={function(data){
              console.log("Check permissions!");
              console.log(data);
            }}
          />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});


export default Home;
