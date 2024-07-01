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
import useCustomNavigation from '../../Routes/Helpers/useCustomNavigation';
import {COLORS, FONTS} from '../../Theme/Theme';
import HeaderView from './components/HeaderView';
import RenderHomeCard from './components/RenderHomeCard';
import RenderStoryView from './components/RenderStoryView';

const Home = () => {
  const navigation = useCustomNavigation() as any;
  return (
    <ScreenWrapper>
      <HeaderView
        onMenuPress={() => navigation?.openDrawer()}
        onNotificationPress={() => {}}
      />

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
