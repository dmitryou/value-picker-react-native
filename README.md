VALUE PICKER WITH SPECIFIC UI
================================

OIS
================================
![alt text](https://github.com/dmitryou/value-picker-react-native/blob/master/IOS.png)

ANDROID
================================
![alt text](https://github.com/dmitryou/value-picker-react-native/blob/master/Android.png)


How to start:
---------------------------------
0.Install via npm: <br />
```npm install value-picker-react-native --save```

1.Import in your component : <br />
    ```import ValuePicker from 'value-picker-react-native';```

2.Add dependencies to your app : <br />
   ```angular.module('yourApp', ['ionic', 'ionic-steps-bar'])```

3.Usage: <br />

```<ValuePicker```<br />
    ```textsArray={textsArray}```<br />
    ```initialActiveIndex={5}```<br />
    ```activeItemCallback={this.setActiveItem}```<br />
    ```mainColor={'#50c878'}```<br />
    ```textsColor={'white'}```<br />
    ```arrowImgSrc={require('./valuePickerReactNative/images/arrowUp.png')}```<br />
``` />```<br />


Configurable options:
---------------------------------
textsArray         - ['Item 0', 'Item 1', 'Item 2', 'Item 3', 'Item 4'] - Strings array <br />
initialActiveIndex - Active index.<br />
activeItemCallback - Callback to call that called with 2 parameters (text, index).<br />
mainColor          - Color of active item.<br />
textsColor         - Filling color(Color that fills steps when increased / decreased.).<br />
arrowImgSrc        - Source of arrow Up image.<br />
