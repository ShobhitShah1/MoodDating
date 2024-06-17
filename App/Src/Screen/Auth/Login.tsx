/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  ImageBackground,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {IconsPath, ImagesPath} from '../../Common/AssetsPath';
import ButtonView from '../../Common/ButtonView';
import useCustomNavigation from '../../Routes/Helpers/useCustomNavigation';
import {COLORS} from '../../Theme/Theme';
import styles from './Styles';
import TextString from '../../Common/TestString';

const Login = () => {
  const navigation = useCustomNavigation();
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <ImageBackground
        blurRadius={5}
        style={{flex: 1}}
        source={ImagesPath.LoginBackground}>
        <TouchableWithoutFeedback
          onPress={() => Keyboard.dismiss()}
          style={{
            flex: 1,
            zIndex: 9999,
          }}>
          <ScrollView
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'flex-end',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }}
            showsVerticalScrollIndicator={false}
            bounces={false}>
            <View style={styles.NumberContentView}>
              <View style={styles.topTitleView}>
                <Image
                  style={styles.HeartImageView}
                  source={ImagesPath.LoginScreenHeart}
                />
                <Text style={styles.loginToLovelyLifeText}>
                  {TextString.LoginToALovelyLife}
                </Text>
              </View>
              <Text style={styles.EnterNumberTitleText}>
                {TextString.EnterYourMobileNumber}
              </Text>
              <View style={styles.NumberInputFlexView}>
                <View style={styles.CountryCodeView}>
                  <Text style={styles.CountryCodeText}>+91</Text>
                </View>
                <View style={styles.TextInputView}>
                  <TextInput
                    style={styles.TextInputStyle}
                    keyboardType="number-pad"
                    keyboardAppearance="light"
                    placeholder={TextString.EnterPhoneNumber}
                    placeholderTextColor={COLORS.White}
                  />
                </View>
                <View style={styles.CloseIconView}>
                  <Image
                    tintColor={COLORS.White}
                    source={IconsPath.ic_cancel}
                    style={styles.closeIcon}
                  />
                </View>
              </View>

              <ButtonView
                title={TextString.Continue}
                ContainerStyle={styles.ButtonStyle}
                onPress={() => navigation.navigate('Otp')}
                TextStyle={styles.ButtonTextStyle}
              />

              <View style={styles.OrView}>
                <View style={styles.OrLineView} />
                <Text style={styles.OrText}>{TextString.Or}</Text>
                <View style={styles.OrLineView} />
              </View>

              <View style={styles.SocialButtonContainer}>
                <ButtonView
                  ContainerStyle={[styles.SocialButton]}
                  onPress={() => {}}
                  TextStyle={styles.ButtonTextStyle}>
                  <Image
                    source={IconsPath.ic_google}
                    style={styles.socialIcon}
                  />
                </ButtonView>
                <ButtonView
                  ContainerStyle={[styles.SocialButton]}
                  onPress={() => {}}
                  TextStyle={styles.ButtonTextStyle}>
                  <Image
                    source={IconsPath.ic_facebook}
                    style={styles.socialIcon}
                  />
                </ButtonView>
              </View>

              <View style={styles.PoliciesAndTermsView}>
                <Text style={styles.PoliciesAndTermsText}>
                  {TextString.ByContinueToLogin} {TextString.TermsAndCondition}{' '}
                  {TextString.And} {TextString.PrivacyPolicies}.
                </Text>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
