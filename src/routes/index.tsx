import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Dashboard from '../Pages/DashboardPages';
import Mission from '../Pages/MissionsPage';


const Auth = createStackNavigator();

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};



const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      transitionSpec: {
        open: config,
        close: config
      }
        
      
    }}
  >
    <Auth.Screen name="Dashboard" component={Dashboard} />
    <Auth.Screen name="Mission" component={Mission} />
  </Auth.Navigator>
);

export default AuthRoutes;