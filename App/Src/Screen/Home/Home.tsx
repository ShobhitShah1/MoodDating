import React from 'react';
import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import HeaderView from './components/HeaderView';
import {ImagesPath} from '../../Common/AssetsPath';
import {COLORS} from '../../Theme/Theme';

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
      <View style={styles.contentView}>
        <HeaderView />

        <View style={styles.matchesShowContainerView}>
          <View style={styles.newMatchesContainerView}>
            <Text style={styles.newMatchesText}>New Matches </Text>
          </View>
        </View>
      </View>
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
  },
  newMatchesContainerView: {},
  newMatchesText: {
    color: COLORS.White,
    fontSize: 16,
    fontWeight: '500',
  },
});
