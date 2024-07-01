import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {ImagesPath} from '../Common/AssetsPath';

const ScreenWrapper: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <ImageBackground
      style={styles.container}
      source={ImagesPath.SplashBackground}
      blurRadius={80}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView style={styles.contentView}>{children}</SafeAreaView>
    </ImageBackground>
  );
};

export default ScreenWrapper;

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
});
