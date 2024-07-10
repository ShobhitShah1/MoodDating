import {FlashList} from '@shopify/flash-list';
import React, {useCallback, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import ScreenWrapper from '../../Components/ScreenWrapper';
import HeaderView from '../Home/Components/HeaderView';
import RenderLikesData from './Components/RenderLikesData';

const LikesData = Array.from({length: 100}, (_, i) => i);

const Likes = () => {
  const flatListData = useMemo(() => LikesData, []);

  const renderItems = useCallback(
    ({index}: {index: number}) => <RenderLikesData index={index} />,
    [],
  );

  return (
    <ScreenWrapper>
      <HeaderView />

      <View style={styles.flashListContainer}>
        <FlashList
          data={flatListData}
          extraData={true}
          estimatedItemSize={100}
          renderItem={renderItems}
          showsVerticalScrollIndicator={false}
          keyExtractor={index => index.toString()}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Likes;

const styles = StyleSheet.create({
  flatListStyle: {
    gap: 25,
    marginVertical: 20,
  },
  flatListContainer: {
    paddingBottom: 230,
  },
  flashListContainer: {
    marginVertical: 25,
    height: '100%',
  },
});
