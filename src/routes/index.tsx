import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Dashboard from '../Pages/DashboardPages';
import Mission from '../Pages/MissionsPage';


const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
  }}
  >
    <Auth.Screen name="Dashboard" component={Dashboard} />
    <Auth.Screen name="Mission" component={Mission} />

  </Auth.Navigator>
)

export default AuthRoutes;