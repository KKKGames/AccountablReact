
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfilePic from '../components/ProfilePic';

const MatchComponent = (props) => (
    <View style={styles.container}>
         <ProfilePic style={styles.circle} />
        <View style={{flexDirection: "column" }}>
            <Text style={{fontSize:16}}>Tom Nathan</Text>
            <Text style={{fontSize:12}}>Tom sent a photo.</Text>
        </View>
        <View>
            <Text>8:00 P.M.</Text>
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
});
export default MatchComponent;
