/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {View, Text, StyleSheet, Animated, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../../Theme/Theme';

const {width, height} = Dimensions.get('window');

const ITEM_SIZE = width * 0.3;
const SPACING = (width - ITEM_SIZE) / 2;
const ITEM_MARGIN_RIGHT = 20;

const MoodSelect = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const BACKGROUND_COLORS = [
    'black',
    '#ADFF2F',
    '#CD853F',
    '#4682B4',
    '#3CB371',
    'red',
    'green',
  ];

  const backgroundColor = scrollX.interpolate({
    inputRange: BACKGROUND_COLORS.map((_, index) => index * width),
    outputRange: BACKGROUND_COLORS,
    extrapolate: 'clamp',
  });

  const currentIndex = useRef(0);

  scrollX.addListener(({value}) => {
    currentIndex.current = Math.round(value / (ITEM_SIZE + ITEM_MARGIN_RIGHT));
    // console.log('Current index:', currentIndex.current);
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <Text>{'Hello'}</Text>
      </View>

      <Animated.FlatList
        horizontal
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        contentContainerStyle={{
          paddingHorizontal: SPACING,
        }}
        style={[styles.bottomContainer, {backgroundColor}]}
        onScrollToIndexFailed={() => {}}
        snapToInterval={ITEM_SIZE + ITEM_MARGIN_RIGHT}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        data={[0, 0, 0, 0, 0, 0, 0]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({index}) => {
          const inputRange = [
            (index - 1) * (ITEM_SIZE + ITEM_MARGIN_RIGHT),
            index * (ITEM_SIZE + ITEM_MARGIN_RIGHT),
            (index + 1) * (ITEM_SIZE + ITEM_MARGIN_RIGHT),
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0],
          });

          return (
            <View
              style={{
                width: ITEM_SIZE,
                marginRight: ITEM_MARGIN_RIGHT,
                marginTop: ITEM_SIZE / 2,
              }}>
              <Animated.View style={[styles.item, {transform: [{translateY}]}]}>
                <Text style={styles.text}>Item: {index + 1}</Text>
              </Animated.View>
            </View>
          );
        }}
      />
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
        colors={[
          'rgba(0,0,0,0.8)',
          'rgba(0,0,0,0.3)',
          'rgba(0,0,0,0.1)',
          'transparent',
        ]}
        style={{
          height: '60%',
          position: 'absolute',
          bottom: 0,
          // zIndex: 999,
          width: '100%',
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.White,
  },
  topView: {
    height: '40%',
    justifyContent: 'center',
  },
  bottomContainer: {
    height: '60%',
  },
  item: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  background: {
    top: 0,
    left: 0,
    right: 0,
    height: height,
    position: 'absolute',
  },
});

export default MoodSelect;
