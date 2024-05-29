/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
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
import useCustomNavigation from '../../Routes/useCustomNavigation';
import {COLORS} from '../../Theme/Theme';
import styles from './Styles';
import TextString from '../../Common/TestString';

const Login = () => {
  const navigation = useCustomNavigation();
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar backgroundColor={COLORS.White} barStyle={'dark-content'} />
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
        style={{flex: 1, zIndex: 9999}}>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <View style={styles.LoginImageViewContainer}>
            <View style={styles.HeartLogoAndImageView}>
              <Image
                style={styles.HeartImageView}
                source={ImagesPath.LoginScreenHeart}
              />
              <Text style={styles.LoginTitleText}>
                {TextString.LoginToALovelyLife}
              </Text>
            </View>
            <View style={styles.CoupleImageContainer}>
              <Image
                style={styles.CoupleImage}
                source={ImagesPath.LoginScreenCouple}
              />
            </View>
          </View>

          <View style={styles.NumberContentView}>
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
                  placeholderTextColor={COLORS.PlaceholderText}
                />
              </View>
              <View style={styles.CloseIconView}>
                <Image source={IconsPath.ic_cancel} style={styles.closeIcon} />
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
                ContainerStyle={[
                  styles.SocialButton,
                  {borderColor: COLORS.GoogleColor},
                ]}
                onPress={() => {}}
                TextStyle={styles.ButtonTextStyle}>
                <Image source={IconsPath.ic_google} style={styles.socialIcon} />
              </ButtonView>
              <ButtonView
                ContainerStyle={[
                  styles.SocialButton,
                  {borderColor: COLORS.FacebookColor},
                ]}
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
                {TextString.ByContinueToLogin}{' '}
                <Text style={[styles.LinksText, {color: COLORS.Black}]}>
                  {TextString.TermsAndCondition}
                </Text>{' '}
                {TextString.And}{' '}
                <Text style={[styles.LinksText, {color: COLORS.Black}]}>
                  {TextString.PrivacyPolicies}
                </Text>
                .
              </Text>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Login;
