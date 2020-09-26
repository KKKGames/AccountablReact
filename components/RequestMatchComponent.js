
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfilePic from '../components/ProfilePic';
import GenericButton from './Button'

const RequestMatchComponent = (props) => (
    <View style={styles.container}>
         <ProfilePic style={styles.circle} />
        <View style={{flexDirection: "column" }}>
            <Text style={{fontSize:16}}>Tom Nathan</Text>
            <Text style={{fontSize:12}}>Fitness</Text>
            <Text style={{fontSize:12}}>Age: 37</Text>      
        </View>
        <View>
            <GenericButton title="Match" style={styles.button}/>
        </View>
    </View>
);


const styles = StyleSheet.create({
    container:{flexDirection: "row", justifyContent: "space-around", alignItems:"center"},
    circle: {
        //backgroundcolor should always asked
        backgroundColor: "orange",
        width: 88,
        height: 88,
        borderRadius: 176,
    },
    button:{
        width: 66,
        height: 33,
        borderRadius:7,
    }
});
export default RequestMatchComponent;
