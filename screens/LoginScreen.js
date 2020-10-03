/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import GenericButton from '../components/Button';
import TextInputLogin from '../components/TextInputLogin'

import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
} from 'react-native';



var username, password;

function onUsernameChange(value) {
  username = value;
}
function onPasswordChange(value) {
  password = value;
}


const Separator = () => (
  <View style={styles.separator} />
);


const LoginScreen: () => React$Node = () => {

  return (
    <>   
    
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../assets/backgroundLogin.png')}
          style={styles.background}>

          <View style={{ flex: 1.45, flexDirection: "column-reverse", paddingLeft: '8%' }}>
            <Text style={styles.title}>Log In</Text>

            <Text style={{ marginVertical: 15 }}>Welcome Back!</Text>
          </View>

          <View style={{ flex: 0.8, alignSelf: "center", justifyContent: "space-around" }}>
            <TextInputLogin name="Username" onChangeText={onUsernameChange} />
            <TextInputLogin name="Password" onChangeText={onPasswordChange} />

          </View>

          <View style={{ flex: 1.3, alignSelf: "center", justifyContent: "space-evenly" }}>

            <GenericButton style={styles.loginButton} title="Login" onPress={login(props)} />

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Separator />
              <Text>OR</Text>
              <Separator />
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <GenericButton style={styles.facebook}
                title="Facebook"
                onPress={facebook}
              >
              </GenericButton>
              <GenericButton style={styles.google}
                title="Google"
                onPress={google}
              >
              </GenericButton>
            </View>
            <Text style={{ textAlign: "center" }}>Don't Have an Account?<Text style={{ color: "red" }}> Sign up</Text></Text>
          </View>

        </ImageBackground>
      </View>
      {/*
    <Text style= {styles.forgotPassword}>Forgot Password?</Text>
    <TouchableOpacity onPress={()=>console.log("TESTING")}>
  */}
    </>
  );

};
function testFunc(value) {
  var myValue;
  myValue = value;
}

function login(props) {
 // props.navigate.navigate('Home');
  console.log("TESTING LOGIN");
  console.log(username);
  console.log(password);
  fetch('http://10.0.2.2:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Username: username,
      Password: password
    })
  }).then((response) => response.json())
    .then((responseData) => {
      console.log('response object:', responseData)
      //MOVE TO DIFFERENT SCREEN
  //    if (responseData == "SUCCESS") {
   //     props.navigate.navigate('Home');
 //     }
    }).catch((error) => {
      console.error(error);
    });
}



function google() {
  console.log("TESTING2");
}

function facebook() {
  console.log("TESTING2");
}

//relative positions disappear
//conversion rate
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'stretch',

  },
  background: {
    width: '100%',
    height: '100%'
  },
  loginButton: {
    // borderRadius: 12,
    //position: "absolute",
    //top: 478.0870534,
    //width: 90,
    //left: 30
  },

  facebook: {
    width: 165,
    height: 40.7,
    backgroundColor: "#395185"
  },
  google: {
    width: 165,
    height: 40.7,
    backgroundColor: "#FF3D00"
  },
  username: {
    //position:"absolute",
    //top: 278.204241,
    //left: 30
  },
  password: {
    //position:"absolute",
    //top: 345.1037945,
    //left: 30
  },
  title: {

    // flexDirection:"column",
    //  alignSelf: "flex-end",
    // position: "absolute",
    // paddingLeft: "10%",
    //top: '35%',
    //left:30
  },
  forgotPassword: {
    //position:"absolute",
    //top:400.58,
    //left:290
  },
  separator: {
    //  marginVertical: '10%',
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: 148
  }
});

export default LoginScreen;
