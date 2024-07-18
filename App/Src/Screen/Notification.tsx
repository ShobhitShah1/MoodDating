import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import ScreenWrapper from '../Components/ScreenWrapper';
import {FlashList} from '@shopify/flash-list';
import HeaderView from './Home/Components/HeaderView';
import {COLORS, FONTS} from '../Theme/Theme';
import {SMALL_IMAGE} from '../Common/GlobalConfig';

const {width, height} = Dimensions.get('window');

interface Contact {
  firstName: string;
  lastName: string;
}

const contacts: (string | Contact)[] = [
  {firstName: 'John', lastName: 'Aaron'},
  {firstName: 'Alice', lastName: 'Anderson'},
  'B',
  {firstName: 'Brian', lastName: 'Baker'},
  {firstName: 'Barbara', lastName: 'Brown'},
  'C',
  {firstName: 'Charlie', lastName: 'Clark'},
  {firstName: 'Catherine', lastName: 'Carter'},
  'D',
  {firstName: 'John', lastName: 'Doe'},
  {firstName: 'David', lastName: 'Dawson'},
  {firstName: 'Mary', lastName: 'Dianne'},
  {firstName: 'Diana', lastName: 'Daniels'},
  'E',
  {firstName: 'Eve', lastName: 'Evans'},
  {firstName: 'Edward', lastName: 'Edwards'},
  'F',
  {firstName: 'Frank', lastName: 'Foster'},
  {firstName: 'Fiona', lastName: 'Fitzgerald'},
  'G',
  {firstName: 'Grace', lastName: 'Green'},
  {firstName: 'George', lastName: 'Graham'},
  'H',
  {firstName: 'Hank', lastName: 'Harris'},
  {firstName: 'Helen', lastName: 'Hughes'},
  'I',
  {firstName: 'Ivy', lastName: 'Irving'},
  {firstName: 'Isaac', lastName: 'Ingram'},
  'J',
  {firstName: 'Jack', lastName: 'Johnson'},
  {firstName: 'Jessica', lastName: 'Jones'},
  'K',
  {firstName: 'Karen', lastName: 'King'},
  {firstName: 'Kevin', lastName: 'Knight'},
  'L',
  {firstName: 'Larry', lastName: 'Lewis'},
  {firstName: 'Laura', lastName: 'Lane'},
  'M',
  {firstName: 'Mary', lastName: 'Dianne'},
  {firstName: 'Michael', lastName: 'Miller'},
  'N',
  {firstName: 'Nancy', lastName: 'Nelson'},
  {firstName: 'Nathan', lastName: 'Newman'},
  'O',
  {firstName: 'Oscar', lastName: 'Owens'},
  {firstName: 'Olivia', lastName: 'Olsen'},
  'P',
  {firstName: 'Paul', lastName: 'Parker'},
  {firstName: 'Patricia', lastName: 'Peterson'},
  'Q',
  {firstName: 'Quinn', lastName: 'Quincy'},
  {firstName: 'Queenie', lastName: 'Quick'},
  'R',
  {firstName: 'Rachel', lastName: 'Roberts'},
  {firstName: 'Robert', lastName: 'Richardson'},
  'S',
  {firstName: 'Sam', lastName: 'Smith'},
  {firstName: 'Sarah', lastName: 'Scott'},
  'T',
  {firstName: 'Tom', lastName: 'Thompson'},
  {firstName: 'Tina', lastName: 'Turner'},
  'U',
  {firstName: 'Ursula', lastName: 'Underwood'},
  {firstName: 'Ulysses', lastName: 'Ulrich'},
  'V',
  {firstName: 'Victor', lastName: 'Vance'},
  {firstName: 'Violet', lastName: 'Vincent'},
  'W',
  {firstName: 'Walter', lastName: 'White'},
  {firstName: 'Wendy', lastName: 'Williams'},
  'X',
  {firstName: 'Xander', lastName: 'Xavier'},
  {firstName: 'Xenia', lastName: 'Xander'},
  'Y',
  {firstName: 'Yara', lastName: 'Young'},
  {firstName: 'Yosef', lastName: 'York'},
  'Z',
  {firstName: 'Zach', lastName: 'Zimmerman'},
  {firstName: 'Zoe', lastName: 'Zane'},
];

const RenderNotification = ({item}: {item: Contact}) => {
  return (
    <View style={styles.notificationContainerView}>
      <View style={styles.notificationProfileView}>
        <Image source={{uri: SMALL_IMAGE}} style={styles.notificationProfile} />
      </View>

      <View style={styles.titleAndTimeContainer}>
        <Text style={styles.titleText}>
          Amanda like your post and Alexa comment on your post
        </Text>
        <Text style={styles.timeText}>10 min ago </Text>
      </View>

      {true && (
        <View style={styles.newView}>
          <Text style={styles.newN}>N</Text>
        </View>
      )}
    </View>
  );
};

const Notification = () => {
  return (
    <ScreenWrapper containerStyle={styles.wrapper}>
      <View style={styles.headerContainer}>
        <HeaderView title="Notification" showNotificationButton={false} />
      </View>
      <View style={styles.container}>
        <FlashList
          data={contacts}
          renderItem={({item}) => {
            if (typeof item === 'string') {
              return (
                <View style={styles.header}>
                  <Text style={styles.headerText}>{item}</Text>
                </View>
              );
            } else {
              return <RenderNotification item={item} />;
            }
          }}
          getItemType={item => {
            return typeof item === 'string' ? 'sectionHeader' : 'row';
          }}
          estimatedItemSize={100}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Notification;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  container: {
    width,
    height,
    marginVertical: 15,
  },
  header: {
    borderTopWidth: 0.8,
    borderBottomWidth: 0.8,
    marginVertical: 15,
    borderColor: 'rgba(172, 172, 172, 0.37)',
  },
  headerText: {
    width: '90%',
    fontSize: 18,
    marginVertical: 10,
    alignSelf: 'center',
    color: COLORS.White,
    fontFamily: FONTS.Regular,
  },
  headerContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  notificationContainerView: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'rgba(172, 172, 172, 0.37)',
  },
  notificationProfileView: {
    width: '15%',
    overflow: 'hidden',
  },
  notificationProfile: {
    width: 55,
    height: 55,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: COLORS.White,
  },
  titleAndTimeContainer: {
    width: '70%',
  },
  titleText: {
    color: COLORS.White,
    fontFamily: FONTS.Medium,
    fontSize: 16.2,
    marginBottom: 5,
    lineHeight: 22,
  },
  timeText: {
    color: 'rgba(183, 183, 183, 1)',
    fontFamily: FONTS.Medium,
    fontSize: 13,
  },
  newView: {
    width: '6%',
    height: 22,
    borderRadius: 500,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    backgroundColor: COLORS.Primary,
  },
  newN: {
    fontSize: 13,
    textAlign: 'center',
    color: COLORS.White,
    fontFamily: FONTS.Bold,
  },
});
