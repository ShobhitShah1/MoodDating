import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Home from '../Screen/Home/Home';

const Drawer = createDrawerNavigator();

const DrawerTabRoutes = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

export default DrawerTabRoutes;
