import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Types/Interfaces';

export default function useCustomNavigation() {
  return useNavigation<NativeStackNavigationProp<RootStackParamList>>();
}
