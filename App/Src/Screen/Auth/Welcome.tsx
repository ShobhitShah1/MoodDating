/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ImageBackground, StatusBar, Text, View} from 'react-native';
import {ImagesPath} from '../../Common/AssetsPath';
import ButtonView from '../../Common/ButtonView';
import TextString from '../../Common/TestString';
import styles from './Styles';
import LinearGradient from 'react-native-linear-gradient';
import useCustomNavigation from '../../Helpers/useCustomNavigation';

const Welcome = () => {
  const navigation = useCustomNavigation();
  return (
    <ImageBackground
      style={[styles.Container, {backgroundColor: 'rgba(0,0,0,0.5)'}]}
      source={ImagesPath.WelcomeBackground}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <LinearGradient
        end={{x: 0, y: 0}}
        start={{x: 0, y: 1}}
        style={{position: 'absolute', bottom: 0, height: '100%', width: '100%'}}
        colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.2)']}
      />
      <View style={styles.backgroundColor}>
        <View style={styles.contentView}>
          <View style={styles.welcomeBottomView}>
            <View style={styles.welcomeTextContainerView}>
              <Text style={styles.welcomeTitleText}>
                {TextString.LetsGetCloser}
              </Text>
              <Text style={styles.welcomeDescriptionText}>
                {TextString.TheBestPlaceToMeet}
              </Text>
            </View>

            <ButtonView
              title={TextString.GetStarted}
              ContainerStyle={[styles.ButtonStyle]}
              onPress={() => navigation.navigate('Login')}
              TextStyle={styles.ButtonTextStyle}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Welcome;
