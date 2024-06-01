import React from 'react';
import {View, StyleSheet, ViewStyle, StyleProp} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';

interface InnerShadowProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  shadowColor: string;
}

const InnerShadow: React.FC<InnerShadowProps> = ({
  children,
  style,
  shadowColor,
}) => {
  return (
    <View style={[styles.shadowContainer, style]}>
      <LinearGradient
        colors={[shadowColor, 'transparent']}
        style={styles.topShadow}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
      />
      <LinearGradient
        colors={['transparent', shadowColor]}
        style={styles.bottomShadow}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
      />
      <LinearGradient
        colors={[shadowColor, 'transparent']}
        style={styles.leftShadow}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
      />
      <LinearGradient
        colors={['transparent', shadowColor]}
        style={styles.rightShadow}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  shadowContainer: {
    position: 'relative',
  },
  topShadow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 10,
  },
  bottomShadow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 10,
  },
  leftShadow: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 10,
  },
  rightShadow: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    width: 10,
  },
});

export default InnerShadow;
