import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';


const GenericButton = (props) => (
    <TouchableOpacity onPress={ () => props.onPress()}>
    <View style={[styles.button, props.style]}>  
        <View style= {{justifyContent:"center"}}>   
            <Text style={styles.text}> {props.title}</Text>
        </View>
     </View>
     </TouchableOpacity>

);


const styles = StyleSheet.create({
    button: {
       // position: "absolute",
        width: 354,
        height: 48.9,
        //left: 30,
        //top: 586,
        borderRadius: 12,
        backgroundColor: "#1C5C84",
        justifyContent: "center",
    },
    text: {
        alignSelf:"center",
        fontSize: 16,
      //  fontFamily: 'times',
        color: "#FFFFFF"
    }
});
export default GenericButton;
