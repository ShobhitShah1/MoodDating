/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ScreenWrapper from '../../Components/ScreenWrapper';
import {COLORS, FONTS} from '../../Theme/Theme';
import HeaderView from './components/HeaderView';
import RenderHomeCard from './components/RenderHomeCard';
import RenderStoryView from './components/RenderStoryView';

const data = Array.from({length: 50}, (_, i) => i);

const Home = () => {
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
          <FlatList
            data={data}
            horizontal={true}
            contentContainerStyle={{gap: 10}}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({index}) => <RenderStoryView index={index} />}
          />
          <FlatList
            data={data}
            style={{marginVertical: 35}}
            contentContainerStyle={{gap: 25}}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({index}) => <RenderHomeCard index={index} />}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#F8EBEE',
  },
  contentView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: StatusBar.currentHeight,
  },
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
});
