import React, {useCallback, useMemo, useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ScreenWrapper from '../../Components/ScreenWrapper';
import Swiper from '../../Components/Swiper/Swiper';
import HeaderView from '../Home/components/HeaderView';
import RenderCards from './Components/RenderCards';
import useCustomNavigation from '../../Routes/Helpers/useCustomNavigation';

const Cards = () => {
  const swiperRef = useRef<Swiper>(null);
  const navigation = useCustomNavigation();

  const SwiperCardsData = useMemo(
    () =>
      Array.from({length: 1000}, (_, i) => ({
        id: i,
        age: 25,
        distance: 10,
        name: 'Swipe Card',
        image: `https://picsum.photos/id/${i + 11}/200/300`,
      })),
    [],
  );

  const onLikePress = useCallback(() => {
    swiperRef.current?.swipeRight();
  }, []);

  const onDislikePress = useCallback(() => {
    swiperRef.current?.swipeLeft();
  }, []);

  const onProfilePress = useCallback(() => {
    navigation.navigate('AuthStack');
  }, [navigation]);

  const onSwiped = useCallback((cardIndex: number) => {
    console.log(cardIndex);
  }, []);

  const onSwipedAll = useCallback(() => {
    console.log('onSwipedAll');
    swiperRef.current?.renderStack();
    swiperRef.current?.forceUpdate();
  }, []);

  return (
    <ScreenWrapper>
      <HeaderView />

      <View style={styles.cardContainer}>
        <Swiper
          ref={swiperRef}
          cards={SwiperCardsData}
          renderCard={(card: any, cardIndex: number) => {
            return (
              <RenderCards
                card={card}
                cardIndex={cardIndex}
                onLikePress={onLikePress}
                onDislikePress={onDislikePress}
                onProfilePress={onProfilePress}
              />
            );
          }}
          cardIndex={0}
          stackSize={3}
          marginBottom={0}
          marginTop={60}
          childrenOnTop={true}
          disableTopSwipe={true}
          disableBottomSwipe={true}
          stackSeparation={-55}
          stackScale={7}
          swipeBackCard={true}
          cardVerticalMargin={40}
          cardHorizontalMargin={0}
          onSwiped={onSwiped}
          onSwipedAll={onSwipedAll}
          backgroundColor={'transparent'}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Cards;

const styles = StyleSheet.create({
  cardContainer: {
    height: '90%',
    zIndex: 999,
  },
  container: {
    width: '80%',
    height: '70%',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
