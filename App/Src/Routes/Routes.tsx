import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../Screen/Auth/Login';
import MoodSelect from '../Screen/Auth/MoodSelect';
import Otp from '../Screen/Auth/Otp';
import Welcome from '../Screen/Auth/Welcome';
import Splash from '../Screen/Splash';
import {RootStackParamList, screenOptions} from '../Types/Interfaces';
import DrawerTabRoutes from './DrawerTabRoutes';
import {navigationRef} from './Helpers/NavigationRef';
import UserCardDetail from '../Screen/Detail/UserCardDetail';
import ChatRoom from '../Screen/Chat/ChatRoom';

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
      <Stack.Navigator
        screenOptions={screenOptions}
        // initialRouteName="DrawerTab"
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="DrawerTab" component={DrawerTabRoutes} />
        <Stack.Screen name="UserCardDetail" component={UserCardDetail} />
        <Stack.Screen name="ChatRoom" component={ChatRoom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
