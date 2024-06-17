import React, {useEffect} from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ImagesPath} from '../Common/AssetsPath';
import useCustomNavigation from '../Routes/Helpers/useCustomNavigation';
import {COLORS} from '../Theme/Theme';
import {IMAGE_BLUR} from '../Common/GlobalConfig';

const Splash = () => {
  const navigation = useCustomNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('AuthStack');
    }, 2000);
  }, [navigation]);

  return (
    <ImageBackground
      blurRadius={IMAGE_BLUR}
      source={ImagesPath.SplashBackground}
      style={styles.container}>
      <View style={styles.overlayColor}>
        <Image source={ImagesPath.AppLogo} style={styles.appLogo} />
        <Text style={styles.datingAppText}>DATING APP</Text>
      </View>
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlayColor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  appLogo: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  datingAppText: {
    color: COLORS.White,
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
