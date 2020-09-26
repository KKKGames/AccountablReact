/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './screens/LoginScreen';  
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import PickPetScreen from './screens/SignupScreen_PickPet';
import InboxScreen from './screens/InboxScreen';
import MatchRequestScreen from './screens/MatchRequestScreen';
import FindYourPartnerScreen from './screens/FindYourPartnerScreen';
import MatchMakerSettingsScreen from './screens/MatchMakerSettingsScreen';
import MatchSearchScreen from './screens/MatchSearchScreen';
import ProfileScreen from './screens/ProfileScreen';


import React from 'react';

import {
  View, Text,
  StyleSheet, Button,
} from 'react-native';



const Stack = createStackNavigator(
);



function Home2Screen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => {
          //send parameters
          navigation.navigate('Login', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
      <Button
        title="Go to Signup"
        onPress={() => {
        navigation.navigate('Signup');
        }}
      />
       <Button
        title="Go to Home"
        onPress={() => {
        navigation.navigate('Home');
        }}
      />
       <Button
        title="Go to pickpet"
        onPress={() => {
        navigation.navigate('PickPet');
        }}
      />
       <Button
        title="Go to Inbox"
        onPress={() => {
        navigation.navigate('Inbox');
        }}
      />
       <Button
        title="Go to Match Request"
        onPress={() => {
        navigation.navigate('MatchRequest');
        }}
      />
       <Button
        title="Go to Matchmaker Settings"
        onPress={() => {
        navigation.navigate('MatchMakerSettings');
        }}
      />
       <Button
        title="Go to Find Your Partner"
        onPress={() => {
        navigation.navigate('FindYourPartner');
        
        }}
      />
      <Button
        title="Go to Profile"
        onPress={() => {
        navigation.navigate('Profile');
        
        }}
      />
      <Button
        title="Go to Match Search"
        onPress={() => {
        navigation.navigate('MatchSearch');
        
        }}
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId } = route.params;
  const { otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}


//where i declare traveling
const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home2" component={Home2Screen}  options= {{headerShown: false}} />
        <Stack.Screen name="Details" component={LoginScreen}  options= {{headerShown: false}} />
        <Stack.Screen name="Login" component={LoginScreen} options= {{headerShown: false}}  />
        <Stack.Screen name="Signup" component={SignupScreen}  options= {{headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen}  options= {{headerShown: false}} />
        <Stack.Screen name="PickPet" component={PickPetScreen}  options= {{headerShown: false}} />
        <Stack.Screen name="Inbox" component={InboxScreen}  options= {{headerShown: false}} />
        <Stack.Screen name="MatchRequest" component={MatchRequestScreen}  options= {{headerShown: false}} />
        <Stack.Screen name="FindYourPartner" component={FindYourPartnerScreen}  options= {{headerShown: false}} />
        <Stack.Screen name="MatchMakerSettings" component={MatchMakerSettingsScreen}  options= {{headerShown: false}} />
        <Stack.Screen name="MatchSearch" component={MatchSearchScreen}  options= {{headerShown: false}} />
        <Stack.Screen name="Profile" component={ProfileScreen}  options= {{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({

});

export default App;
