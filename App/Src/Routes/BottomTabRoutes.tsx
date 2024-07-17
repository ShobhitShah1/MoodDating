import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import {IconsPath} from '../Common/AssetsPath';
import {SMALL_IMAGE} from '../Common/GlobalConfig';
import Cards from '../Screen/Cards/Cards';
import Chat from '../Screen/Chat/Chat';
import Home from '../Screen/Home/Home';
import Likes from '../Screen/Likes/Likes';
import Profile from '../Screen/Profile/Profile';
import {COLORS} from '../Theme/Theme';
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
  {name: 'Likes', component: Likes, icon: IconsPath.ic_people_bottom},
  {name: 'Cards', component: Cards, icon: IconsPath.ic_swipeCard},
  {name: 'Chat', component: Chat, icon: IconsPath.ic_chat},
  {name: 'Profile', component: Profile, icon: IconsPath.ic_home},
];

const Icon: React.FC<{
  source: ImageSourcePropType;
  focused: boolean;
  customSource?: string;
}> = ({source, focused, customSource}) =>
  focused ? (
    <View
      style={[
        styles.iconContainer,
        focused && !customSource && styles.iconContainerFocused,
      ]}>
      <Image
        resizeMode="contain"
        source={customSource ? {uri: customSource} : source}
        style={[
          customSource ? styles.bottomProfileStyle : styles.bottomIconStyle,
        ]}
      />
    </View>
  ) : (
    <View style={[styles.iconContainer]}>
      <Image
        source={customSource ? {uri: customSource} : source}
        resizeMode="contain"
        style={[
          customSource ? styles.bottomProfileStyle : styles.bottomIconStyle,
        ]}
      />
    </View>
  );

const getScreenOptions = (
  icon: ImageSourcePropType,
  customSource?: string,
): BottomTabNavigationOptions => ({
  tabBarIcon: ({focused}) => {
    return <Icon source={icon} focused={focused} customSource={customSource} />;
  },
});

const BottomTabRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarHideOnKeyboard: true,
      }}
      backBehavior="history">
      {SCREENS.map(({name, component, icon}) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            tabBarLabel: name,
            ...getScreenOptions(icon, name === 'Profile' ? SMALL_IMAGE : ''),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

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
    tintColor: '#ffffff',
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
  bottomProfileStyle: {
    width: 27,
    height: 27,
    overflow: 'hidden',
    borderRadius: 500,
    resizeMode: 'cover',
  },
});
