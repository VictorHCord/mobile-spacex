import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import "react-native-gesture-handler";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" translucent  />
        <Routes />
    </NavigationContainer>
  );
};

export default App;
