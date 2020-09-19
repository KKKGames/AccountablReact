/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';


import {
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

//constants
const Background = () => (
  <Image source = {require('./assets/background.png')}
  style= {styles.background}
  />
);

const LoginButton = () => (
  <Image source = {require('./assets/loginButton.png')}
  style= {styles.loginButton}
  />
);

const Facebook = () => (
  <Image source = {require('./assets/facebook.png')}
  style= {styles.facebook}
  />
);

const Google = () => (
  <Image source = {require('./assets/google.png')}
  style= {styles.google}
  />
);

const Username = () => (
  <Image source = {require('./assets/username.png')}
  style= {styles.username}
  />
);

const Password = () => (
  <Image source = {require('./assets/password.png')}
  style= {styles.password}
  />
);



const App: () => React$Node = () => {
  return (
    <>
    <Background/>

  <View style={{
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'stretch'
  }}>
  <Text style= {styles.title}> Log In</Text>
    
    <Username/>
    <Password/>
    <Text style= {styles.forgotPassword}>Forgot Password?</Text>
  {/*  <TouchableOpacity onPress={()=>console.log("TESTING")}>*/}
    <LoginButton/>
  {/* </TouchableOpacity>*/}
    <Facebook/>
    <Google/>
    </View>
    </>
  );
};

//relative positions disappear
//conversion rate
const styles = StyleSheet.create({
  loginButton: {
    position: "absolute",
    top: 478.0870534,
    left: 30
  },   
  background:{
    top: -65
    },
  facebook:{
  position:"absolute",
  top: 593.1216516,
  left:30
  },
  google:{
  position:"absolute",
  top: 593.1216516,
  left: 219
  },
  username:{
    position:"absolute",
    top: 278.204241,
    left: 30
  },
  password:{
    position:"absolute",
    top: 345.1037945,
    left: 30
  },
  title:{
    position:"absolute",
    top:245.5703124,
    left:30
  },
  forgotPassword:{
    position:"absolute",
    top:400.58,
    left:290
  }
});

export default App;
