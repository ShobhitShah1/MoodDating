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
import {ImagesPath} from '../../Common/AssetsPath';
import ButtonView from '../../Common/ButtonView';
import useCustomNavigation from '../../Routes/useCustomNavigation';
import {COLORS} from '../../Theme/Theme';
import styles from './Styles';

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
              <Text style={styles.LoginTitleText}>Login to a lovely life.</Text>
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
              Enter your mobile number
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
                  placeholder="Enter Phone Number"
                  placeholderTextColor={COLORS.PlaceholderText}
                />
              </View>
              <View style={styles.CloseIconView}>
                <Text>Close Icon</Text>
              </View>
            </View>

            <ButtonView
              title="Continue"
              ContainerStyle={styles.ButtonStyle}
              onPress={() => navigation.navigate('Otp')}
              TextStyle={styles.ButtonTextStyle}
            />

            <View style={styles.OrView}>
              <View style={styles.OrLineView} />
              <Text style={styles.OrText}>Or</Text>
              <View style={styles.OrLineView} />
            </View>

            <View style={styles.SocialButtonContainer}>
              <ButtonView
                title="Google"
                ContainerStyle={[
                  styles.SocialButton,
                  {
                    borderColor: COLORS.GoogleColor,
                  },
                ]}
                onPress={() => {}}
                TextStyle={styles.ButtonTextStyle}
              />
              <ButtonView
                title="FaceBook"
                ContainerStyle={[
                  styles.SocialButton,
                  {
                    borderColor: COLORS.FacebookColor,
                  },
                ]}
                onPress={() => {}}
                TextStyle={styles.ButtonTextStyle}
              />
            </View>

            <View style={styles.PoliciesAndTermsView}>
              <Text style={styles.PoliciesAndTermsText}>
                By continue to login, you accept our company’s{' '}
                <Text style={[styles.LinksText, {color: COLORS.Black}]}>
                  Terms & condition
                </Text>{' '}
                and{' '}
                <Text style={[styles.LinksText, {color: COLORS.Black}]}>
                  Privacy Policies
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
