/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import OTPInput from '../../Components/OTPInput';
import useCustomNavigation from '../../Routes/Helpers/useCustomNavigation';
import AuthHeader from './Components/AuthHeader';
import styles from './Styles';
import ButtonView from '../../Common/ButtonView';
import TextString from '../../Common/TestString';

const Otp = () => {
  const navigation = useCustomNavigation();
  const [OTPValue, setOTPValue] = useState('');

  return (
    <SafeAreaView style={styles.Container}>
      <AuthHeader onBackPress={() => navigation.goBack()} />
      <ScrollView
        bounces={false}
        nestedScrollEnabled={true}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainerStyle}>
        <View>
          <View style={styles.titleTextView}>
            <Text style={styles.titleText}>Phone Verification</Text>
          </View>
          <View style={styles.otpDescriptionView}>
            <Text style={styles.otpDescriptionText}>
              Enter your OTP code here
            </Text>
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
        <View>
          <View style={styles.bottomTextView}>
            <Text style={styles.donNotHaveCodeText}>
              {TextString.NotReceivedCode}
            </Text>
            <Text style={styles.resendOTPtext}>{TextString.ResendNewCode}</Text>
          </View>

          <ButtonView
            title={TextString.Verify}
            ContainerStyle={[
              styles.ButtonStyle,
              {
                marginTop: 10,
                marginBottom: 30,
              },
            ]}
            onPress={() => navigation.navigate('MoodSelect')}
            TextStyle={styles.ButtonTextStyle}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Otp;
