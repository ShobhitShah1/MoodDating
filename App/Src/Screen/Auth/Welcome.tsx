/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import styles from './Styles';
import ButtonView from '../../Common/ButtonView';
import useCustomNavigation from '../../Routes/Helpers/useCustomNavigation';
import {COLORS} from '../../Theme/Theme';
import TextString from '../../Common/TestString';

const Welcome = () => {
  const navigation = useCustomNavigation();
  return (
    <View style={styles.Container}>
      <View style={styles.contentView}>
        <View style={styles.welcomeTopView}>
          <Text style={{color: COLORS.Black}}>Logo here</Text>
        </View>

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
            ContainerStyle={[
              styles.ButtonStyle,
              {
                marginVertical: 25,
              },
            ]}
            onPress={() => navigation.navigate('Login')}
            TextStyle={styles.ButtonTextStyle}
          />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
