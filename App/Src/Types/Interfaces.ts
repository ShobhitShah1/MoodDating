import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {TextInputProps as RNTextInputProps, ViewStyle} from 'react-native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Welcome: undefined;
  AuthStack:
    | {
        screen?: 'Login' | 'Otp' | 'MoodSelect';
      }
    | undefined;
  Login: undefined;
  Otp: undefined;
  MoodSelect: undefined;
};

export const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'ios',
  animationTypeForReplace: 'push',
  // presentation: 'transparentModal',
  // navigationBarColor: COLORS.Primary,
};

export interface ButtonProps {
  title?: string;
  onPress: () => void;
  disable?: boolean;
  ContainerStyle?: ViewStyle | ViewStyle[];
  TextStyle?: object;
  children?: React.ReactNode;
}

export interface AuthHeaderProps {
  onBackPress: () => void;
}

export interface MoodDataProps {
  name: string;
  emoji: string;
  primaryColor: string;
  lightColor: string;
}

export interface TextInputProps extends RNTextInputProps {}
