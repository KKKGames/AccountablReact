import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const Pet = () => (
    <Image source={require('../assets/pets/Turtle.png')} style={styles.pet}
    />
  );

const ProfilePic = (props) => (
            <View style={styles.circle,props.style}>
              <Pet></Pet>
            </View>
);


const styles = StyleSheet.create({
    pet: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
      },
      circle: {
        backgroundColor: "#ECF4FB",
        alignSelf: "center",
        width: 200,
        height: 200,
        borderRadius: 100,
      },
});
export default ProfilePic;
