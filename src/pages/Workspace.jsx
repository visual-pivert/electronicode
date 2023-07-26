import { useRef, useState } from "react";
import { Text, View, Image, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { FlowViewport } from "../flow/flowViewport";

function Workspace() {
    const [menu, setMenu] = useState(true);
    const [properties, setProperties] = useState(true);

    const menu_jsx = useRef(
        <View style={styles.workspace__menu}>
            <Pressable
                onPress={() => {
                    setMenu(false);
                }}
            >
                <Image
                    source={require("./../../assets/icons/burger_menu_active.png")}
                    style={styles.image}
                ></Image>
            </Pressable>
            <View>
                <Image
                    source={require("./../../assets/icons/nav_project.png")}
                    style={styles.image}
                ></Image>
            </View>
            <View>
                <Image
                    source={require("./../../assets/icons/save.png")}
                    style={styles.image}
                ></Image>
            </View>
            <View>
                <Image
                    source={require("./../../assets/icons/compile.png")}
                    style={styles.image}
                ></Image>
            </View>
            <View>
                <Image
                    source={require("./../../assets/icons/notification.png")}
                    style={styles.image}
                ></Image>
            </View>
            <View>
                <Image
                    source={require("./../../assets/icons/connexion_centrale.png")}
                    style={styles.image}
                ></Image>
            </View>
            <View>
                <Image
                    source={require("./../../assets/icons/deconnexion.png")}
                    style={styles.image}
                ></Image>
            </View>
        </View>
    ).current;

    const burger_menu_jsx = useRef(
        <Pressable
            onPress={() => {
                setMenu(true);
            }}
            style={styles.burger__menu}
        >
            <Image
                source={require("./../../assets/icons/burger_menu.png")}
                style={styles.image}
            ></Image>
        </Pressable>
    ).current;

    const properties_jsx = useRef(
        <View style={styles.workspace__propreties}>
            <View style={styles.spacing}>
                <Text style={[styles.text, styles.text__bold]}>
                    About component:
                </Text>
                <View style={{ flexDirection: "row" }}>
                    <Pressable
                        onPress={() => {
                            setProperties(false);
                        }}
                    >
                        <Image
                            source={require("./../../assets/icons/eye_fill.png")}
                            style={styles.image}
                        ></Image>
                    </Pressable>
                    <Image
                        source={require("./../../assets/icons/unlock_fill.png")}
                        style={styles.image}
                    ></Image>
                </View>
            </View>
        </View>
    ).current;

    const eye_icon_jsx = useRef(
        <Pressable
            onPress={() => {
                setProperties(true);
            }}
        >
            <Image
                source={require("./../../assets/icons/eye_icon.png")}
                style={styles.midImage}
            ></Image>
        </Pressable>
    ).current;

    return (
        <View style={{ backgroundColor: colors.purple_main, height: "100%" }}>
            <View style={styles.workspace}>
                {true == menu ? menu_jsx : ""}

                <View style={styles.workspace__main}>
                    {false == menu ? burger_menu_jsx : ""}
                    <View style={styles.workspace__viewport}>
                        <FlowViewport></FlowViewport>
                        <View style={styles.viewport__buttons}>
                            <View style={styles.button__component}>
                                <View style={styles.button__component}>
                                    <Pressable>
                                        <Image
                                            source={require("./../../assets/icons/button_component.png")}
                                            style={styles.midImage}
                                        ></Image>
                                    </Pressable>
                                    {false == properties ? eye_icon_jsx : ""}
                                </View>
                            </View>
                        </View>
                    </View>
                    {true == properties ? properties_jsx : ""}
                </View>
            </View>
        </View>
    );
}

export const colors = {
    purple_main: "#6610F2",
};

const styles = StyleSheet.create({
    workspace: {
        backgroundColor: colors.purple_main,
        height: "100%",
        flexDirection: "row",
        padding: 8,
    },
    workspace__main: {
        flex: 1,
        backgroundColor: "#E7E6E6",
        borderRadius: 20,
        padding: 8,
    },
    workspace__menu: {
        flex: 1,
        maxWidth: 50,
        backgroundColor: colors.purple_main,
        justifyContent: "space-around",
        alignItems: "center",
    },
    workspace__viewport: {
        flex: 2,
        backgroundColor: "white",
        borderRadius: 20,
        position: "relative",
    },
    workspace__propreties: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 8,
        marginTop: 9,
    },
    spacing: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text: {
        fontSize: 14,
    },
    text__bold: {
        fontWeight: "bold",
    },
    burger__menu: {
        position: "absolute",
        zIndex: 10,
        left: 22,
        top: 22,
    },
    viewport__buttons: {
        position: "absolute",
        bottom: 5,
        right: 5,
    },
    image: {
        width: 30,
        height: 30,
    },
    midImage: {
        width: 50,
        height: 50,
    },
});

export { Workspace };
