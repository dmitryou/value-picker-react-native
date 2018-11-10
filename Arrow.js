import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const Arrow = ({ onPress, disabled, arrowImgSrc, type }) => {

  return (
    <View
      style={[
        styles.iconContainer,
        (type ==='down') ? styles.iconDown : {}
      ]}
    >
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
      >
        <Image
          style={styles.iconSize}
          source={arrowImgSrc}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconDown: {
    transform: [{ rotateX: '180deg' }],
  },
  iconSize: {
    width: 40,
    height: 40
  },
});

export default Arrow;