import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {IconsPath} from '../Common/AssetsPath';
import ButtonView from '../Common/ButtonView';
import useCustomNavigation from '../Routes/Helpers/useCustomNavigation';

const {height} = Dimensions.get('window');

const CommonHeaderView = () => {
  const navigation = useCustomNavigation();

  return (
    <View style={styles.container}>
      <ButtonView
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          }
        }}>
        <Image source={IconsPath.ic_leftArrow} style={styles.leftArrowIcon} />
      </ButtonView>
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
  },
  leftArrowIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});
