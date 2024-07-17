import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS, FONTS} from '../../../Theme/Theme';

interface ProfileTextInputProps extends TextInputProps {
  title: string;
}

const ProfileTextInputView: FC<ProfileTextInputProps> = ({
  title,
  ...restProps
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <TextInput
        style={styles.textInput}
        placeholderTextColor={'rgba(255, 255, 255, 0.31)'}
        {...restProps}
      />
    </View>
  );
};

export default ProfileTextInputView;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    marginBottom: 30,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(116, 116, 116, 1)',
  },
  titleText: {
    color: COLORS.White,
    fontFamily: FONTS.Medium,
    fontSize: 18,
  },
  textInput: {
    height: 40,
    color: COLORS.Primary,
    fontSize: 13,
    fontFamily: FONTS.Medium,
    marginTop: 15,
  },
});
