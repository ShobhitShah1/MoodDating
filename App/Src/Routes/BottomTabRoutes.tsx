import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import {IconsPath} from '../Common/AssetsPath';
import Cards from '../Screen/Cards/Cards';
import Home from '../Screen/Home/Home';
import Likes from '../Screen/Likes/Likes';
import Profile from '../Screen/Profile/Profile';
import {COLORS} from '../Theme/Theme';
import {RootStackParamList} from '../Types/Interfaces';
import Chat from '../Screen/Chat/Chat';

const Tab = createBottomTabNavigator<RootStackParamList>();

let ICON_VIEW_SIZE = 42;

interface ScreenConfig {
  name: keyof RootStackParamList;
  component: React.ComponentType<any>;
  icon: ImageSourcePropType;
}

const SCREENS: ScreenConfig[] = [
  {name: 'Home', component: Home, icon: IconsPath.ic_home},
  {name: 'Likes', component: Likes, icon: IconsPath.ic_people_bottom},
  {name: 'Cards', component: Cards, icon: IconsPath.ic_swipeCard},
  {name: 'Chat', component: Chat, icon: IconsPath.ic_chat},
  {name: 'Profile', component: Profile, icon: IconsPath.ic_home},
];

const Icon: React.FC<{source: ImageSourcePropType; focused: boolean}> = ({
  source,
  focused,
}) =>
  focused ? (
    <View
      style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
      <Image
        source={source}
        resizeMode="contain"
        style={[styles.bottomIconStyle, styles.bottomIconStyleFocused]}
      />
    </View>
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
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: styles.tabBarStyle,
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
    backgroundColor: COLORS.Black,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 3,
    borderTopWidth: 3.2,
    borderColor: COLORS.White,
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
  },
  innerShadow: {
    borderRadius: 25,
  },
});
