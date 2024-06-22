/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  LayoutAnimation,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IconsPath, ImagesPath} from '../../Common/AssetsPath';
import ButtonView from '../../Common/ButtonView';
import TextString from '../../Common/TestString';
import useCustomNavigation from '../../Routes/Helpers/useCustomNavigation';
import {moods} from '../../Store/Data/LocalData';
import {COLORS, SIZE} from '../../Theme/Theme';
import {MoodDataProps} from '../../Types/Interfaces';

const {width} = Dimensions.get('window');

const ITEM_SIZE = width * 0.15;
const SPACING = (width - ITEM_SIZE) / 2;
const ITEM_MARGIN_RIGHT = 20;
const TOP_VIEW_SIZE = 130;

const AnimatedList: React.FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentValue, setCurrentValue] = useState<MoodDataProps>(moods[0]);
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

  const getItemLayout = (_: any, index: number) => ({
    length: ITEM_SIZE + ITEM_MARGIN_RIGHT,
    offset: (ITEM_SIZE + ITEM_MARGIN_RIGHT) * index,
    index,
  });

  const handleScrollToIndexFailed = (error: {
    index: number;
    highestMeasuredFrameIndex: number;
    averageItemLength: number;
  }) => {
    const offset = error.index * (ITEM_SIZE + ITEM_MARGIN_RIGHT);
    flatListRef.current?.scrollToOffset({offset, animated: true});
    setTimeout(() => {
      if (flatListRef.current !== null) {
        flatListRef.current.scrollToIndex({index: error.index, animated: true});
      }
    }, 100);
  };

  const animatedScroll = (index: number) => {
    flatListRef.current?.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0.5,
    });
  };

  const handleMomentumScrollEnd = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const index = Math.round(
        event.nativeEvent.contentOffset.x / (ITEM_SIZE + ITEM_MARGIN_RIGHT),
      );
      flatListRef.current?.scrollToIndex({index, animated: true});
      setCurrentValue(moods[index]);
    },
    [],
  );

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
        <ButtonView
          activeOpacity={1}
          // onPress={() => animatedScroll(index)}
        >
          <Animated.View
            style={[
              styles.item,
              {transform: [{translateY}], backgroundColor: item.primaryColor},
            ]}>
            <Text style={styles.text}>{emoji}</Text>
          </Animated.View>
        </ButtonView>
      );
    },
    [scrollX],
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <ImageBackground
        style={styles.imageBackground}
        blurRadius={50}
        source={ImagesPath.SplashBackground}>
        <View style={styles.headerContainer}>
          <ButtonView
            ContainerStyle={styles.headerBackButtonView}
            onPress={() => navigation.goBack()}>
            <Image
              tintColor={COLORS.White}
              source={IconsPath.ic_back}
              style={styles.headerBackIcon}
            />
          </ButtonView>
        </View>

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
              decelerationRate="fast"
              onMomentumScrollEnd={handleMomentumScrollEnd}
              onScrollToIndexFailed={handleScrollToIndexFailed}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatListContent}
              snapToInterval={ITEM_SIZE + ITEM_MARGIN_RIGHT}
              getItemLayout={getItemLayout}
              keyExtractor={(item, index) => index.toString()}
            />

            <ButtonView
              title={TextString.Continue}
              ContainerStyle={[styles.ButtonStyle, {}]}
              onPress={() => navigation.navigate('BottomTab')}
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
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  imageBackground: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
  },
  topView: {
    // backgroundColor: 'red',
    height: '50%',
    justifyContent: 'flex-end',
  },
  bottomView: {
    // height: '50%',
    flexGrow: 1,
    zIndex: 9999,
    justifyContent: 'flex-end',
    // justifyContent: 'center',
  },
  flatListContent: {
    // margin: 0,
    paddingVertical: 38,
    // height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING,
  },
  item: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    borderRadius: 15,
    alignSelf: 'center',
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
    // marginVertical: 10,
    color: COLORS.Black,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  gradient: {
    zIndex: 1,
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
    marginTop: 20,
    marginBottom: 10,
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    color: COLORS.MoodSelectSubText,
  },
  ButtonStyle: {
    width: '90%',
    height: 50,
    marginBottom: 20,
    marginTop: 15,
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
  headerContainer: {
    width: '90%',
    height: 50,
    marginTop: 10,
    marginBottom: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  headerBackButtonView: {
    width: '10%',
    height: 50,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  headerBackIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
});

export default AnimatedList;
