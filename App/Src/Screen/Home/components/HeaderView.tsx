import React, {FC, memo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IconsPath} from '../../../Common/AssetsPath';
import ButtonView from '../../../Common/ButtonView';
import useCustomNavigation from '../../../Helpers/useCustomNavigation';
import {HeaderProps} from '../../../Types/Interfaces';
import {COLORS, FONTS} from '../../../Theme/Theme';

let ICON_VIEW_SIZE = 48;

const HeaderView: FC<HeaderProps> = ({
  onMenuPress,
  onNotificationPress,
  title,
  showNotificationButton = true,
}) => {
  const navigation = useCustomNavigation() as any;
  return (
    <View style={styles.container}>
      <ButtonView
        onPress={() => {
          onMenuPress ? onMenuPress() : navigation?.openDrawer();
        }}
        style={styles.iconsContainer}>
        <Image
          resizeMode="cover"
          style={styles.icons}
          source={IconsPath.ic_menu}
        />
      </ButtonView>

      <View>
        {title?.length !== 0 ? (
          <Text style={styles.titleText}>{title}</Text>
        ) : (
          <></>
        )}
      </View>
      <View>
        {showNotificationButton && (
          <ButtonView
            onPress={() => {
              onNotificationPress
                ? onNotificationPress()
                : navigation.navigate('Notification');
            }}
            style={styles.iconsContainer}>
            <Image
              resizeMode="cover"
              style={styles.icons}
              source={IconsPath.ic_notification}
            />
          </ButtonView>
        )}
      </View>
    </View>
  );
};

export default memo(HeaderView);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconsContainer: {
    width: ICON_VIEW_SIZE,
    height: ICON_VIEW_SIZE,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icons: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: COLORS.White,
    fontFamily: FONTS.SemiBold,
    fontSize: 19,
    right: 18,
    textAlign: 'center',
  },
});
