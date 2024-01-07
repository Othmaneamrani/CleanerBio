import { StyleSheet, View ,Text} from "react-native";

export default function Footer () {
    return (
        <View>
            <View style={styles.container}>

                <View style={styles.line}></View>

        <View style={styles.textContainer}>
            <Text style={{fontWeight: 'bold',}}>By Hotman Armani</Text>
        </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(245, 245, 245)',
        padding: 10,
        paddingTop : 0,
        width: '100%',
    },
    line: {
        width: '100%',
        height: 0.5,
        backgroundColor: 'black',
      },
    textContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10,
        width: "100%",
    }, 
})