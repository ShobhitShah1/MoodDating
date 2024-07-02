import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ScreenWrapper from '../../Components/ScreenWrapper';
import HeaderView from '../Home/components/HeaderView';
import {LikesData} from '../../Store/Data/LocalData';
import RenderLikesData from './Components/RenderLikesData';

const Likes = () => {
  return (
    <ScreenWrapper>
      <HeaderView />

      <FlatList
        windowSize={7}
        data={LikesData}
        style={styles.flatListStyle}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        updateCellsBatchingPeriod={100}
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <RenderLikesData index={index} id={item.id} profile={item.profile} />
        )}
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
