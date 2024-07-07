import React, {FC} from 'react';
import {Animated, StyleSheet, View, useWindowDimensions} from 'react-native';
import {COLORS} from '../Theme/Theme';

interface PaginatorProps {
  data: any[];
  scrollX: any;
}

const Paginator: FC<PaginatorProps> = ({data, scrollX}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: [COLORS.White, COLORS.Pink, COLORS.White],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[styles.dot, {backgroundColor}]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    bottom: 10,
    zIndex: 9999,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 50,
    marginHorizontal: 4,
    backgroundColor: COLORS.White,
  },
});
