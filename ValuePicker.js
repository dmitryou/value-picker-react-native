import React, { Component } from 'react';
import {
  View,
  FlatList, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  buildInitialArray,
  buildArrayUp,
  buildArrayDown,
} from './utils';
import ValueItem from './ValueItem';
import Arrow from './Arrow';

class ValuePicker extends Component<Props> {


  constructor(props) {
    super(props);
    this.state = {
      fullData: props.textsArray,
      renderedData: buildInitialArray(props.textsArray, props.initialActiveIndex),
      activeIndex: props.initialActiveIndex,
    };

  }

  componentDidMount() {
    const {
      activeItemCallback,
      textsArray,
      initialActiveIndex,
    } = this.props;
    activeItemCallback(textsArray[initialActiveIndex]);
  }

  scrollUp = () => {
    const {
      fullData,
      activeIndex,
    } = this.state;
    const {
      activeItemCallback,
    } = this.props;
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
      fullData
    } = this.state;
    const {
      mainColor,
      textsColor,
      arrowImgSrc,
    } = this.props;
    return (
      <View style={styles.staticContainer}>
        <Arrow
          onPress={this.scrollUp}
          arrowImgSrc={arrowImgSrc}
          disabled={activeIndex === 0}
        />
        <FlatList
          bounces={false}
          keyExtractor={(item, index) => index.toString()}
          data={renderedData}
          renderItem={({ item }) => {
            return <ValueItem
              item={item}
              mainColor={mainColor}
              textsColor={textsColor}
            />;
          }}
        />
        <Arrow
          onPress={this.scrollDown}
          arrowImgSrc={arrowImgSrc}
          disabled={activeIndex === fullData.length - 1}
          type={'down'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  staticContainer: {
    height: 320,
    width: '100%',
  },
});

ValuePicker.propTypes = {
  textsArray: PropTypes.array,
  initialActiveIndex: PropTypes.number,
};

ValuePicker.defaultProps = {
  textsArray: ['Item 0', 'Item 1', 'Item 2', 'Item 3', 'Item 4'],
  initialActiveIndex: 2,
  arrowImgSrc: require('./images/arrowUp.png'),
};

ValueItem.propTypes = {
  textsArray: PropTypes.array,
  initialActiveIndex: PropTypes.number,
  mainColor: PropTypes.string,
  textsColor: PropTypes.string,
};

ValueItem.defaultProps = {
  mainColor: '#50c878',
  textsColor: 'black',
};

export default ValuePicker;