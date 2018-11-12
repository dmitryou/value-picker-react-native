## Value picker with specific UI

## OIS
![alt text](https://github.com/dmitryou/value-picker-react-native/blob/master/images/IOS.png)

## ANDROID
![alt text](https://github.com/dmitryou/value-picker-react-native/blob/master/images/ANDROID.png)



## Install
```npm install value-picker-react-native --save```

## Import

```import ValuePicker from 'value-picker-react-native';```

## Usage

```<ValuePicker```<br />
    ```textsArray={['Item 0', 'Item 1', 'Item 2', 'Item 3', 'Item 4']}```<br />
    ```initialActiveIndex={5}```<br />
    ```activeItemCallback={()=>{console.log('callback to call on Arrow press')}```<br />
    ```mainColor={'#50c878'}```<br />
    ```textsColor={'white'}```<br />
    ```arrowImgSrc={require('./valuePickerReactNative/images/arrowUp.png')}```<br />
``` />```<br />

## Properties

| Prop               | Type      | Optional | Default                                             | Description
|--------------------|-----------|----------|-----------------------------------------------------|-------------
| textsArray         | Array     | true     | ['Item 0', 'Item 1', 'Item 2', 'Item 3', 'Item 4']  | Array of values will shown in picker.
| initialActiveIndex | number    | true     | 3                                                   | Active index. Index of text that will appear in picker firstly.
| mainColor          | Color     | true     | '#50c878'                                           | Color of active item background.
| textsColor         | Color     | true     | 'black'                                             | Color of texts.
| activeItemCallback | function  | true     |  ()=>{}                                             | Callback to call on UP/DOWN click it called with 2 parameters (text, index).


