import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colors } from "./src/pages/Workspace";

import { Workspace } from "./src/pages/Workspace";
import Accueil1 from "./src/pages/Accueil1";
import Accueil2 from "./src/pages/Accueil2";
import Gestionnaire from "./src/pages/Gestionnaire";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
            <NavigationContainer>
                <StatusBar hidden/>
                <Stack.Navigator initialRouteName="Accueil1">
                    <Stack.Screen
                        name="Accueil1"
                        component={Accueil1}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Accueil2"
                        component={Accueil2}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Workspace"
                        component={Workspace}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Gestionnaire"
                        component={Gestionnaire}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
    );
}
