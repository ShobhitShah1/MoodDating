import React, {memo} from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {ImagesPath} from '../Common/AssetsPath';

const {width, height} = Dimensions.get('window');

const ScreenWrapper: React.FC<{
  children: React.ReactNode;
  containerStyle?: ViewStyle;
}> = ({children, containerStyle}) => {
  return (
    <ImageBackground
      style={styles.container}
      source={ImagesPath.SplashBackground}
      blurRadius={80}>
      <View style={styles.blackView} />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView style={[styles.contentView, containerStyle]}>
        {children}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default memo(ScreenWrapper);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#F8EBEE',
  },
  contentView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: StatusBar.currentHeight,
  },
  blackView: {
    width: width,
    height: height + 50,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
});
