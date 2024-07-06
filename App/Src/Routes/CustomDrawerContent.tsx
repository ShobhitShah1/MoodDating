import {BlurView} from '@react-native-community/blur';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import React, {memo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DrawerData} from '../Store/Data/LocalData';
import {COLORS, FONTS} from '../Theme/Theme';
import {SMALL_IMAGE} from '../Common/GlobalConfig';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.containContainer}>
      <BlurView style={styles.absolute} blurType="dark" blurAmount={15}>
        <View style={styles.logoContainer}>
          <Image source={{uri: SMALL_IMAGE}} style={styles.logo} />
        </View>

        {DrawerData.map((res, index) => {
          return (
            <View key={index} style={styles.drawerListContainer}>
              <Image source={res.icon} style={styles.drawerIcon} />
              <Text style={styles.drawerName}>{res.name}</Text>
            </View>
          );
        })}
      </BlurView>
    </DrawerContentScrollView>
  );
};

export default memo(CustomDrawerContent);

const styles = StyleSheet.create({
  containContainer: {
    flex: 1,
  },
  absolute: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  drawerListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 22,
    marginHorizontal: 12,
  },
  drawerIcon: {
    height: 26,
    width: 26,
    marginLeft: 20,
  },
  drawerName: {
    marginLeft: 12,
    color: COLORS.White,
    fontFamily: FONTS.Regular,
    fontSize: 16,
  },
  logoContainer: {
    marginTop: 75,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 90,
    height: 90,
    borderWidth: 1.5,
    borderColor: COLORS.White,
    borderRadius: 500,
  },
});
