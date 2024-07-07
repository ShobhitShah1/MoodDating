import React, {memo, useRef} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Animated as ReactAnimated,
} from 'react-native';
import Animated, {FadeIn} from 'react-native-reanimated';
import {IconsPath} from '../../Common/AssetsPath';
import ButtonView from '../../Common/ButtonView';
import CommonHeaderView from '../../Components/CommonHeaderView';
import ScreenWrapper from '../../Components/ScreenWrapper';
import {COLORS, FONTS} from '../../Theme/Theme';
import RenderUserImagesView from './Components/RenderUserImagesView';
import Paginator from '../../Components/Paginator';

const {height} = Dimensions.get('window');

const imageArray = Array.from({length: 5}, (_, i) => i);
const socials = [
  {id: 0, icon: IconsPath.ic_social_facebook, link: ''},
  {id: 1, icon: IconsPath.ic_social_instagram, link: ''},
  {id: 1, icon: IconsPath.ic_social_twitter, link: ''},
];
const interests = [
  {
    id: 0,
    name: 'Music',
    icon: IconsPath.ic_interest_music,
    backgroundColor: 'rgba(108, 18, 255, 1)',
  },
  {
    id: 1,
    name: 'Photography',
    icon: IconsPath.ic_interest_photography,
    backgroundColor: 'rgba(0, 107, 168, 1)',
  },
  {
    id: 2,
    name: 'Game',
    icon: IconsPath.ic_interest_hugeicons_game,
    backgroundColor: 'rgba(32, 160, 0, 1)',
  },
  {
    id: 3,
    name: 'Books',
    icon: IconsPath.ic_interest_book,
    backgroundColor: 'rgba(167, 100, 0, 1)',
  },
  {
    id: 4,
    name: 'Painting',
    icon: IconsPath.ic_interest_paint,
    backgroundColor: 'rgba(163, 167, 0, 1)',
  },
];

