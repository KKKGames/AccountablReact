/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import BottomTab from '../components/BottomTab'
import HeaderCustom from '../components/Header'
import ProfilePic from '../components/ProfilePic'

import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const MiddleButton = (props) => (
  <TouchableOpacity onPress={ () => props.onPress()}>
  <View style={[styles.button, props.style]}>
      <View style= {{justifyContent:"center"}}>
          <Text style={styles.text}> {props.title}</Text>
      </View>  
  </View>
  </TouchableOpacity>
);


const HomeScreen: () => React$Node = (props) => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../assets/backgroundHome.png')}
          style={styles.background}>
          <View style={{ flex: 0.2, }}>
            <HeaderCustom title="Accountabl"></HeaderCustom>
          </View>

          <View style={{ flex: 1.75, justifyContent: "space-evenly", flexDirection: "column", alignItems: "center" }}>
            <ProfilePic style={styles.circle}/>
            <MiddleButton title="Match" onPress={()=>props.navigation.navigate("MatchMakerSettings")}/>
            <MiddleButton title="Write in Journal"/>
            <MiddleButton title="View Daily Checklist"/>
          </View>

          <View style={{ flex: 0.28 }}>
            <BottomTab />
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  background: {
    width: '100%',
    height: '100%'
  },
  pet: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  circle: {
    backgroundColor: "#ECF4FB",
    alignSelf: "center",
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  button: {
     width: 354,
     height: 48.9,
     borderRadius: 10,
     backgroundColor: "white",
     shadowOffset: {width: 0, height:4},
     elevation: 1,
     shadowRadius: 16,
     shadowColor: 'rgba(28, 92, 132, 0.15)',
     //alignContent:"center",
     justifyContent:"center"
 },
  middleButton:{
    alignSelf:"center",
    fontSize: 16,
    lineHeight: 24,
    color: "#FFFFFF"
  }
});

export default HomeScreen;
