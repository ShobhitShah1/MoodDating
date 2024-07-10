import {Image, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {COLORS, FONTS} from '../../../Theme/Theme';

const WIDTH = 70;
const HEIGHT = 70;

const RenderStoryView = ({index}: {index: number}) => {
  const PROFILE = `https://picsum.photos/id/${index + 12}/200/300`;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: PROFILE}} style={styles.image} />
      </View>
      <Text numberOfLines={1} style={styles.userNameText}>
        John
      </Text>
    </View>
  );
};

export default memo(RenderStoryView);

const styles = StyleSheet.create({
  container: {
    width: 70,
    marginTop: 15,
    marginRight: 10,
    justifyContent: 'center',
  },
  imageContainer: {
    width: WIDTH,
    height: HEIGHT,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.White,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image: {
    width: WIDTH / 1.23,
    height: HEIGHT / 1.23,
    borderRadius: 50,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  userNameText: {
    fontSize: 15,
    color: COLORS.White,
    textAlign: 'center',
    marginTop: 10,
    fontFamily: FONTS.Bold,
    width: '100%',
    alignSelf: 'center',
  },
});
