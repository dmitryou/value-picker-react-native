import React from 'react';
import {
  View,
  Text, StyleSheet,
} from 'react-native';

const ValueItem = ({ item, mainColor, textsColor }) => {

  let background;
  const text = item.text ? item.text.toUpperCase() : '';
  const textIsEmpty = ( text === '');

  if (textIsEmpty) {
    background = {};
  } else {
    background = {
      backgroundColor: mainColor,
    };
  }

  return (
    <View style={styles.container}>
      <View style={[
        {
          height: item.height,
          opacity: item.opacity,
          width: item.width,
        },
        background,
        styles.itemStyles,
      ]}>
        {
          (!textIsEmpty) ?
            <Text style={{
              fontSize: item.fontSize,
              color: textsColor
            }}>
              {text}
            </Text> :
            null
        }

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