import React from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, View } from 'react-native';
import First from './Components/First';
import Images from './Components/Images';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Videos from './Components/Videos';


export default function App() {

  const Stack= createNativeStackNavigator();


  return (

    <NavigationContainer>

      <View style={styles.container}>

        <Stack.Navigator initialRouteName="First" >

          <Stack.Screen name='First' component={First} options={{headerShown:false}}/> 
          <Stack.Screen name='Images' component={Images} options={{headerShown:false}}/>
          <Stack.Screen name='Videos' component={Videos} options={{headerShown:false}}/>


        </Stack.Navigator>

        <StatusBar style="auto" />
      </View>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex :1,
  },
  content: {
    flex :1,
  },
});
