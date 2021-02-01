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
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const Username = () => (
  <Image source={require('../assets/username.png')}
    style={styles.username}
  />
);

const Password = () => (
  <Image source={require('../assets/password.png')}
    style={styles.password}
  />
);

const SignupScreen: () => React$Node = (props) => {
  return (
    <>
      <View style={{ flex: 1}}>
        <ImageBackground
          source={require('../assets/backgroundLogin.png')}
          style={styles.background}>

          <View style={{ flex: 1.45, flexDirection: "column-reverse", paddingLeft: '8%'}}>
            <Text style={styles.title}>Sign Up</Text>
          </View>
          
          <View style={{ flex: 1.75, alignSelf: "center", justifyContent: "space-around"}}>
           <TextInputLogin name= "Username"/>
           <TextInputLogin name= "Password"/>
           <TextInputLogin name= "Confirm Password"/>
           <TextInputLogin name= "Age"/>
           <TextInputLogin name= "Location"/>
          </View>

          <View style={{ flex: 0.5, alignSelf: "center",justifyContent:"space-evenly" }}>
            <Text>Are you a student?</Text>
            <GenericButton style={styles.loginButton} title="Sign Up" onPress={()=>signup(props)} />
          </View>

        </ImageBackground>
      </View>
    </>
  );
};


function signup(props) {
  //SEND INFO TO DB
  console.log("TESTING SIGNUP");


  props.navigation.navigate("PickPet");
  /*
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
      if (responseData == "SUCCESS") {
      props.navigation.navigate("Home");
      }
    }).catch((error) => {
      console.error(error);
    });
*/
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'stretch',
      
    },
    title:{
        marginVertical: 15
    },
    background: {
      width: '100%',
      height: '100%'
    },
  
  });

export default SignupScreen;
