import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, SIZE} from '../../Theme/Theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  contentView: {
    width: '90%',
    alignSelf: 'center',
  },
  LoginImageViewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  HeartLogoAndImageView: {
    width: '38%',
    padding: 15,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  LoginTitleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.Black,
  },
  HeartImageView: {
    width: 50,
    height: 50,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  CoupleImageContainer: {
    width: '62%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  CoupleImage: {
    right: 38,
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  NumberContentView: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  NumberInputFlexView: {
    width: '100%',
    marginVertical: 10,
    borderRadius: SIZE.borderRadius,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.TextInputBackground,
  },
  CountryCodeView: {
    width: '15%',
    alignItems: 'center',
  },
  TextInputView: {
    width: '70%',
  },
  CloseIconView: {
    width: '15%',
    alignItems: 'center',
  },
  closeIcon: {
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CountryCodeText: {
    fontSize: 14,
    color: COLORS.Black,
  },
  TextInputStyle: {
    fontSize: 14,
    color: COLORS.Black,
  },
  EnterNumberTitleText: {
    fontSize: 18,
    paddingBottom: 5,
    color: COLORS.Black,
  },
  ButtonStyle: {
    width: '100%',
    height: 50,
    marginVertical: 20,
    backgroundColor: COLORS.Primary,
    borderRadius: SIZE.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  ButtonTextStyle: {
    color: COLORS.White,
    fontSize: 17,
  },
  OrView: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  OrLineView: {
    width: 100,
    borderTopWidth: 1,
    marginHorizontal: 10,
    borderTopColor: '#D9D3D3',
  },
  OrText: {
    fontSize: 15,
    color: COLORS.Black,
  },
  SocialButtonContainer: {
    width: '100%',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SocialButton: {
    width: 180,
    height: 50,
    alignItems: 'center',
    borderRadius: SIZE.borderRadius,
    paddingHorizontal: 10,
    borderWidth: 1,
    justifyContent: 'center',
  },
  socialIcon: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  PoliciesAndTermsView: {
    width: '80%',
    alignSelf: 'center',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  PoliciesAndTermsText: {
    textAlign: 'center',
    lineHeight: 19.4,
    color: COLORS.DarkGrey,
  },
  LinksText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  //* OTP Screen
  scrollView: {
    flex: 1,
  },
  contentContainerStyle: {
    width: '90%',
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  titleTextView: {
    marginTop: 3,
    marginBottom: 5,
  },
  titleText: {
    fontSize: 30,
    fontWeight: '600',
    color: COLORS.Black,
  },
  otpDescriptionView: {
    marginVertical: 10,
  },
  otpDescriptionText: {
    fontSize: 15,
    fontWeight: '400',
    color: COLORS.DarkGrey,
  },
  otpBoxContainer: {
    marginVertical: 25,
    alignSelf: 'center',
  },
  otpBoxViewStyle: {
    width: width * 0.9,
  },
  otpCellStyle: {
    backgroundColor: COLORS.Grey,
    borderRadius: 5,
  },
  otpCellStyleFocused: {
    borderWidth: 1,
    borderColor: COLORS.Primary,
  },
  otpCellStyleFilled: {
    backgroundColor: COLORS.Primary,
  },
  otpTextStyle: {
    color: COLORS.White,
    fontSize: 23,
    textAlign: 'center',
    fontWeight: '500',
  },
  bottomTextView: {
    alignSelf: 'center',
  },
  donNotHaveCodeText: {
    textAlign: 'center',
    color: COLORS.DarkGrey,
    marginVertical: 2,
    fontSize: 13,
  },
  resendOTPtext: {
    fontSize: 13,
    textAlign: 'center',
    color: COLORS.Primary,
  },

  // Welcome
  welcomeTopView: {
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeBottomView: {
    height: '30%',
    paddingBottom: 10,
    justifyContent: 'flex-end',
  },
  welcomeTextContainerView: {
    justifyContent: 'center',
  },
  welcomeTitleText: {
    fontSize: 16,
    color: '#4E4C4C',
    marginVertical: 15,
    fontWeight: '500',
  },
  welcomeDescriptionText: {
    width: '70%',
    fontSize: 28,
    color: COLORS.Black,
    marginVertical: 10,
    fontWeight: 'bold',
    lineHeight: 37,
  },
});

export default styles;
