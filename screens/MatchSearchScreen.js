import 'react-native-gesture-handler';
import React from 'react';

import HeaderCustom from '../components/Header';
import BottomTab from '../components/BottomTab';

import RequestMatchComponent from '../components/RequestMatchComponent';
import TextInputLogin from '../components/TextInputLogin';

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

const MatchSearchScreen: () => React$Node = () => {
  return (
    <>
      <View style={{ flex: 1}}>
            <View style={{ flex: 0.2, }}>
            <HeaderCustom title="We Found X Potential Matches"></HeaderCustom>
          </View>
          
          <View style={{ flex: 1.75,}}>
          <TextInputLogin name="Start new search" style={styles.search} />
           <RequestMatchComponent/>
           <RequestMatchComponent/>
           <RequestMatchComponent/>
           <RequestMatchComponent/>
          </View>

          <View style={{ flex: 0.28 }}>
            <BottomTab />
          </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  search:{
    shadowOffset: {width: 0, height:4},
    elevation: 1,
    shadowRadius: 16,
    shadowColor: 'rgba(28, 92, 132, 0.15)',
  }
});

export default MatchSearchScreen;
