/* eslint-disable react/no-unstable-nested-components */
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import BottomTabRoutes from './BottomTabRoutes';
import CustomDrawerContent from './CustomDrawerContent';
import {StyleSheet} from 'react-native';
import Notification from '../Screen/Notification';
import {RootStackParamList} from '../Types/Interfaces';

const Drawer = createDrawerNavigator<RootStackParamList>();

const DrawerTabRoutes = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: styles.container,
        overlayColor: 'rgba(13, 13, 13, 0.88)',
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="BottomTab" component={BottomTabRoutes} />
      <Drawer.Screen name="Notification" component={Notification} />
    </Drawer.Navigator>
  );
};

export default DrawerTabRoutes;

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: 'rgba(234, 234, 234, 0.5)',
  },
});
