import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const HeaderCustom = (props) => (
    <View style={styles.headerBar}>
            <Text style={styles.text}> {props.title}</Text>    
    </View>
    
);


const styles = StyleSheet.create({
    headerBar: {
        flex:1,
        width: 414,
        height: 81.5848214,
        backgroundColor: "#1C5C84",
        justifyContent: "center"
     },
    text: {
        alignSelf:"center",
        fontSize: 16,
      //  fontFamily: 'times',
        color: "#FFFFFF"
    }

});
export default HeaderCustom;
