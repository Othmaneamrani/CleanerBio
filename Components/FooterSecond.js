import { StyleSheet ,View,Image } from "react-native";
import iconDelete from '../assets/iconDelete.png';
import iconShare from '../assets/iconShare.png';
import iconChange from '../assets/iconChange.png';
import arrowLeft from '../assets/arrowLeft.png';
import arrowRight from '../assets/arrowRight.png';


import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";

export default function FooterSecond({updateGallery , deleteMedia , ShareMedia}) {

    return (
        <GestureHandlerRootView  style={styles.container} >

            <View style={styles.line}></View>
            
            <View style={styles.textContainer}>
                <TouchableOpacity style={styles.icon}  onPress={ ()=> deleteMedia()} >
                    <Image style={styles.image} source={iconDelete} ></Image >
                    <Image style={styles.arrow} source={arrowLeft} ></Image > 
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon} onPress={ () => updateGallery() } >
                    <Image style={styles.image} source={iconChange} ></Image >
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}  onPress={ () => ShareMedia() } >
                    <Image style={styles.image} source={iconShare} ></Image > 
                    <Image style={styles.arrow} source={arrowRight} ></Image > 
                </TouchableOpacity> 
            </View>
         </GestureHandlerRootView> 
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%',
    },
    line: {
        width: '100%',
        height: 0.5,
        backgroundColor: 'black',
      },
    textContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        width: "100%",
    }, 
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    image : {
        width: 40, 
        height: 40, 
    },
    arrow : {
        width: 20, 
        height: 20, 
    },
  });
  