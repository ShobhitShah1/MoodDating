import React from 'react';
import {StyleSheet, Text} from 'react-native';
import ButtonView from '../../Common/ButtonView';
import ScreenWrapper from '../../Components/ScreenWrapper';
import useCustomNavigation from '../../Routes/Helpers/useCustomNavigation';
import {COLORS, FONTS} from '../../Theme/Theme';

const Chat = () => {
  const navigation = useCustomNavigation();

  return (
    <ScreenWrapper>
      <ButtonView onPress={() => navigation.navigate('ChatRoom')}>
        <Text style={styles.text}>click for chat screen</Text>
      </ButtonView>
    </ScreenWrapper>
  );
};

export default Chat;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: COLORS.White,
    fontFamily: FONTS.Bold,
  },
});
