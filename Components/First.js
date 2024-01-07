import { StyleSheet, TouchableOpacity,Text, View, ImageBackground } from "react-native";
import Footer from "./Footer";
import { useNavigation } from "@react-navigation/native";
import Navbar from "./Navbar";

export default function First () {

  const navigation = useNavigation();

    return (
      <View style={styles.containerAll}>
          <Navbar />
      <ImageBackground  source={require('../assets/theme.jpg')}
      style={styles.background} >
        <View style={styles.container}>
            <TouchableOpacity    onPress={() => { navigation.navigate('Images') }}  style={styles.bouton}>
                 <Text style={styles.texteBouton}>Clean images !</Text>
            </TouchableOpacity> 
            <TouchableOpacity    onPress={() => { navigation.navigate('Videos') }}  style={styles.bouton}>
                 <Text style={styles.texteBouton}>Clean videos ! </Text>
            </TouchableOpacity> 
        </View>
      </ImageBackground>
      <Footer />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    containerAll : {
      flex: 1,
    },
    background : {
      flex: 1,
      resizeMode: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      },
    bouton: {
        backgroundColor: '#3498db', 
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5, 
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
      },
      texteBouton: {
        fontSize: 16,
      },
})