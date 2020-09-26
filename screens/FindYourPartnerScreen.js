import 'react-native-gesture-handler';
import React from 'react';

import HeaderCustom from '../components/Header';
import BottomTab from '../components/BottomTab';
import GenericButton from '../components/Button';
import ProfilePic from '../components/ProfilePic';

import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
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

const FindYourPartnerScreen: () => React$Node = () => {
  return (
    <>
      <View style={{ flex: 1}}>
      <ImageBackground
          source={require('../assets/backgroundHome.png')}
          style={styles.background}>
            <View style={{ flex: 0.2, }}>
            <HeaderCustom title="Accountabl"></HeaderCustom>
          </View>
          
          <View style={{ flex: 1.75, justifyContent:"space-evenly"}}>
            <View style={{flex:1.5, flexDirection:"row", justifyContent:"space-evenly" }}>
            <ProfilePic style={styles.circle}/>
            <ProfilePic style={styles.circle2}/>
            </View>
            <View style={{flex:1, alignSelf:"center", justifyContent:"space-evenly"}}>
            <GenericButton title="Custom Matchmaking"/>
            <GenericButton title="New Matchmaking" style={{backgroundColor:"#35BAB2"}}/>
            </View>
            <View style={{flex:0.5}}>
      
            </View>
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
  circle: {
    backgroundColor: "#ECF4FB",
    alignSelf: "center",
    width: 128,
    height: 128,
    borderRadius: 64,
  },
  circle2: {
    backgroundColor: "rgba(50, 50, 50, 0.8);",
    alignSelf: "center",
    width: 128,
    height: 128,
    borderRadius: 64,
    
  },
});

export default FindYourPartnerScreen;
