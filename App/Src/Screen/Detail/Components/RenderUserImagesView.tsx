import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {COLORS} from '../../../Theme/Theme';

const {width, height} = Dimensions.get('window');

const RenderUserImagesView = ({index}: {item: any; index: number}) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        fadeDuration={500}
        style={styles.imageStyle}
        progressiveRenderingEnabled={true}
        source={{uri: 'https://picsum.photos/id/' + (index + 13) + '/1080/720'}}
      />
    </View>
  );
};

export default RenderUserImagesView;

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: height * 0.3,
    borderRadius: 35,
    overflow: 'hidden',
    borderColor: COLORS.White,
    borderWidth: 1.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    marginHorizontal: 10,
    justifyContent: 'center',
  },
});
