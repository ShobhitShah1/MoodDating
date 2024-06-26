import {IconsPath} from '../../Common/AssetsPath';
import {MoodDataProps} from '../../Types/Interfaces';

export const moods: MoodDataProps[] = [
  {
    name: 'Happy',
    emoji: '😊',
    primaryColor: '#FFD700',
    lightColor: '#FFF9C4',
  },
  {
    name: 'Sad',
    emoji: '😢',
    primaryColor: '#6495ED',
    lightColor: '#BCD2EE',
  },
  {
    name: 'Excited',
    emoji: '🎉',
    primaryColor: '#FF6347',
    lightColor: '#FFA07A',
  },
  {
    name: 'Angry',
    emoji: '😡',
    primaryColor: '#FF4500',
    lightColor: '#FF6347',
  },
  {
    name: 'Relaxed',
    emoji: '😌',
    primaryColor: '#87CEEB',
    lightColor: '#B0E0E6',
  },
  {
    name: 'Grateful',
    emoji: '🙏',
    primaryColor: '#32CD32',
    lightColor: '#98FB98',
  },
  {
    name: 'Confused',
    emoji: '😕',
    primaryColor: '#808080',
    lightColor: '#D3D3D3',
  },
  {
    name: 'Loved',
    emoji: '😍',
    primaryColor: '#FF69B4',
    lightColor: '#FFC0CB',
  },
  {
    name: 'Surprised',
    emoji: '😮',
    primaryColor: '#FFA07A',
    lightColor: '#FFDAB9',
  },
  {
    name: 'Hopeful',
    emoji: '🤞',
    primaryColor: '#FF7F50',
    lightColor: '#FFA07A',
  },
  {
    name: 'Bored',
    emoji: '😑',
    primaryColor: '#DEB887',
    lightColor: '#FFDAB9',
  },
  {
    name: 'Peaceful',
    emoji: '☮️',
    primaryColor: '#5F9EA0',
    lightColor: '#B0C4DE',
  },
  {
    name: 'Enthusiastic',
    emoji: '🤩',
    primaryColor: '#FFD700',
    lightColor: '#FFFACD',
  },
  {
    name: 'Content',
    emoji: '😌',
    primaryColor: '#8A2BE2',
    lightColor: '#DDA0DD',
  },
  {
    name: 'Nostalgic',
    emoji: '📼',
    primaryColor: '#FFD700',
    lightColor: '#FFFACD',
  },
  {
    name: 'Anxious',
    emoji: '😬',
    primaryColor: '#FF6347',
    lightColor: '#FFA07A',
  },
];

export const DrawerData: {
  id: number;
  name: string;
  screen: string;
  icon: number;
}[] = [
  {
    id: 0,
    name: 'My Profile',
    screen: 'myProfile',
    icon: IconsPath.ic_user_profile,
  },
  {
    id: 1,
    name: 'Notification',
    screen: 'myProfile',
    icon: IconsPath.ic_notification_filled,
  },
  {
    id: 2,
    name: 'Account Setting',
    screen: 'myProfile',
    icon: IconsPath.ic_settingProfile,
  },
  {
    id: 3,
    name: 'Invite Friends',
    screen: 'myProfile',
    icon: IconsPath.ic_mdi_invite,
  },
  {id: 4, name: 'Help', screen: 'myProfile', icon: IconsPath.ic_raphael_help},
  {id: 5, name: 'Contact', screen: 'myProfile', icon: IconsPath.ic_contact},
];
