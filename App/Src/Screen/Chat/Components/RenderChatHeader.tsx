import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import ButtonView from '../../../Common/ButtonView';
import {LARGE_IMAGE} from '../../../Common/GlobalConfig';
import {IconsPath} from '../../../Common/AssetsPath';
import {COLORS, FONTS} from '../../../Theme/Theme';

const RenderChatHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.backAndProfileContainer}>
        <Image source={IconsPath.ic_back} style={styles.backIcon} />

        <View style={styles.profileAndNameContainer}>
          <View style={styles.profileContainer}>
            <Image source={{uri: LARGE_IMAGE}} style={styles.profileImage} />
            <View style={styles.activeGreenDot} />
          </View>
          <Text style={styles.usernameText} numberOfLines={1}>
            Jenni_32
          </Text>
        </View>
      </View>

      <View style={styles.topBarIconsContainer}>
        <ButtonView style={styles.buttonContainer} onPress={() => {}}>
          <Image style={styles.buttonIcon} source={IconsPath.ic_videoCall} />
        </ButtonView>
        <ButtonView style={styles.buttonContainer} onPress={() => {}}>
          <Image style={styles.buttonIcon} source={IconsPath.ic_videoCall} />
        </ButtonView>
        <ButtonView style={styles.buttonContainer} onPress={() => {}}>
          <Image style={styles.buttonIcon} source={IconsPath.ic_videoCall} />
        </ButtonView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  backAndProfileContainer: {
    width: '65%',
    overflow: 'hidden',
    alignItems: 'center',
    flexDirection: 'row',
  },
  backIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.White,
  },
  profileAndNameContainer: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileContainer: {
    width: 45,
    height: 45,
  },
  profileImage: {
    width: 45,
    height: 45,
    borderWidth: 1.5,
    borderRadius: 50,
    borderColor: COLORS.White,
  },
  usernameText: {
    width: '68%',
    fontSize: 19.5,
    marginLeft: 10,
    color: COLORS.White,
    fontFamily: FONTS.SemiBold,
  },
  topBarIconsContainer: {
    width: '35%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    marginLeft: 2,
    justifyContent: 'flex-end',
  },
  buttonIcon: {
    width: 35,
    height: 35,
  },
  activeGreenDot: {
    width: 10,
    height: 10,
    position: 'absolute',
    top: 0,
    right: 3,
    borderRadius: 50,
    zIndex: 9999,

    backgroundColor: 'rgba(92, 255, 88, 1)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 50,
  },
});

export default RenderChatHeader;
