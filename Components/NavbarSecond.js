import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function NavbarSecond() {

  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity  onPress={() => { navigation.navigate('First') }} >
          <Text style={styles.bouton}>Home</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Random Cleaner</Text>
        <View />
      </View>
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(245, 245, 245)',
    paddingTop: 20,
    alignItems: 'center',
    padding: 15,
    top: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 45,
    marginTop : 23,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'black',
    marginTop: 5,
    ...(Platform.OS === 'android'
      ? { elevation: 10 }
      : {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
        }),
  },   
    bouton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3498db', 
        marginLeft: 3,
        marginTop: 20,
  },
});
