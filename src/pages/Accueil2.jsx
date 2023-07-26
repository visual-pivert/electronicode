import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Animated,
    PanResponder,
} from "react-native";
import { ImageBackground } from "react-native";

const Accueil2 = ({ navigation }) => {
    const pan = new Animated.ValueXY();

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
        onPanResponderRelease: (e, gestureState) => {
            if (Math.abs(gestureState.dx) > 100) {
                if (gestureState.dx > 0) {
                    //swipe droite
                    navigation.navigate("Accueil1");
                } else {
                    //swipe gauche
                    navigation.navigate("Accueil1");
                }
            }
            Animated.spring(pan, {
                toValue: { x: 0, y: 0 },
                useNativeDriver: false,
            }).start();
        },
    });

    const handleButtonPress = () => {
        // alert("Mode tutoriel");
        navigation.navigate("Gestionnaire")
    };

    return (
        <View style={styles.container}>
            <Animated.View
                style={{
                    transform: [{ translateX: pan.x }, { translateY: 0 }],
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                }}
                {...panResponder.panHandlers}
            >
                <View style={styles.ellipseContainer}>
                    <View style={styles.ellipse}>
                        <Image
                            source={require("./../../assets/img/LOGO2.png")}
                            style={{
                                width: 290,
                                height: 230,
                                borderRadius: 150,
                            }}
                        />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={handleButtonPress} color="grey">
                        {/* <ImageBackground
                    source={require('../sary/next.png')}
                    style = {styles.buttonBackground}
                    imageStyle={{borderRadius: 5}}
                    > */}
                        <Text style={styles.paragraph}>
                            Commencer le tutoriel
                        </Text>
                        {/* </ImageBackground> */}
                    </TouchableOpacity>
                </View>

                <View style={styles.pastilleContainer}>
                    <View style={styles.pastille2}></View>
                    <View style={styles.pastille1}></View>
                </View>
            </Animated.View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#6610F2",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        //padding : 20,
        //borderRadius: "20px",
    },
    paragraph: {
        textAlign: "center",
        color: "white",
        fontSize: 43,
        fontFamily: "Roboto",
        position: "absolute",
        top: "43%",
        fontWeight: "bold",
        textShadowColor: "rgba(0, 0, 0, 0.76)", //couleur ombre
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3,
        //left: '25%',
        //rigth: '50%' ,
    },
    ellipse: {
        width: 290,
        height: 230,
        borderRadius: 150,
        overflow: "hidden",
    },
    ellipseContainer: {
        width: 290,
        height: 230,
        transform: [{ rotate: "60deg" }],
    },
    blurContainer: {
        flex: 1,
        width: 290,
        height: 230,
        borderRadius: 150,
        overflow: "hidden",
    },
    pastille1: {
        width: 30,
        height: 30,
        backgroundColor: "white",
        borderRadius: 25,
        margin: 10,
    },
    pastille2: {
        width: 20,
        height: 20,
        backgroundColor: "white",
        borderRadius: 25,
        margin: 10,
    },
    pastilleContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        top: "30%",
    },
    buttonBackground: {
        width: 50,
        height: 50,
    },
    buttonContainer: {
        width: 300,
        height: 170,
        borderWidth: 2,
        borderColor: "black",
        position: "absolute",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: "#6610F2",
        opacity: 0.5,
    },
});

export default Accueil2;
