import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';


const TextInputLogin = (props) => {
   const {value, onChangeText} = props;
 
  return (
    <View style={styles.container,props.style}>
    <TextInput
        
      placeholder={props.name}
      style={[styles.textInputLogin, props.style]}
      onChangeText={value => onChangeText(value)}
      value={value}
      //underlineColorAndroid="transparent" TODO: LOOK INTO THIS AFTER
    />
    </View>
  
  );
}


const styles = StyleSheet.create({
  container:{flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0)'
  },
  icon:{
  padding: 10
},
  textInputLogin: {
    paddingLeft: 10,
    width: 354,
    height: 44.87165177,
    borderColor: '#E9F0F3',
    borderWidth: 1,
    borderRadius: 12,
    shadowOffset: {width: 0, height:4},
    elevation: 1,
    shadowRadius: 16,
    shadowColor: 'rgba(28, 92, 132, 0.15)',
  }
});
export default TextInputLogin;
