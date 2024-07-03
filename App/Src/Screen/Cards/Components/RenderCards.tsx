import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IconsPath} from '../../../Common/AssetsPath';
import ButtonView from '../../../Common/ButtonView';
import {COLORS, FONTS} from '../../../Theme/Theme';
import {RenderCardProps} from '../../../Types/Interfaces';

let SMALL_ICON_SIZE = 40;

const RenderCards: FC<RenderCardProps> = ({
  card,
  cardIndex,
  onDislikePress,
  onLikePress,
  onProfilePress,
}) => {
  const backgroundColor =
    cardIndex % 2 === 0 ? COLORS.Primary : COLORS.DarkGrey;
  return (
    <View key={cardIndex} style={[styles.card]}>
      <ButtonView
        activeOpacity={1}
        onPress={onProfilePress}
        style={[styles.topView, {backgroundColor}]}>
        <Image source={{uri: card.image}} style={styles.cardImage} />
      </ButtonView>
      <View style={styles.bottomView}>
        <View style={styles.buttonFlexView}>
          <ButtonView onPress={onLikePress} style={styles.buttonViewStyle}>
            <Image
              source={IconsPath.ic_heart_without_fill}
              style={styles.iconStyle}
            />
          </ButtonView>
          <ButtonView
            disable
            onPress={() => {}}
            style={styles.matchPercentButtonView}>
            <Text style={styles.matchPercentText}>
              70%{' '}
              <Image
                source={IconsPath.ic_heart_fill}
                style={styles.fillHeartIcon}
              />{' '}
              Match
            </Text>
          </ButtonView>
          <ButtonView onPress={onDislikePress} style={styles.buttonViewStyle}>
            <Image
              source={IconsPath.ic_cancel_with_border}
              style={styles.iconStyle}
            />
          </ButtonView>
        </View>
      </View>
    </View>
  );
};

export default RenderCards;

const styles = StyleSheet.create({
  card: {
    width: '90%',
    height: '75%',
    overflow: 'hidden',
    borderRadius: 4,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  topView: {
    width: '100%',
    height: '89%',
    borderRadius: 30,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.Primary,
  },
  bottomView: {
    width: '87%',
    height: '11%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: 'rgba(247, 195, 215, 1)',
  },
  buttonFlexView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonViewStyle: {
    width: SMALL_ICON_SIZE,
    height: SMALL_ICON_SIZE,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.White,
  },
  matchPercentButtonView: {
    paddingHorizontal: 15,
    height: SMALL_ICON_SIZE,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: COLORS.White,
  },
  matchPercentText: {
    fontSize: 13,
    color: COLORS.Primary,
    fontFamily: FONTS.Medium,
  },
  iconStyle: {
    width: SMALL_ICON_SIZE / 2,
    height: SMALL_ICON_SIZE / 2,
    resizeMode: 'contain',
  },
  fillHeartIcon: {
    width: 16,
    height: 16,
    marginHorizontal: 5,
    alignItems: 'center',
    resizeMode: 'contain',
    justifyContent: 'center',
  },
});
