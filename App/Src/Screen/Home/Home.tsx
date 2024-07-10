import {FlashList} from '@shopify/flash-list';
import React, {useCallback} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ScreenWrapper from '../../Components/ScreenWrapper';
import {COLORS, FONTS} from '../../Theme/Theme';
import HeaderView from './Components/HeaderView';
import RenderHomeCard from './Components/RenderHomeCard';
import RenderStoryView from './Components/RenderStoryView';

const data = Array.from({length: 50}, (_, i) => i);

const Home = () => {
  const renderStory = useCallback(
    ({index}: {index: number}) => <RenderStoryView index={index} />,
    [],
  );
  const renderCards = useCallback(
    ({index}: {index: number}) => <RenderHomeCard index={index} />,
    [],
  );

  return (
    <ScreenWrapper>
      <HeaderView />

      <ScrollView
        bounces={false}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        style={[styles.matchesShowContainerView]}>
        <View style={styles.newMatchesContainerView}>
          <Text style={styles.newMatchesText}>New Matches </Text>
        </View>

        <View style={styles.dataListContainer}>
          <FlashList
            data={data}
            horizontal={true}
            estimatedItemSize={150}
            renderItem={renderStory}
            showsHorizontalScrollIndicator={false}
            keyExtractor={index => index.toString()}
          />
          <View style={styles.cardContainer}>
            <FlashList
              data={data}
              estimatedItemSize={200}
              renderItem={renderCards}
              keyExtractor={index => index.toString()}
            />
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  matchesShowContainerView: {
    marginVertical: 20,
    paddingBottom: 150,
  },
  newMatchesContainerView: {},
  newMatchesText: {
    fontSize: 17,
    color: COLORS.White,
    fontFamily: FONTS.Bold,
  },
  dataListContainer: {
    justifyContent: 'center',
    marginBottom: 80,
    overflow: 'visible',
  },
  cardContainer: {
    marginVertical: 35,
  },
});
