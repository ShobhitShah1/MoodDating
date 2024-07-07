import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ScreenWrapper from '../../Components/ScreenWrapper';
import HeaderView from '../Home/components/HeaderView';
import RenderLikesData from './Components/RenderLikesData';

const LikesData = Array.from({length: 250}, (_, i) => i);

const Likes = () => {
  return (
    <ScreenWrapper>
      <HeaderView />

      <FlatList
        data={LikesData}
        initialNumToRender={15}
        maxToRenderPerBatch={15}
        style={styles.flatListStyle}
        showsVerticalScrollIndicator={false}
        keyExtractor={index => index.toString()}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({index}) => <RenderLikesData index={index} />}
      />
    </ScreenWrapper>
  );
};

export default Likes;

const styles = StyleSheet.create({
  flatListStyle: {
    marginVertical: 20,
  },
  flatListContainer: {
    gap: 25,
    paddingBottom: 120,
  },
});
