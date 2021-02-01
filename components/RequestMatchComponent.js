
import React from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProfilePic from '../components/ProfilePic';
import GenericButton from './Button'

const RequestMatchComponent = (props) => {
    const [value, setValue] = React.useState('Match');
    

    function requestPending(user){
        var requestSender = "shadowhq";
        console.log("Request Pending")
        setValue("Pending")
        //post function 
        fetch('http://10.0.2.2:3000/pendingMatch', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            //using username for now
            body: JSON.stringify({
              Username: user,
              RequestSender: requestSender
            }) 
          }).then((response) => response.json())
            .then((responseData) => {
              console.log('response object:', responseData)
                //change to pending
              if (responseData == "SUCCESS") {
                //setValue("Pending");
                console.log("temporary success hodler");
            }
            }).catch((error) => {
              console.error(error);
            });
    }

return (
    <View style={styles.container}>
         <ProfilePic style={styles.circle} />
        <View style={{flexDirection: "column" }}>
            <Text style={{fontSize:16}}>{props.name}</Text>
            <Text style={{fontSize:12}}>{props.category}</Text>
            <Text style={{fontSize:12}}>Age: {props.age}</Text>      
        </View>
        <View>
            {/*hard coded shadowhq for now*/}
          <GenericButton title={value} style={styles.button} onPress={()=>requestPending("holejago")}/>
        </View>
    </View>
    );
}




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
