import React, {FC} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {IconsPath} from '../../../Common/AssetsPath';
import {COLORS} from '../../../Theme/Theme';
import {HeaderProps} from '../../../Types/Interfaces';
import ButtonView from '../../../Common/ButtonView';
import useCustomNavigation from '../../../Routes/Helpers/useCustomNavigation';

let ICON_VIEW_SIZE = 40;

const HeaderView: FC<HeaderProps> = ({onMenuPress, onNotificationPress}) => {
  const navigation = useCustomNavigation() as any;
  return (
    <View style={styles.container}>
      <ButtonView
        onPress={() => {
          onMenuPress ? onMenuPress() : navigation?.openDrawer();
        }}
        style={styles.iconsContainer}>
        <Image
          resizeMode="contain"
          style={styles.icons}
          source={IconsPath.ic_menu}
        />
      </ButtonView>

      <View>
        <></>
      </View>
      <ButtonView
        onPress={() => {
          onNotificationPress
            ? onNotificationPress()
            : navigation.navigate('Notification');
        }}
        style={styles.iconsContainer}>
        <Image
          resizeMode="contain"
          style={styles.icons}
          source={IconsPath.ic_notification}
        />
      </ButtonView>
    </View>
  );
};

export default HeaderView;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconsContainer: {
    width: ICON_VIEW_SIZE,
    height: ICON_VIEW_SIZE,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.Primary,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  icons: {
    width: ICON_VIEW_SIZE / 1.9,
    height: ICON_VIEW_SIZE / 1.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadowContainer: {
    position: 'relative',
  },
  topShadow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 10,
  },
});
