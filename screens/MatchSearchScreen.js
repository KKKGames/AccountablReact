import 'react-native-gesture-handler';
import React from 'react';

import HeaderCustom from '../components/Header';
import BottomTab from '../components/BottomTab';

import RequestMatchComponent from '../components/RequestMatchComponent';
import TextInputLogin from '../components/TextInputLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {USERNAME_KEY} from '../common/constants';

import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text, Button
} from 'react-native';
import { useEffect } from 'react';

var username, category, frequency, ageMin, ageMax;

const getData = async () => {
  try {
    console.log(USERNAME_KEY);
    const value = await AsyncStorage.getItem('@save_user')
    if(value !== null) {
      // value previously stored
      console.log("yes: ");
      console.log(value);
      username=value;
    }else{
      console.log("ok: " + value);
    }
  } catch(e) {
    // error reading value
    console.log(e);
  }

  //second method
  getUserInfo();


}

//MAPPING FOR FOR LOOP EXAMPLE
/*
const MatchComponents=() => {
  const numbers = [1, 2,3,33];
  return(
  <View>
  {numbers.map(r=><Text>{r}</Text>)}
  </View>
  );
}
*/
var matchedUsers =[];

const MatchComponents=() => {
  //const matchedUsers = [{"name": "test", "age": "16", "categories": "Coding"}, {"name":"test2", "age": "36", "categories": "Coding2"}]; 
  return(
  <View>
  {matchedUsers.map(result=><RequestMatchComponent name={result.Name} age={result.Age} category={result.Category}></RequestMatchComponent>)}
  </View>
  );
}

const MatchSearchScreen: () => React$Node = () => {
  useEffect(()=> {
    //do async work
    console.log("RENDER")
    getData();
  })



  return (
    <>
      <View style={{ flex: 1}}>
            <View style={{ flex: 0.2, }}>
            <HeaderCustom title="We Found X Potential Matches"></HeaderCustom>
          </View>
          
          <View style={{ flex: 1.75,}}>
          <TextInputLogin name="Start new search" style={styles.search} />
          <MatchComponents></MatchComponents>
           </View>

          <View style={{ flex: 0.28 }}>
            <BottomTab />
          </View>
      </View>
    </>
  );
};

const getUserInfo = async() =>{
  //getData();
  //
  var url = new URL('http://10.0.2.2:3000/getUserInfo');
  url.searchParams.append('Username', username);
  console.log(url);
  await fetch(url, {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
    },  
  }).then((response) => response.json())
  .then((responseData)=>{
    console.log(responseData);
    username=responseData.Username;
    category=responseData.Category;
    frequency=responseData.Frequency;
    //AGEMIN AND AGEMAX MISSING
    ageMin= 18;
    ageMax= 34;
    console.log("FINISHED GETUSERINFO")
  }).catch((error) => {
    console.error(error);
  });

    //third method
  renderMatch();

}


function renderMatch(){

  //HARDCODED
 //username="shadowhq";
 // category="CODING";
  //frequency="CONSTANT";
  
//getUserInfo();

console.log("LIST: " + username + category + frequency+ageMin + ageMax)

    fetch('http://10.0.2.2:3000/match', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Username: username,
      Category: category,
      Frequency: frequency,
      AgeMin: ageMin,
      AgeMax: ageMax
    })
  }).then((response) => response.json())
      .then((responseData) => {
     matchedUsers= responseData;
    //for loop to create number of ppl
    //if (responseData == "SUCCESS") {
 //     }
    }).catch((error) => {
      console.error(error);
    });
}


const styles = StyleSheet.create({
  search:{
    shadowOffset: {width: 0, height:4},
    elevation: 1,
    shadowRadius: 16,
    shadowColor: 'rgba(28, 92, 132, 0.15)',
  }
});

export default MatchSearchScreen;
