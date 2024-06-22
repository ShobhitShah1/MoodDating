/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ImageBackground, StatusBar, Text, View} from 'react-native';
import {ImagesPath} from '../../Common/AssetsPath';
import ButtonView from '../../Common/ButtonView';
import TextString from '../../Common/TestString';
import useCustomNavigation from '../../Routes/Helpers/useCustomNavigation';
import styles from './Styles';

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
