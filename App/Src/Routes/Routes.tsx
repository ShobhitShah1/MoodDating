import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../Screen/Auth/Login';
import Otp from '../Screen/Auth/Otp';
import {RootStackParamList, screenOptions} from '../Types/Interfaces';
import {navigationRef} from './Helpers/NavigationRef';
import MoodSelect from '../Screen/Auth/MoodSelect';
import Welcome from '../Screen/Auth/Welcome';
import BottomTabRoutes from './BottomTabRoutes';
import Splash from '../Screen/Splash';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="MoodSelect" component={MoodSelect} />
    </Stack.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="BottomTab" component={BottomTabRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
