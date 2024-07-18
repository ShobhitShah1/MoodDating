import React, {memo} from 'react';
import {
  Dimensions,
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {ImagesPath} from '../Common/AssetsPath';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('window');

export const blackView: ViewStyle = {
  width: width,
  height: height + 50,
  position: 'absolute',
  backgroundColor: 'rgba(0,0,0,0.6)',
};

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
