/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {IconsPath, ImagesPath} from '../../Common/AssetsPath';
import ButtonView from '../../Common/ButtonView';
import TextString from '../../Common/TestString';
import OTPInput from '../../Components/OTPInput';
import useCustomNavigation from '../../Routes/Helpers/useCustomNavigation';
import styles from './Styles';
import {COLORS} from '../../Theme/Theme';

const Otp = () => {
  const navigation = useCustomNavigation();
  const [OTPValue, setOTPValue] = useState('');

  return (
    <SafeAreaView style={styles.Container}>
      <ImageBackground
        style={styles.Container}
        source={ImagesPath.SplashBackground}
        blurRadius={30}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <View style={styles.blackOverly} />
        <ScrollView
          bounces={false}
          nestedScrollEnabled={true}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainerStyle}>
          <View>
            <View style={styles.headerContainer}>
              <ButtonView
                ContainerStyle={styles.headerBackButtonView}
                onPress={() => navigation.goBack()}>
                <Image
                  tintColor={COLORS.White}
                  source={IconsPath.ic_back}
                  style={styles.headerBackIcon}
                />
              </ButtonView>
            </View>

            <View style={styles.titleTextView}>
              <Text style={styles.titleText}>Phone Verification</Text>
              <Text style={styles.otpDescriptionText}>Enter OTP Code Here</Text>
            </View>

            <View style={styles.otpBoxContainer}>
              <OTPInput
                value={OTPValue}
                cellSpacing={30}
                cellSize={55}
                onChangeText={setOTPValue}
                cellStyle={styles.otpCellStyle}
                textStyle={styles.otpTextStyle}
                containerStyle={styles.otpBoxViewStyle}
                onFulfill={v => console.log('Fill', v)}
                cellStyleFilled={styles.otpCellStyleFilled}
                cellStyleFocused={styles.otpCellStyleFocused}
              />
            </View>
          </View>

          <View style={styles.otpBottomContainer}>
            <View style={styles.bottomTextView}>
              <Text style={styles.donNotHaveCodeText}>
                {TextString.NotReceivedCode}
              </Text>
              <Text style={styles.resendOTPtext}>
                {TextString.ResendNewCode}
              </Text>
            </View>

            <ButtonView
              title={TextString.Verify}
              ContainerStyle={[
                styles.ButtonStyle,
                {marginTop: 10, marginBottom: 30},
              ]}
              onPress={() => navigation.navigate('MoodSelect')}
              TextStyle={styles.ButtonTextStyle}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Otp;
