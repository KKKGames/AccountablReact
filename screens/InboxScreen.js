import 'react-native-gesture-handler';
import React from 'react';

import HeaderCustom from '../components/Header';
import BottomTab from '../components/BottomTab';
import ProfilePic from '../components/ProfilePic';
import MatchComponent from '../components/MatchComponent';


import {
  ScrollView,
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

const InboxScreen: () => React$Node = () => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.2, }}>
          <HeaderCustom title="Accountabl"></HeaderCustom>
        </View>

        <View style={{ flex: 1.75}}>
          <ScrollView contentContainerStyle={{flexGrow:0.1,justifyContent:"space-between"}}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 50 }}>
                <Text style={styles.matchesText}>      Matches     </Text>
                <Text style={styles.matchRequestText}>      Match Request     </Text>
              </View>
              <MatchComponent />
              <MatchComponent />
              <MatchComponent />
              <MatchComponent />
              <MatchComponent />
              <MatchComponent />
              <MatchComponent />
              <MatchComponent />
              <MatchComponent />
              <MatchComponent />
                      
          </ScrollView>
        </View>

        <View style={{ flex: 0.28 }}>
          <BottomTab />
        </View>
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
  circle: {
    //backgroundcolor should always asked
    backgroundColor: "red",
    alignSelf: "center",
    width: 88,
    height: 88,
    borderRadius: 176,
  },
  matchesText: {
    color: "#1C5C84",
    textDecorationColor: "#1C5C84",
    fontSize: 12,
    textDecorationLine: 'underline'
  },
  matchRequestText: {
    color: "#979797",
    textDecorationColor: "#979797",
    fontSize: 12,
    textDecorationLine: 'underline'
  }
});

export default InboxScreen;
