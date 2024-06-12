import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import {IconsPath} from '../Common/AssetsPath';
import InnerShadow from '../Components/InnerShadow';
import Cards from '../Screen/Cards/Cards';
import Home from '../Screen/Home/Home';
import Likes from '../Screen/Likes/Likes';
import Profile from '../Screen/Profile/Profile';
import {RootStackParamList} from '../Types/Interfaces';

const Tab = createBottomTabNavigator<RootStackParamList>();

let ICON_VIEW_SIZE = 42;

interface ScreenConfig {
  name: keyof RootStackParamList;
  component: React.ComponentType<any>;
  icon: ImageSourcePropType;
}

const SCREENS: ScreenConfig[] = [
  {name: 'Home', component: Home, icon: IconsPath.ic_home},
  {name: 'Cards', component: Cards, icon: IconsPath.ic_swipeCard},
  {name: 'Likes', component: Likes, icon: IconsPath.ic_chat},
  {name: 'Profile', component: Profile, icon: IconsPath.ic_home},
];

const Icon: React.FC<{source: ImageSourcePropType; focused: boolean}> = ({
  source,
  focused,
}) =>
  focused ? (
    <InnerShadow
      shadowColor={focused ? '#e91e63' : 'transparent'}
      style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
      <Image
        source={source}
        resizeMode="contain"
        style={[styles.bottomIconStyle, styles.bottomIconStyleFocused]}
      />
    </InnerShadow>
  ) : (
    <View style={[styles.iconContainer]}>
      <Image
        source={source}
        resizeMode="contain"
        style={styles.bottomIconStyle}
      />
    </View>
  );

const getScreenOptions = (
  icon: ImageSourcePropType,
): BottomTabNavigationOptions => ({
  tabBarIcon: ({focused}) => <Icon source={icon} focused={focused} />,
  tabBarActiveTintColor: '#e91e63',
  tabBarInactiveTintColor: '#666',
});

const BottomTabRoutes: React.FC = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: styles.tabBarStyle,
      tabBarShowLabel: false,
      headerShown: false,
    }}>
    {SCREENS.map(({name, component, icon}) => (
      <Tab.Screen
        key={name}
        name={name}
        component={component}
        options={{
          tabBarLabel: name,
          ...getScreenOptions(icon),
        }}
      />
    ))}
  </Tab.Navigator>
);

export default BottomTabRoutes;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    bottom: 20,
    left: '5%',
    right: '5%',
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 1,
    borderTopWidth: 1.2,
    borderColor: '#e91e63',
  },
  bottomIconStyle: {
    width: ICON_VIEW_SIZE / 2,
    height: ICON_VIEW_SIZE / 2,
    tintColor: '#666',
  },
  bottomIconStyleFocused: {
    tintColor: '#ffffff',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: ICON_VIEW_SIZE,
    height: ICON_VIEW_SIZE,
    borderRadius: 500,
    overflow: 'hidden',
  },
  iconContainerFocused: {
    padding: 5,
    borderRadius: 25,
    backgroundColor: '#e91e63',
  },
  innerShadow: {
    borderRadius: 25,
  },
});
