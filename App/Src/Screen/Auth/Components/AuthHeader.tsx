import React, {FC} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {IconsPath} from '../../../Common/AssetsPath';
import ButtonView from '../../../Common/ButtonView';
import {AuthHeaderProps} from '../../../Types/Interfaces';

const AuthHeader: FC<AuthHeaderProps> = ({onBackPress}) => {
  return (
    <View style={styles.container}>
      <ButtonView ContainerStyle={styles.backButtonView} onPress={onBackPress}>
        <Image source={IconsPath.ic_back} style={styles.backIcon} />
      </ButtonView>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  backButtonView: {
    width: '10%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: 17,
    height: 17,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
});
