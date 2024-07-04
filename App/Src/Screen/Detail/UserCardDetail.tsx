import React from 'react';
import {Dimensions, FlatList, ScrollView, StyleSheet} from 'react-native';
import CommonHeaderView from '../../Components/CommonHeaderView';
import ScreenWrapper from '../../Components/ScreenWrapper';
import RenderUserImagesView from './Components/RenderUserImagesView';
const {height, width} = Dimensions.get('window');

const imageArray = Array.from({length: 100}, (_, i) => i);

const UserCardDetail = () => {
  return (
    <ScreenWrapper>
      <CommonHeaderView />

      <ScrollView style={styles.container}>
        <FlatList
          horizontal={true}
          pagingEnabled={true}
          style={styles.flatListStyle}
          contentContainerStyle={styles.flatListContainContainer}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          data={imageArray}
          renderItem={({item, index}) => {
            return <RenderUserImagesView index={index} />;
          }}
        />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default UserCardDetail;

const styles = StyleSheet.create({
  container: {
    height: height * 0.86,
    backgroundColor: 'red',
  },
  flatListStyle: {
    width: '100%',
  },
  flatListContainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
