import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {IconsPath, ImagesPath} from '../../Common/AssetsPath';
import {LARGE_IMAGE} from '../../Common/GlobalConfig';
import ScreenWrapper from '../../Components/ScreenWrapper';
import {COLORS} from '../../Theme/Theme';
import ProfileTextInputView from './Components/ProfileTextInputView';
import ButtonView from '../../Common/ButtonView';

const {width, height} = Dimensions.get('window');

const Profile = () => {
  return (
    <ScreenWrapper containerStyle={styles.screenWrapperContainer}>
      <ImageBackground
        imageStyle={styles.backgroundImage}
        style={styles.container}
        source={ImagesPath.ProfileBackground}>
        <View style={styles.profileContainerView}>
          <Image source={{uri: LARGE_IMAGE}} style={styles.profileImage} />
          <ButtonView onPress={() => {}} style={styles.editProfileImageView}>
            <Image source={IconsPath.ic_Edit} style={styles.editIcon} />
          </ButtonView>
        </View>

        <ScrollView
          nestedScrollEnabled
          style={styles.scrollViewStyle}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}>
          <ProfileTextInputView
            title="First Name"
            placeholder="Type Here....."
          />
          <ProfileTextInputView
            title="Last Name"
            placeholder="Type Here....."
          />
          <ProfileTextInputView title="Email" placeholder="Type Here....." />
          <ProfileTextInputView
            title="Birth date"
            placeholder="Type Here....."
          />
          <ProfileTextInputView
            title="Phone number"
            placeholder="Type Here....."
          />
          <ProfileTextInputView title="Gender" placeholder="Type Here....." />
          <ProfileTextInputView title="Media" placeholder="Type Here....." />
        </ScrollView>
      </ImageBackground>
    </ScreenWrapper>
  );
};

export default Profile;

const styles = StyleSheet.create({
  screenWrapperContainer: {
    width: '100%',
  },
  container: {
    overflow: 'hidden',
    alignItems: 'center',
  },
  backgroundImage: {
    alignItems: 'center',
    alignSelf: 'center',
    width: width,
    height: height,
    resizeMode: 'contain',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 500,
    borderWidth: 1.5,
    borderColor: COLORS.White,
  },
  editProfileImageView: {
    width: 32,
    height: 32,
    position: 'absolute',
    bottom: 3,
    right: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 500,
    backgroundColor: COLORS.White,
  },
  editIcon: {
    width: 15,
    height: 15,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  profileContainerView: {
    width: 132,
    height: 132,
    borderRadius: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewStyle: {
    width: '90%',
    marginTop: 50,
    paddingBottom: 120,
  },
  contentContainerStyle: {
    paddingBottom: 320,
  },
});
