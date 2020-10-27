import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Dashboard from "../Pages/DashboardPage";
import Details from "../Pages/DetailsMissionPage";
import Mission from "../Pages/MissionsPage";

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: "horizontal",
    }}
  >
    <Auth.Screen name="Dashboard" component={Dashboard} />
    <Auth.Screen name="Mission" component={Mission} />
    <Auth.Screen name="Details" component={Details} />
  </Auth.Navigator>
);

export default AuthRoutes;
