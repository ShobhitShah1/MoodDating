/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HeaderView from './components/HeaderView';
import {ImagesPath} from '../../Common/AssetsPath';
import {COLORS, FONTS} from '../../Theme/Theme';
import RenderStoryView from './components/RenderStoryView';
import RenderHomeCard from './components/RenderHomeCard';

const Home = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={ImagesPath.SplashBackground}
      blurRadius={80}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView style={styles.contentView}>
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
              horizontal
              contentContainerStyle={{gap: 10}}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
              style={{overflow: 'visible'}}
              renderItem={({}) => <RenderStoryView />}
            />
            <FlatList
              contentContainerStyle={{gap: 45}}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
              style={{marginVertical: 35}}
              renderItem={({}) => <RenderHomeCard />}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
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
