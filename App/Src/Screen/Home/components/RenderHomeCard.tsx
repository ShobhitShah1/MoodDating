import React, {memo, useRef, useState} from 'react';
import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, FONTS} from '../../../Theme/Theme';
import ButtonView from '../../../Common/ButtonView';
import {IconsPath} from '../../../Common/AssetsPath';
import {BlurView} from '@react-native-community/blur';

const RenderHomeCard = ({index}: {index: number}) => {
  const SMALL_IMAGE = `https://picsum.photos/id/${index + 21}/200/400`;
  const LARGE_IMAGE = `https://picsum.photos/id/${index + 87}/200/300`;

  const [expanded, setExpanded] = useState(false);
  const heightAnim = useRef(new Animated.Value(320)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  const toggleExpand = () => {
    setExpanded(!expanded);
    Animated.timing(heightAnim, {
      toValue: expanded ? 320 : 500,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.inOut(Easing.ease),
    }).start();

    Animated.timing(opacityAnim, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.inOut(Easing.ease),
    }).start();
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.profileImageContainer}>
        <Image source={{uri: SMALL_IMAGE}} style={styles.profileImage} />
        <Text style={styles.userNameText}>John Patel {index}</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.imageContainerAndButton}>
          <Image source={{uri: LARGE_IMAGE}} style={styles.image} />

          <ButtonView onPress={toggleExpand} style={styles.rightButton} />
          <Animated.View
            style={[styles.additionalContent, {opacity: opacityAnim}]}>
            {expanded && (
              <View style={styles.boxesContainer}>
                {Array.from({length: 12}, (_, i) => i).map((i: number) => (
                  <ButtonView
                    key={i}
                    style={styles.box}
                    onPress={() => console.log(i)}
                  />
                ))}
              </View>
            )}
          </Animated.View>

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
    </View>
  );
};

export default memo(RenderHomeCard);

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 35,
  },
  container: {
    flex: 1,
    width: '100%',
    height: 320,
    overflow: 'hidden',
    borderRadius: 60,
    zIndex: 9999,
    backgroundColor: COLORS.LightPink,
  },
  image: {
    top: 0,
    width: '100%',
    height: '100%',
    aspectRatio: 16 / 9,
    position: 'absolute',
  },
  imageContainerAndButton: {
    height: '80%',
    overflow: 'hidden',
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
    zIndex: 99999,
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

  additionalContent: {
    top: 10,
    right: 30,
    width: '80%',
    zIndex: 99999,
    paddingVertical: 20,
    position: 'absolute',
  },
  boxesContainer: {
    zIndex: 9999,
    flexWrap: 'wrap',
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
    justifyContent: 'flex-end',
  },
  box: {
    marginHorizontal: 12,
    marginVertical: 10,
    width: 50,
    height: 50,
    backgroundColor: COLORS.White,
    borderRadius: 10,
    shadowColor: COLORS.Black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
});
