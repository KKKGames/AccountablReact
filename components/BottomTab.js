import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import fontelloConfig from '../config.json';
import { createIconSetFromFontello } from 'react-native-vector-icons';

const Icon = createIconSetFromFontello(fontelloConfig);


const Background = () => (
    <Image source={require('../assets/matchIconCircle.png')}
        style={styles.username}
    />
);
const matchIconSize=32
const iconSize=20
const iconColour= "rgba(255, 255, 255, 0.45)"

//TODO LOOK AT MARGIN 
const BottomTab = () => (
    <View style={{ flex: 1, flexDirection: "column" }}>
        <View style={styles.circle}>
            <Icon name="match" size={matchIconSize} color="red" style={{ zIndex: 1, paddingVertical: 18 }} />
            <Image style={{ position: "absolute" }} source={require('../assets/matchIconCircle.png')}></Image>
        </View>
        <View style={styles.bottomBar}>
            <Icon name="home" size={iconSize} color={iconColour} />
            <Icon name="calendar" size={iconSize} color={iconColour} />
            <View></View>
            <Icon name="sunglasses" size={iconSize} color={iconColour} />
            <Icon name="shop" size={iconSize} color={iconColour} />
        </View>
        
    </View>
);


const styles = StyleSheet.create({
    bottomBar: {
        // position: "absolute",
        width: 414,
        height: 68.53124998,
        backgroundColor: "#1C5C84",
        justifyContent: "space-between",
        flexDirection: "row",
        alignContent: "stretch",
        //idk bout this
        padding: "5%",
        flex: 0.7,
    },
    circle: {
        alignItems: "center",
        flex: 1,
        zIndex: 1

    },
   /* rectangle:{
        position:"absolute",
        flex:1,
        width: 120,
        height: 6,
        backgroundColor: "#C1C1C1",
        borderRadius: 8,
        zIndex:1,
        justifyContent:"flex-end"
    }
*/
});
export default BottomTab;
