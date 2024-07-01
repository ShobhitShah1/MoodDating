import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS} from '../../../Theme/Theme';
import ButtonView from '../../../Common/ButtonView';
import {IconsPath} from '../../../Common/AssetsPath';

export const SMALL_IMAGE = 'https://picsum.photos/200/400';
export const LARGE_IMAGE = 'https://picsum.photos/1080/720';

const RenderHomeCard = () => {
  return (
    <React.Fragment>
      <View style={styles.profileImageContainer}>
        <Image source={{uri: SMALL_IMAGE}} style={styles.profileImage} />
        <Text style={styles.userNameText}>John Patel</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.imageContainerAndButton}>
          <Image source={{uri: LARGE_IMAGE}} style={styles.image} />

          <TouchableOpacity style={styles.rightButton} />

          <View style={styles.textContainer}>
            <Text style={styles.messageText}>Last Message</Text>
            <Text style={styles.messageText}>How are you?</Text>
          </View>
        </View>

        <View style={styles.bottomButtonView}>
          <View style={styles.buttonContainer}>
            <ButtonView style={styles.button} onPress={() => {}}>
              <Image source={IconsPath.ic_message} style={styles.icon} />
            </ButtonView>
            <ButtonView style={styles.button} onPress={() => {}}>
              <Image source={IconsPath.ic_call} style={styles.icon} />
            </ButtonView>
            <ButtonView style={styles.button} onPress={() => {}}>
              <Image source={IconsPath.ic_videoCall} style={styles.icon} />
            </ButtonView>
          </View>
        </View>
      </View>
    </React.Fragment>
  );
};

export default RenderHomeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 320,
    overflow: 'hidden',
    borderRadius: 60,
    backgroundColor: COLORS.LightPink,
  },
  image: {
    top: 0,
    width: '100%',
    position: 'absolute',
    height: '100%',
  },
  imageContainerAndButton: {
    height: '80%',
    overflow: 'hidden',
    backgroundColor: 'yellow',
  },
  profileImageContainer: {
    zIndex: 99999,
    height: '80%',
    overflow: 'visible',
    position: 'absolute',
    flexDirection: 'row',
  },
  profileImage: {
    width: 75,
    height: 75,
    bottom: 30,
    marginRight: 15,
    borderRadius: 40,
    backgroundColor: COLORS.White,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.Primary,
    borderWidth: 2.5,
    borderColor: COLORS.White,
  },
  userNameText: {
    fontFamily: FONTS.Bold,
    color: COLORS.White,
    fontSize: 18,
    marginVertical: 7,
  },
  bottomButtonView: {
    height: '20%',
    width: '80%',
    overflow: 'hidden',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: COLORS.White,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.Black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  icon: {
    width: 24,
    height: 24,
  },
  rightButton: {
    position: 'absolute',
    right: 0,
    top: '35%',
    width: 30,
    height: 80,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.Black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    borderTopLeftRadius: 45,
    borderBottomLeftRadius: 45,
    backgroundColor: COLORS.LightPink,
  },
  rightButtonIcon: {
    width: 24,
    height: 24,
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,
    paddingHorizontal: 10,
  },
  messageText: {
    fontSize: 14,
    color: COLORS.White,
    fontFamily: FONTS.Medium,
  },
});
