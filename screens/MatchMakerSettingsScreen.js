import 'react-native-gesture-handler';
import React from 'react';

import HeaderCustom from '../components/Header';
import GenericButton from '../components/Button';

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

const MatchMakerSettingsScreen: () => React$Node = () => {
  return (
    <>
      <View style={{ flex: 1}}>
            <View style={{ flex: 0.2, }}>
            <HeaderCustom title="Matchmaking Settings"></HeaderCustom>
          </View>
          
          <View style={{ flex: 1.75,}}>
           <Text style={styles.header}>Goal Category:</Text>
            <Text>Create Dropdownbox</Text>         
            <Text style={styles.header}>Age Range:</Text>  
            <Text>Create slider</Text>
            <Text style={styles.header}>Do you want to be matched by:</Text>  
            <Text>Checkbox1</Text>
            <Text>Checkbox2</Text>
            <Text style={styles.header}>How often do you want to communicate:</Text>  
            <Text>Checkbox1</Text>
            <GenericButton title="Save and Continue"/>
            <Text style={styles.cancel}>Cancel</Text>
          </View>

          <View style={{ flex: 0.28 }}>
        
          </View>
  
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%'
  },
  header:{
     fontSize:16,
     fontWeight:"500",
     color: "#323232" 
  },
  cancel:{
     color:"#FF2525",
     fontSize: 16, 
  }
});

export default MatchMakerSettingsScreen;
