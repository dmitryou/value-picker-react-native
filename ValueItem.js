import React from 'react';
import {
  View,
  Text, StyleSheet,
} from 'react-native';

const ValueItem = ({ item, mainColor, textsColor }) => {

  const text = item.text ? item.text.toUpperCase() : '';
  return (
    <View style={styles.container}>
      <View style={[
        {
          height: item.height,
          opacity: item.opacity,
          width: item.width,
          backgroundColor: mainColor || '#50c878',
        },
        styles.itemStyles,
      ]}>
        <Text style={{
          fontSize: item.fontSize,
          color: textsColor || 'black'
        }}>
          {text}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  itemStyles: {
    borderRadius: 30,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ValueItem;