import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZE} from '../../Theme/Theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  blackOverly: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.65)',
  },
  contentView: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 50,
    justifyContent: 'flex-end',
  },
  LoginImageViewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  HeartLogoAndImageView: {
    padding: 15,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  LoginTitleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.White,
  },
  HeartImageView: {
    width: 40,
    height: 40,
    marginBottom: 15,
    resizeMode: 'cover',
  },
  loginToLovelyLifeText: {
    fontSize: 30,
    lineHeight: 35,
    marginBottom: 10,
    fontWeight: '700',
    color: COLORS.White,
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
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: SIZE.borderRadius,
    backgroundColor: 'rgba(255,255,255,0.20)',
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
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CountryCodeText: {
    fontSize: 18,
    color: COLORS.White,
    fontFamily: FONTS.SemiBold,
  },
  topTitleView: {
    marginVertical: 20,
  },
  TextInputStyle: {
    fontSize: 14.5,
    color: COLORS.White,
    fontFamily: FONTS.Regular,
  },
  EnterNumberTitleText: {
    fontSize: 15,
    paddingBottom: 5,
    color: COLORS.White,
    fontFamily: FONTS.Regular,
  },
  ButtonStyle: {
    width: '100%',
    height: 50,
    alignSelf: 'center',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.Primary,
    borderRadius: SIZE.borderRadius,
  },
  ButtonTextStyle: {
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.White,
  },
  OrView: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 25,
  },
  OrLineView: {
    width: '43%',
    borderTopWidth: 1,
    alignSelf: 'center',
    borderTopColor: '#D9D3D3',
  },
  OrText: {
    fontSize: 17,
    color: COLORS.White,
    marginHorizontal: 10,
    fontFamily: FONTS.Medium,
  },
  SocialButtonContainer: {
    width: '100%',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SocialButton: {
    width: '46%',
    height: 44,
    borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderColor: COLORS.White,
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderRadius: SIZE.borderRadius,
  },
  socialIcon: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  PoliciesAndTermsView: {
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  PoliciesAndTermsText: {
    fontSize: 15.5,
    lineHeight: 22,
    textAlign: 'center',
    color: COLORS.White,
    fontFamily: FONTS.Regular,
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
    flex: 1,
    width: '90%',
    bottom: -15,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  titleTextView: {
    marginBottom: 2,
  },
  titleText: {
    fontSize: 30,
    color: COLORS.White,
    fontFamily: FONTS.Medium,
  },
  otpDescriptionText: {
    fontSize: 15,
    marginTop: 8,
    color: 'rgba(255, 255, 255, 0.6)',
    fontFamily: FONTS.Medium,
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
    // backgroundColor: COLORS.Primary,
  },
  otpTextStyle: {
    fontSize: 25,
    textAlign: 'center',
    color: COLORS.Primary,
    fontFamily: FONTS.SemiBold,
  },
  bottomTextView: {
    alignSelf: 'center',
  },
  donNotHaveCodeText: {
    textAlign: 'center',
    color: COLORS.White,
    marginVertical: 2,
    fontSize: 16,
    fontFamily: FONTS.Medium,
  },
  resendOTPtext: {
    fontSize: 15,
    textAlign: 'center',
    color: COLORS.Primary,
    fontFamily: FONTS.Medium,
  },
  otpBottomContainer: {
    marginBottom: 20,
  },

  // Welcome
  welcomeTopView: {
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeBottomView: {
    paddingBottom: 20,
    justifyContent: 'flex-end',
  },
  welcomeTextContainerView: {
    justifyContent: 'center',
  },
  welcomeTitleText: {
    fontSize: 16,
    color: COLORS.White,
    marginVertical: 15,
    fontFamily: FONTS.SemiBold,
  },
  welcomeDescriptionText: {
    width: '70%',
    fontSize: 28,
    lineHeight: 37,
    marginVertical: 10,
    color: COLORS.White,
    fontFamily: FONTS.SemiBold,
  },
  backgroundColor: {
    flex: 1,
    backgroundColor: 'rgba(234,234,234,0.1)',
  },

  // OTP
  headerContainer: {
    width: '100%',
    height: 50,
    marginTop: 25,
    marginBottom: 5,
    justifyContent: 'center',
  },
  headerBackButtonView: {
    width: '10%',
    height: 50,
    justifyContent: 'center',
  },
  headerBackIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
});

export default styles;
