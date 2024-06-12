import React from 'react';
import {StyleSheet, View} from 'react-native';
import HeaderView from './components/HeaderView';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentView}>
        <HeaderView />
      </View>
    </View>
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
  },
});
