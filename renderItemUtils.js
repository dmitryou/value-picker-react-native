export const buildInitialArray = (initialArray, initialActiveIndex) => {
  const textsArray = initialArray.slice(
    initialActiveIndex - 2,
    initialActiveIndex + 3);
  const arrayWithStyles = applyStyles(textsArray);
  return arrayWithStyles;
}

export const buildArrayUp = (initialArray, activeIndex) => {
  let textsArray = [];
  if(activeIndex === 2) {
    textsArray = initialArray.slice(
      activeIndex - 2,
      activeIndex + 2);
    textsArray.unshift('');
  } else if(activeIndex === 1) {
    textsArray = initialArray.slice(
      activeIndex - 1,
      activeIndex + 2);
    textsArray.unshift('');
    textsArray.unshift('');
  } else if(activeIndex === initialArray.length - 1) {
    textsArray = initialArray.slice(
      activeIndex - 3,
      activeIndex + 2);
    textsArray.push('');
  } else {
    textsArray = initialArray.slice(
      activeIndex - 3,
      activeIndex + 2);
  }
  const arrayWithStyles = applyStyles(textsArray);
  return arrayWithStyles;
}

export const buildArrayDown = (initialArray, activeIndex) => {
  let textsArray = [];
  if(activeIndex === 0) {
    textsArray = initialArray.slice(
      activeIndex,
      activeIndex + 4);
    textsArray.unshift('');
  } else if(activeIndex === 1) {
    textsArray = initialArray.slice(
      activeIndex,
      activeIndex + 5);
  } else if(activeIndex === initialArray.length - 3) {
    textsArray = initialArray.slice(
      activeIndex - 1,
      activeIndex + 4);
    textsArray.push('');
  } else if(activeIndex === initialArray.length - 2) {
    textsArray = initialArray.slice(
      activeIndex - 1,
      activeIndex + 4);
    textsArray.push('');
    textsArray.push('');
  } else {
    textsArray = initialArray.slice(
      activeIndex - 1,
      activeIndex + 4);
  }
  const arrayWithStyles = applyStyles(textsArray);
  return arrayWithStyles;
}

const applyStyles = (textsArray) => {
  const withAppliedStyles = textsArray.map((item, index)=> {
    return {
      text: item,
      height: getHeight(index),
      opacity: getOpacity(index),
      width: getWidth(index),
      fontSize: getFontSize(index),
    }
  })
  return withAppliedStyles;
}

const getHeight = (index) => {
  switch (index) {
    case 0:
    case 4:
      return 30;
    case 1:
    case 3:
      return 40;
    case 2:
      return 50;
    default:
      return 0;
  }
}

const getWidth = (index) => {
  switch (index) {
    case 0:
    case 4:
      return '40%';
    case 1:
    case 3:
      return '50%';
    case 2:
      return '60%';
    default:
      return '0%';
  }
}

const getOpacity = (index) => {
  switch (index) {
    case 0:
    case 4:
      return 0.3;
    case 1:
    case 3:
      return 0.6;
    case 2:
      return 0.9;
    default:
      return 0;
  }
}

const getFontSize = (index) => {
  switch (index) {
    case 0:
    case 4:
      return 10;
    case 1:
    case 3:
      return 14;
    case 2:
      return 18;
    default:
      return 0;
  }
}