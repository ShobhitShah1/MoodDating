import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ButtonProps} from '../Types/Interfaces';
import {SIZE} from '../Theme/Theme';

const ButtonView: FC<ButtonProps> = ({
  title,
  onPress,
  disable,
  ContainerStyle,
  TextStyle,
  children,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={SIZE.activeOpacity}
      style={ContainerStyle}
      disabled={disable}
      onPress={onPress}>
      {title ? <Text style={TextStyle}>{title}</Text> : children}
    </TouchableOpacity>
  );
};

export default ButtonView;
