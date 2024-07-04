import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {IconsPath} from '../Common/AssetsPath';

const {height} = Dimensions.get('window');

const CommonHeaderView = () => {
  return (
    <View style={styles.container}>
      <Image source={IconsPath.ic_leftArrow} style={styles.leftArrowIcon} />
    </View>
  );
};

export default CommonHeaderView;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    overflow: 'hidden',
    height: height * 0.05,
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  leftArrowIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});
