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

const picSources ={
    koifish: require('../assets/pets/KoiFish.png'),
    cat: require('../assets/pets/Cat.png'),
    deer: require('../assets/pets/Deer.png'),
    fox: require('../assets/pets/Fox.png'),
    koala: require('../assets/pets/Koala.png'),
    panda: require('../assets/pets/Panda.png'),
    turtle: require('../assets/pets/Turtle.png')
}

const PetBackground = (props) => (
    <View style={[styles.petBackground, props.style]}>
        <Image style={styles.petImages} source= {props.imageUri}/>
    </View>
);

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

const PickPetScreen: () => React$Node = (props) => {
    return (
        <>
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={require('../assets/backgroundLogin.png')}
                    style={styles.background}>

                    <View style={{ flex: 1.35, paddingBottom: "8%", flexDirection: "column-reverse", alignSelf: "center" }}>
                        <Text style={styles.title}>Choose your Pet</Text>
                    </View>

                    <View style={{ flex: 1.5, flexDirection: "row",flexWrap: "wrap",alignContent: "stretch", justifyContent: "space-evenly"}}>
                        <PetBackground style={{backgroundColor: "rgba(53, 186, 178, 0.19)",}} imageUri={picSources.koifish}/>
                        <PetBackground style={{backgroundColor: "rgba(201, 231, 251, 0.5)",}} imageUri={picSources.cat}/>
                        <PetBackground style={{backgroundColor: "rgba(215, 208, 56, 0.5)",}} imageUri={picSources.panda}/>
                        <PetBackground style={{backgroundColor: "rgba(53, 186, 178, 0.19)",}} imageUri={picSources.deer}/>
                        <PetBackground style={{backgroundColor: "rgba(53, 186, 178, 0.19)",}} imageUri={picSources.koala}/>
                        <PetBackground style={{backgroundColor: "rgba(53, 186, 178, 0.19)",}} imageUri={picSources.turtle}/>
                    </View>

                    <View style={{ flex: 0.5, alignSelf: "center", justifyContent: "space-evenly" }}>
                        <GenericButton style={styles.loginButton} title="Confirm" onPress={()=>choosePet(props)}/>
                    </View>

                </ImageBackground>
            </View>
        </>
    );
};

function choosePet(props) {
    //SEND INFO TO DB
    console.log("TESTING PICKPET");

    props.navigation.navigate("Home");
   
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
    title: {
        color: "#1C5C84",
        fontWeight: "bold",
        fontSize: 22
    },
    background: {
        width: '100%',
        height: '100%'
    },
    petBackground: {
        width: 115,
        height: 115,
      //  backgroundColor: "rgba(53, 186, 178, 0.19)",
        borderRadius: 5
    },
    petImages:{
        flex: 1,
        width: null,
         height: null, 
         resizeMode: 'contain'
        }
});

export default PickPetScreen;
