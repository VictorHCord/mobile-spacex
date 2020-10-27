import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import "react-native-gesture-handler";
import Routes from "./routes";
import { client } from "./services/index";


const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <Routes />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
