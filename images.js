import React, { Component } from 'react'
import {
  Image,
  StyleSheet
} from 'react-native'

/*
const ImagesExample = () => (
  <Image source={require('./assets/loginButton.png')}
    style={styles.loginButton} />  
)*/


const Image2 = () => (
  <Image source = {require('./assets/upperCircle.png')}
  style={styles.upperCircle}/>
)



//600X60
const styles = StyleSheet.create({
  loginButton: {
    position: "absolute",
    top: 420,
    left: 30
  },    
});


export default ImagesExample
