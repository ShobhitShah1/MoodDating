/* eslint-disable react-native/no-inline-styles */
import React, {FC, memo, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Animated, {FadeIn} from 'react-native-reanimated';
import Skeleton from 'react-native-reanimated-skeleton';
import {IconsPath} from '../../../Common/AssetsPath';
import {COLORS, FONTS} from '../../../Theme/Theme';

let HEIGHT = 380;
let HEART_VIEW = 36;

const RenderLikesData: FC<{index: number}> = ({index}) => {
  const LIKED_PROFILE = `https://picsum.photos/id/${index + 12}/1080/720`;
  const MY_PROFILE = 'https://picsum.photos/id/80/1080/720';

  const [isImagesLoading, setIsImagesLoading] = useState({
    isMyImageLoading: false,
    isMatchedUserImageLoading: false,
  });

  return (
    <Animated.View entering={FadeIn.duration(500)} style={styles.container}>
      <View style={styles.topTitle}>
        <Text style={styles.matchedText}>You got a match</Text>
      </View>
      <View style={styles.imageView}>
        <View style={styles.imageFlexView}>
          <View style={{transform: [{rotate: '-8deg'}]}}>
            <View style={[styles.heartView, {top: -5, left: -20}]}>
              <Image source={IconsPath.ic_heart} style={styles.heartImage} />
            </View>
            <Skeleton
              containerStyle={styles.imageContainerStyle}
              isLoading={false}>
              <Image
                source={{uri: MY_PROFILE}}
                onLoadStart={() => {
                  setIsImagesLoading({
                    ...isImagesLoading,
                    isMyImageLoading: true,
                  });
                }}
                onLoad={() => {
                  setIsImagesLoading({
                    ...isImagesLoading,
                    isMyImageLoading: false,
                  });
                }}
                style={styles.imageStyle}
              />
            </Skeleton>
          </View>
          <View style={{transform: [{rotate: '8deg'}]}}>
            <View style={[styles.heartView, {bottom: -5, right: -20}]}>
              <Image source={IconsPath.ic_heart} style={styles.heartImage} />
            </View>
            <Skeleton
              isLoading={false}
              containerStyle={styles.imageContainerStyle}>
              <Image
                source={{uri: LIKED_PROFILE}}
                onLoadStart={() => {
                  setIsImagesLoading({
                    ...isImagesLoading,
                    isMatchedUserImageLoading: true,
                  });
                }}
                onLoad={() => {
                  setIsImagesLoading({
                    ...isImagesLoading,
                    isMatchedUserImageLoading: false,
                  });
                }}
                style={styles.imageStyle}
              />
            </Skeleton>
          </View>
        </View>
      </View>
      <View style={styles.bottomButtonView}>
        <Pressable style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Send message</Text>
        </Pressable>
      </View>
    </Animated.View>
  );
};

export default memo(RenderLikesData);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: HEIGHT,
    padding: 10,
    borderRadius: 20,
    marginBottom: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  topTitle: {
    height: '10%',
    justifyContent: 'center',
  },
  matchedText: {
    fontSize: 25,
    color: COLORS.White,
    textAlign: 'center',
    fontFamily: FONTS.KaushanScript,
  },
  imageView: {
    height: '78%',
    justifyContent: 'center',
  },
  imageFlexView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageContainerStyle: {
    width: HEIGHT / 2.2,
    height: HEIGHT / 1.8,
    marginHorizontal: -15,
    borderWidth: 2,
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: COLORS.White,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    backgroundColor: COLORS.Primary,
  },
  bottomButtonView: {
    height: '12%',
    justifyContent: 'center',
  },
  heartView: {
    position: 'absolute',
    zIndex: 9999,
    width: HEART_VIEW,
    height: HEART_VIEW,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.White,
  },
  heartImage: {
    width: HEART_VIEW / 2,
    height: HEART_VIEW / 2,
    resizeMode: 'contain',
  },
  buttonStyle: {
    width: '70%',
    height: 45,
    bottom: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: COLORS.Primary,
  },
  buttonText: {
    fontSize: 18,
    color: COLORS.White,
    textAlign: 'center',
    fontFamily: FONTS.Bold,
  },
});
