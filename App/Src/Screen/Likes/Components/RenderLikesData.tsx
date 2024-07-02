/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {IconsPath} from '../../../Common/AssetsPath';
import {COLORS, FONTS} from '../../../Theme/Theme';
import {LikesDataProps} from '../../../Types/Interfaces';

let HEIGHT = 380;
let HEART_VIEW = 36;
const RenderLikesData: FC<LikesDataProps> = ({index}) => {
  return (
    <View key={index} style={styles.container}>
      <View style={styles.topTitle}>
        <Text style={styles.matchedText}>You got a match</Text>
      </View>
      <View style={styles.imageView}>
        <View style={styles.imageFlexView}>
          <View style={{transform: [{rotate: '-8deg'}]}}>
            <View style={[styles.heartView, {top: -5, left: -20}]}>
              <Image source={IconsPath.ic_heart} style={styles.heartImage} />
            </View>
            <Image
              source={{uri: 'https://picsum.photos/id/80/1080/720'}}
              style={styles.imageStyle}
            />
          </View>
          <View style={{transform: [{rotate: '8deg'}]}}>
            <View style={[styles.heartView, {bottom: -5, right: -20}]}>
              <Image source={IconsPath.ic_heart} style={styles.heartImage} />
            </View>
            <Image
              source={{uri: 'https://picsum.photos/id/50/1080/720'}}
              style={styles.imageStyle}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomButtonView}>
        <Pressable style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Send message</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RenderLikesData;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: HEIGHT,
    padding: 10,
    borderRadius: 20,
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
  imageStyle: {
    width: HEIGHT / 2.2,
    height: HEIGHT / 1.8,
    marginHorizontal: -15,
    borderWidth: 2,
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: COLORS.White,
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
