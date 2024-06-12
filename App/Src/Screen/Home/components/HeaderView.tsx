import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {IconsPath} from '../../../Common/AssetsPath';
import {COLORS} from '../../../Theme/Theme';

let ICON_VIEW_SIZE = 40;

const HeaderView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <Image
          resizeMode="contain"
          style={styles.icons}
          source={IconsPath.ic_menu}
        />
      </View>

      <View>
        <></>
      </View>
      <View style={styles.iconsContainer}>
        <Image
          resizeMode="contain"
          style={styles.icons}
          source={IconsPath.ic_notification}
        />
      </View>
    </View>
  );
};

export default HeaderView;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconsContainer: {
    width: ICON_VIEW_SIZE,
    height: ICON_VIEW_SIZE,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: COLORS.Primary,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  icons: {
    width: ICON_VIEW_SIZE / 1.9,
    height: ICON_VIEW_SIZE / 1.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadowContainer: {
    position: 'relative',
  },
  topShadow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 10,
  },
});
