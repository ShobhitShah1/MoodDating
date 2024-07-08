import React from 'react';
import {Text} from 'react-native';
import ScreenWrapper from '../../Components/ScreenWrapper';
import ButtonView from '../../Common/ButtonView';
import useCustomNavigation from '../../Routes/Helpers/useCustomNavigation';

const Chat = () => {
  const navigation = useCustomNavigation();

  return (
    <ScreenWrapper>
      <ButtonView onPress={() => navigation.navigate('ChatRoom')}>
        <Text>click for chat screen</Text>
      </ButtonView>
    </ScreenWrapper>
  );
};

export default Chat;
