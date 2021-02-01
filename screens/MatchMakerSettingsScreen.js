import 'react-native-gesture-handler';
import React from 'react';

import HeaderCustom from '../components/Header';
import GenericButton from '../components/Button';
import {FREQUENCY} from '../common/constants';

import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Picker } from '@react-native-community/picker';
import CheckBox from '@react-native-community/checkbox';
import SliderCustom from '../components/Slider';



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



const MatchMakerSettingsScreen: () => React$Node = (props) => {
  return (
    <>
      <View style={{ flex: 1}}>
            <View style={{ flex: 0.2, }}>
            <HeaderCustom title="Matchmaking Settings"></HeaderCustom>
          </View>
          
          <View style={{ flex: 1.75, justifyContent: "center"}}>
           <Text style={styles.header}>Goal Category:</Text>
            {/* <Text>Create Dropdownbox</Text>         
               */}
               <Picker
                    //  selectedValue={this.state.language}
                      style={{height: 50, width: 100}}
                      mode="dropdown"
                    //  onValueChange={(itemValue, itemIndex) =>
                     //  this.setState({language: itemValue})}
                     >
                   
               <Picker.Item label="Goal1" value="java" />
               <Picker.Item label="Goal2" value="js" />
            </Picker>
            <Text style={styles.header}>Age Range:</Text>  
            {/* <Text>Create slider</Text>
*/}
            <SliderCustom>
            </SliderCustom>
            <Text style={styles.header}>Do you want to be matched by:</Text>  
            <View style={{flexDirection:"row", justifyContent: "center", alignContent: "center"}}>
            <CheckBox></CheckBox> 
            <Text>Location</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent: "center", alignContent: "center"}}>
            <CheckBox></CheckBox> 
            <Text>School</Text>
            </View>
            <Text style={styles.header}>How often do you want to communicate:</Text>  
            <Picker
            
            >
            <Picker.Item label={FREQUENCY.MINIMAL} value="java" />
            <Picker.Item label={FREQUENCY.OCCASIONALLY} value="java" />
            <Picker.Item label={FREQUENCY.OFTEN} value="java" />
            <Picker.Item label={FREQUENCY.CONSTANT} value="java" />
             </Picker>
            <View  style={{alignItems:"center"}}>
            <GenericButton title="Save and Continue" onPress={()=> props.navigation.navigate("MatchSearch")}/>
            <Text style={styles.cancel}>Cancel</Text>
            </View>
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
