import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import route from "color-convert/route";
import CreditsScreen from "./src/CreditsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.textStyling}>Home</Text>
        <Button
          color="pink"
          title="Review the Details"
          onPress={() => navigation.navigate("About")}
        />
      </View>
    );
  }

  function AboutScreen({ route, navigation }) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.textStyling}>About</Text>

        <Button
          color="pink"
          title="Go to Credits"
          onPress={() => navigation.navigate("Credits")}
        />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: "pink",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: "pink",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <Button
                color="pink"
                title="Back to Home"
                onPress={() => navigation.popToTop()}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Credits"
          getComponent={() => require("./src/CreditsScreen").default}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: "pink",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <Button
                color="pink"
                title="Back to Home"
                onPress={() => navigation.popToTop()}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyling: {
    marginBottom: 10,
    color: "pink",
    fontWeight: "bold",
    fontSize: 30,
  },
});
