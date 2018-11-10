import React from 'react';
import {
  View,
  Text,
} from 'react-native';

const ValueItem = ({ item, mainColor }) => {

  const text = item.text ? item.text.toUpperCase() : ''
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
    }}>
      <View style={{
        height: item.height,
        opacity: item.opacity,
        width: item.width,
        backgroundColor: mainColor,
        borderRadius: 30,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text style={{
          fontSize: item.fontSize,
          color: 'white'
        }}>
          {text}
        </Text>
      </View>
    </View>
  );
};


export default ValueItem;