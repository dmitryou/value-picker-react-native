import React, { Component } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Image, StyleSheet
} from 'react-native';
import {
  buildInitialArray,
  buildArrayUp,
  buildArrayDown,
} from './renderItemUtils';
import ValueItem from './ValueItem';

export default class ValuePicker extends Component<Props> {


  constructor(props) {
    super(props);
    this.state = {
      fullData: props.fullData,
      renderedData: buildInitialArray(props.fullData, props.initialActiveIndex),
      activeIndex: props.initialActiveIndex,
    };

  }

  componentDidMount() {
    const {
      activeItemCallback,
      fullData,
      initialActiveIndex,
    } = this.props;
    activeItemCallback(fullData[initialActiveIndex]);
  }

  scrollUp = () => {
    const {
      fullData,
      activeIndex,
    } = this.state;
    const {
      activeItemCallback,
    } = this.props;
    console.log('scrollUp');
    this.setState({
      renderedData: buildArrayUp(fullData, activeIndex),
      activeIndex: activeIndex - 1,
    }, () => {
      activeItemCallback(fullData[activeIndex - 1], activeIndex - 1);
    });
  }

  scrollDown = () => {
    const {
      fullData,
      activeIndex,
    } = this.state;
    const {
      activeItemCallback,
    } = this.props;
    console.log('scrollDown');
    this.setState({
      renderedData: buildArrayDown(fullData, activeIndex),
      activeIndex: activeIndex + 1,
    }, () => {
      activeItemCallback(fullData[activeIndex + 1], activeIndex + 1);
    });
  }

  render() {
    const {
      renderedData,
      activeIndex,
    } = this.state;
    const {
      mainColor,
      arrowImgSrc,
      fullData
    } = this.props;
    return (
      <View style={{
        flex: 1
      }}>
        <View
          style={styles.iconContainer}
        >
          <TouchableOpacity
            onPress={this.scrollUp}
            disabled={activeIndex === 0}
          >
            <Image
              style={{
                width: 40,
                height: 40
              }}
              source={arrowImgSrc}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          bounces={false}
          keyExtractor={(item, index) => index.toString()}
          data={renderedData}
          renderItem={({ item, index }) => {
            return <ValueItem
              item={item}
              mainColor={mainColor}
            />;
          }}
        />
        <View
          style={[
            styles.iconContainer,
            styles.iconDown,
          ]}
        >
          <TouchableOpacity
            onPress={this.scrollDown}
            disabled={activeIndex === fullData.length - 1}
          >
            <Image
              style={{
                width: 40,
                height: 40
              }}
              source={arrowImgSrc}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  iconContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconDown: {
    transform: [{ rotateX: '180deg' }],
  }
});