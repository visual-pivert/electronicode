import { Text, View, Image, ScrollView, Pressable } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

class Gestionnaire extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.bigBackground}>
                <ScrollView style={styles.background}>
                    <ProjetBasis navigation={this.props.navigation} />
                </ScrollView>
                <Pressable style={styles.btnTutoriel}>
                    <View style={styles.tutoriel}>
                        <Text
                            style={{
                                textTransform: "uppercase",
                                color: "#fff",
                                fontWeight: "bold",
                            }}
                        >
                            revoir le tutoriel
                        </Text>
                    </View>
                </Pressable>
            </View>
        );
    }
}

function Projet({ navigation }) {
    return (
        <View style={styles.projetbasis}>
            <ProjetCarre type="add" navigation={navigation} />
            <ProjetCarre
                type="projet"
                pins={["projet"]}
                navigation={navigation}
            />
            <ProjetCarre
                type="projet"
                pins={["compile", "televerse"]}
                navigation={navigation}
            />
        </View>
    );
}

function ProjetCarre(props) {
    let view;

    const pressEvent = React.useCallback(() => {
        props.navigation.navigate("Workspace");
    });

    if (props.type === "add") {
        view = (
            <Pressable onPress={pressEvent} style={styles.carre}>
                <Image
                    source={require("./../../assets/img/Add.png")}
                    style={styles.img}
                />
            </Pressable>
        );
    } else {
        view = (
            <Pressable style={styles.carre} onPress={pressEvent}>
                <Image
                    source={require("./../../assets/img/miniature.png")}
                    style={styles.img}
                ></Image>
                <View style={styles.pinContainer}>
                    <Image
                        source={require("./../../assets/img/compile.png")}
                        style={styles.pin}
                    />
                    <Image
                        source={require("./../../assets/img/televerse.png")}
                        style={styles.pin}
                    />
                </View>
            </Pressable>
        );
    }

    return view;
}

function ProjetBasis({ navigation }) {
    return <Projet navigation={navigation} />;
}

const styles = StyleSheet.create({
    bigBackground: {
        flex: 1,
        backgroundColor: "#6610f2",
        height: "100%",
        // maxHeight: 851, //TODO: doit s'adapter à l'appareil au futur
        position: "relative",
    },
    background: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 10,
        marginBottom: 24,
        backgroundColor: "#fff",
        borderRadius: 20,
        paddingHorizontal: 14,
        overflow: "scroll",
        height: "100%",
    },
    projetbasis: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        // overflow: "auto",
    },
    carre: {
        width: 138,
        height: 149,
        backgroundColor: "#D9D9D9",
        margin: 14,
        position: "relative",
        borderRadius: 20,
    },
    img: {
        width: 138,
        height: 149,
        borderRadius: 20,
    },
    pin: {
        width: 24,
        height: 24,
        marginBottom: 10,
    },
    pinContainer: {
        position: "absolute",
        right: -10,
        top: -10,
    },
    tutoriel: {
        backgroundColor: "#a370f7",
        borderRadius: 20,
        padding: 10,
        width: 100,
    },
    btnTutoriel: {
        position: "absolute",
        bottom: 40,
        right: 20,
        textAlign: "center",
    },
});

export default Gestionnaire;
