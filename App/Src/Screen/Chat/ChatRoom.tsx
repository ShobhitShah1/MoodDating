/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useState} from 'react';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {
  Bubble,
  GiftedChat,
  IMessage,
  InputToolbar,
  InputToolbarProps,
} from 'react-native-gifted-chat/src';
import {ImagesPath} from '../../Common/AssetsPath';
import {blackView} from '../../Components/ScreenWrapper';
import RenderChatHeader from './Components/RenderChatHeader';
import {SMALL_IMAGE} from '../../Common/GlobalConfig';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, FONTS} from '../../Theme/Theme';

const MessengerBarContainer = (props: InputToolbarProps<IMessage>) => {
  return (
    <InputToolbar
      {...props}
      containerStyle={{
        backgroundColor: COLORS.White,
        alignContent: 'center',
        justifyContent: 'center',
        borderWidth: 0,
        paddingTop: 6,
        marginHorizontal: 6,
        borderTopColor: 'transparent',
      }}
    />
  );
};

const renderBubble = (props: Bubble<IMessage>['props']) => {
  const fontStyle: TextStyle = {
    fontSize: 14,
    color: COLORS.White,
    fontFamily: FONTS.Medium,
  };
  const wrapperStyle: ViewStyle = {
    backgroundColor: 'rgba(255, 65, 101, 1)',
    padding: 10,
    marginTop: 10,
    marginBottom: 5,
    paddingHorizontal: 20,
  };

  return (
    <Bubble
      {...props}
      textStyle={{right: fontStyle, left: fontStyle}}
      wrapperStyle={{
        left: {
          ...wrapperStyle,
          borderTopLeftRadius: 35,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 0,
        },
        right: {
          ...wrapperStyle,
          borderTopRightRadius: 35,
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 0,
        },
      }}
    />
  );
};

const ChatRoom = () => {
  const [messages, setMessages] = useState<IMessage[]>(
    Array.from({length: 3}, (_, i) => ({
      _id: i,
      text: `Message ${i}`,
      createdAt: new Date(),
      user: {
        _id: i % 2 === 0 ? 2 : 1,
        name: 'Jenni_32',
        avatar: SMALL_IMAGE,
      },
    })) as IMessage[],
  );

  const onSend = useCallback((data: IMessage[]) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, data));
  }, []);

  return (
    <ImageBackground
      style={styles.container}
      source={ImagesPath.SplashBackground}
      blurRadius={80}>
      <SafeAreaView style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={blackView} />

        <RenderChatHeader />

        <GiftedChat
          user={{_id: 1}}
          messages={messages}
          renderTime={() => null}
          renderInputToolbar={props => MessengerBarContainer(props)}
          renderBubble={props => renderBubble(props)}
          onSend={(messageSendData: IMessage[]) => onSend(messageSendData)}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
});
