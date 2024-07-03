import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {
  TextInputProps as RNTextInputProps,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Splash: undefined;
  Welcome: undefined;
  AuthStack:
    | {
        screen?: 'Login' | 'Otp' | 'MoodSelect';
      }
    | undefined;
  Login: undefined;
  Otp: undefined;
  MoodSelect: undefined;
  BottomTab:
    | {
        screen?: 'Home' | 'People' | 'Cards' | 'Chat' | 'Profile';
      }
    | undefined;
  DrawerTab: undefined;
  Home: undefined;
  People: undefined;
  Cards: undefined;
  Likes: undefined;
  Chat: undefined;
  Profile: undefined;
};

export const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'ios',
  animationTypeForReplace: 'push',
  // presentation: 'transparentModal',
  // navigationBarColor: COLORS.Primary,
};

export interface ButtonProps extends TouchableOpacityProps {
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

export interface HeaderProps {
  onMenuPress?: () => void;
  onNotificationPress?: () => void;
}

export interface LikesDataProps {
  id: number;
  profile: string;
  index?: number;
}

export interface DrawerDataProps {
  id: number;
  name: string;
  screen: string;
  icon: number;
}

export interface TextInputProps extends RNTextInputProps {}

export interface RenderCardProps {
  card: any;
  cardIndex: number;
  onLikePress: () => void;
  onDislikePress: () => void;
  onProfilePress: () => void;
}
