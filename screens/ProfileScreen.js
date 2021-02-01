import 'react-native-gesture-handler';
import React from 'react';

import HeaderCustom from '../components/Header';
import BottomTab from '../components/BottomTab';

import ProfilePic from '../components/ProfilePic';


import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import TextInputLogin from '../components/TextInputLogin';

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


const ProfileScreen: () => React$Node = () => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../assets/backgroundHome.png')}
          style={styles.background}>
          <View style={{ flex: 0.2, }}>
            <HeaderCustom title="Profile"></HeaderCustom>
          </View>

          <View style={{ flex: 1.75 }}>
            <View style={{ alignItems: "center" }}>
              <ProfilePic style={styles.circle} />
              <Text style={styles.name}>Bobby Rambarack</Text>
              <Text>Age: 30</Text>
            </View>
            <View style={{flexDirection:"column"}} >
              <Text>Bio</Text>
              <TextInputLogin style={styles.boxBio}></TextInputLogin>
              <Text>Location</Text>
              <TextInputLogin></TextInputLogin>
              <Text>School</Text>
              <TextInputLogin></TextInputLogin>
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
  background: {
    width: '100%',
    height: '100%'
  },
  circle: {
    backgroundColor: "#ECF4FB",
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  name: {
    fontSize: 16,
    color: "#1C5C84"

  },
  boxBio:{
    width: 350,
    height: 100,
    borderColor: '#E9F0F3',
    borderWidth: 1,
    borderRadius: 12  ,
    shadowOffset: {width: 0, height:4},
    elevation: 1,
    shadowRadius: 16,
    shadowColor: 'rgba(28, 92, 132, 0.15)',
  }
});

export default ProfileScreen;
