import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';

const {width, height} = Dimensions.get('window');

const RenderUserImagesView = ({index}: {index: number}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://picsum.photos/id/' + (index + 10) + '/1080/720'}}
        style={styles.imageStyle}
      />
    </View>
  );
};

export default RenderUserImagesView;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height * 0.3,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    marginHorizontal: 10,
    justifyContent: 'center',
  },
});