const UserCardDetail = () => {
  const scrollX = useRef(new ReactAnimated.Value(0)).current;

  return (
    <ScreenWrapper containerStyle={styles.containerStyle}>
      <View style={styles.headerContainer}>
        <CommonHeaderView />
      </View>

      <Animated.ScrollView
        entering={FadeIn}
        style={styles.container}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainContainer}>
        <Animated.View
          entering={FadeIn.duration(300)}
          style={styles.imageContainerView}>
          <FlatList
            data={imageArray}
            horizontal={true}
            pagingEnabled={true}
            style={styles.flatListStyle}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.flatListContainContainer}
            renderItem={({item, index}) => {
              return <RenderUserImagesView item={item} index={index} />;
            }}
            onScroll={ReactAnimated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {
                useNativeDriver: false,
              },
            )}
          />
          {imageArray && imageArray?.length !== 0 && (
            <Paginator data={imageArray} scrollX={scrollX} />
          )}
        </Animated.View>

        <Animated.View
          entering={FadeIn.duration(500)}
          style={styles.nameAndSocialLinkFlexView}>
          <Text style={styles.userNameText} numberOfLines={2}>
            John Smith
          </Text>
          <View style={styles.socialIconsFlexView}>
            {socials.map((value, index) => {
              return (
                <ButtonView key={index} onPress={() => {}}>
                  <Image source={value.icon} style={styles.socialIcons} />
                </ButtonView>
              );
            })}
          </View>
        </Animated.View>

        <Animated.View
          entering={FadeIn.duration(700)}
          style={styles.locationFlexView}>
          <Image style={styles.locationIcon} source={IconsPath.ic_location} />
          <Text style={styles.locationText}>10 km Away</Text>
        </Animated.View>

        <Animated.View entering={FadeIn.duration(900)}>
          <Text style={styles.titleText}>Interest</Text>

          <View style={styles.interestFlexView}>
            {interests.map((interest, index) => {
              return (
                <View
                  key={index}
                  style={[
                    styles.interestButtonView,
                    {backgroundColor: interest.backgroundColor},
                  ]}>
                  <Image source={interest.icon} style={styles.interestIcon} />
                  <Text style={styles.interestText}>{interest.name}</Text>
                </View>
              );
            })}
          </View>
        </Animated.View>

        <Animated.View entering={FadeIn.duration(1100)}>
          <Text style={styles.titleText}>About</Text>

          <Text style={styles.aboutText}>
            Hello, My name is John Smith, I am 22 yrs old, I love listening to
            music, playing games. not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was
            popu Hello, My name is John Smith, I am 22 yrs old, I love listening
            to music, playing games. not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was
            popu Hello, My name is John Smith, I am 22 yrs old, I love listening
            to music, playing games. not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was
            popu Hello, My name is John Smith, I am 22 yrs old, I love listening
            to music, playing games. not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was
            popu popu Hello, My name is John Smith, I am 22 yrs old, I love
            listening to music, playing games. not only five centuries, but also
            the leap into electronic typesetting, remaining essentially
            unchanged. It was popu popu Hello, My name is John Smith, I am 22
            yrs old, I love listening to music, playing games. not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popu popu Hello, My name is John
            Smith, I am 22 yrs old, I love listening to music, playing
            games. not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popu popu
            Hello, My name is John Smith, I am 22 yrs old, I love listening to
            music, playing games. not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was
            popu popu Hello, My name is John Smith, I am 22 yrs old, I love
            listening to music, playing games. not only five centuries, but also
            the leap into electronic typesetting, remaining essentially
            unchanged. It was popu popu Hello, My name is John Smith, I am 22
            yrs old, I love listening to music, playing games. not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popu popu Hello, My name is John
            Smith, I am 22 yrs old, I love listening to music, playing
            games. not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popu popu
            Hello, My name is John Smith, I am 22 yrs old, I love listening to
            music, playing games. not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was
            popu popu Hello, My name is John Smith, I am 22 yrs old, I love
            listening to music, playing games. not only five centuries, but also
            the leap into electronic typesetting, remaining essentially
            unchanged. It was popu popu Hello, My name is John Smith, I am 22
            yrs old, I love listening to music, playing games. not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popu
          </Text>
        </Animated.View>
      </Animated.ScrollView>
    </ScreenWrapper>
  );
};

export default memo(UserCardDetail);

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    width: '100%',
    paddingBottom: 5,
  },
  headerContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  container: {
    top: 10,
    width: '90%',
    alignSelf: 'center',
    height: height * 0.86,
  },
  scrollViewContainContainer: {
    width: '100%',
  },
  flatListStyle: {
    width: '100%',
  },
  flatListContainContainer: {},
  imageContainerView: {},
  nameAndSocialLinkFlexView: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userNameText: {
    maxWidth: '60%',
    fontSize: 21,
    fontFamily: FONTS.SemiBold,
    color: COLORS.White,
  },
  socialIconsFlexView: {
    flexDirection: 'row',
    maxWidth: '40%',
    flexWrap: 'wrap',
  },
  socialIcons: {
    width: 28,
    height: 28,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  locationFlexView: {
    marginVertical: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  locationIcon: {
    width: 27,
    height: 27,
    resizeMode: 'contain',
  },
  locationText: {
    marginLeft: 3,
    fontSize: 16,
    color: COLORS.White,
    fontFamily: FONTS.SemiBold,
  },
  titleText: {
    fontSize: 20,
    marginTop: 15,
    marginVertical: 10,
    color: COLORS.White,
    fontFamily: FONTS.SemiBold,
  },
  interestFlexView: {
    marginVertical: 5,
    gap: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  interestButtonView: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  interestIcon: {
    width: 18,
    height: 18,
    justifyContent: 'center',
  },
  interestText: {
    fontSize: 15,
    color: COLORS.White,
    fontFamily: FONTS.SemiBold,
    marginLeft: 10,
  },
  aboutText: {
    fontSize: 17,
    marginTop: 3,
    lineHeight: 25,
    color: COLORS.White,
    fontFamily: FONTS.Regular,
  },
});
