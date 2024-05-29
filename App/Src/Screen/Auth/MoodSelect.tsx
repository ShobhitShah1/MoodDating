/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import ButtonView from '../../Common/ButtonView';
import useCustomNavigation from '../../Routes/useCustomNavigation';
import {moods} from '../../Store/Data/LocalData';
import {COLORS, SIZE} from '../../Theme/Theme';
import {MoodDataProps} from '../../Types/Interfaces';
import TextString from '../../Common/TestString';

const {width} = Dimensions.get('window');

const ITEM_SIZE = width * 0.16;
const SPACING = (width - ITEM_SIZE) / 2;
const ITEM_MARGIN_RIGHT = 20;
const TOP_VIEW_SIZE = 130;

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const AnimatedList = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentValue, setCurrentValue] = useState(moods[0]);
  const currentIndex = useRef(0);
  const flatListRef = useRef<FlatList<MoodDataProps>>(null);
  const navigation = useCustomNavigation();

  const handleScroll = useCallback(
    Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
      useNativeDriver: true,
    }),
    [scrollX],
  );

  useEffect(() => {
    const listener = scrollX.addListener(({value}) => {
      currentIndex.current = Math.round(
        value / (ITEM_SIZE + ITEM_MARGIN_RIGHT),
      );
      requestAnimationFrame(() =>
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear),
      );
      setCurrentValue(moods[currentIndex.current]);
    });
    return () => {
      scrollX.removeListener(listener);
    };
  }, [scrollX]);

  const renderMoodView = useCallback(
    ({item, index}: {item: MoodDataProps; index: number}) => {
      const {emoji} = item;
      const inputRange = [
        (index - 1) * (ITEM_SIZE + ITEM_MARGIN_RIGHT),
        index * (ITEM_SIZE + ITEM_MARGIN_RIGHT),
        (index + 1) * (ITEM_SIZE + ITEM_MARGIN_RIGHT),
      ];

      const translateY = scrollX.interpolate({
        inputRange,
        outputRange: [0, -32, 0],
      });

      return (
        <Animated.View
          style={[
            styles.item,
            {
              transform: [{translateY}],
              backgroundColor: item.primaryColor,
            },
          ]}>
          <Text style={styles.text}>{emoji}</Text>
        </Animated.View>
      );
    },
    [scrollX],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <TouchableOpacity activeOpacity={1} style={styles.topViewWrapper}>
          <View
            style={[
              styles.topEmojiViewStyle,
              {backgroundColor: currentValue.primaryColor},
            ]}>
            <Text style={styles.topEmojiText}>{currentValue.emoji}</Text>
          </View>

          <Text style={styles.howYouFeelingTodayText}>
            {TextString.HowAreYouFeelingToday}
          </Text>
          <Text style={[styles.moodText, {color: currentValue.primaryColor}]}>
            {currentValue.name}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomView}>
        <View>
          <Animated.FlatList
            data={moods}
            ref={flatListRef}
            horizontal={true}
            pagingEnabled={true}
            renderItem={renderMoodView}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            onScrollToIndexFailed={() => {}}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
            snapToInterval={ITEM_SIZE + ITEM_MARGIN_RIGHT}
            keyExtractor={(item, index) => index.toString()}
          />

          <ButtonView
            title={TextString.Continue}
            ContainerStyle={[styles.ButtonStyle, {}]}
            onPress={() => navigation.navigate('MoodSelect')}
            TextStyle={styles.ButtonTextStyle}
          />
        </View>
      </View>

      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
        colors={[
          currentValue.primaryColor,
          currentValue.lightColor,
          'rgba(0,0,0,0.1)',
          'transparent',
        ]}
        style={styles.gradient}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  topView: {
    height: '50%',
    justifyContent: 'center',
  },
  bottomView: {
    height: '50%',
    flexGrow: 1,
    justifyContent: 'center',
  },
  flatListContent: {
    margin: 0,
    padding: 0,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING,
  },
  item: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: 'blue',
    justifyContent: 'center',
    marginRight: ITEM_MARGIN_RIGHT,
  },
  text: {
    fontSize: ITEM_SIZE / 1.5,
    color: 'white',
    fontWeight: 'bold',
  },
  topEmojiViewStyle: {
    width: TOP_VIEW_SIZE,
    height: TOP_VIEW_SIZE,
    zIndex: 9999,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.White,
  },
  topEmojiText: {
    color: COLORS.Black,
    textAlign: 'center',
    fontSize: TOP_VIEW_SIZE / 1.6,
  },
  moodText: {
    fontSize: 40,
    marginVertical: 10,
    color: COLORS.Black,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  gradient: {
    zIndex: -1,
    bottom: 0,
    height: '80%',
    width: '100%',
    position: 'absolute',
  },
  topViewWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  howYouFeelingTodayText: {
    marginTop: 25,
    marginVertical: 10,
  },
  ButtonStyle: {
    width: '90%',
    height: 50,
    marginVertical: 20,
    backgroundColor: COLORS.Primary,
    borderRadius: SIZE.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  ButtonTextStyle: {
    color: COLORS.White,
    fontSize: 17,
  },
});

export default AnimatedList;
