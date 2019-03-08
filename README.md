# NativeBase KitchenSink v2.5.0
An example app with all the UI components of NativeBase

> **NativeBase-KitchenSink** comes in four forms of app for you!
>1. Pure React Native App with `react-navigation` on branch **[master](https://github.com/GeekyAnts/NativeBase-KitchenSink)**
>2. Pure React Native App with `RNRF` on branch **[RNRF](https://github.com/GeekyAnts/NativeBase-KitchenSink/tree/RNRF)**
>3. An Expo app with `CRNA` and `react-navigation` on branch **[CRNA](https://github.com/GeekyAnts/NativeBase-KitchenSink/tree/CRNA)**
>4. A React App with `NativeBase for web` on branch **[web-support](https://github.com/GeekyAnts/NativeBase-KitchenSink/tree/web-support)**

>Find the installation guide in `ReadMe` of appropriate branches

NativeBase is now available for React web lovers. Check the [demo](http://nativebase-customizer.geekydev.com/)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). 

Check [demo](https://nativebase.io/kitchen-sink-web-app/) here

## Installation

*	**Clone and install packages**
```
git clone git@github.com:GeekyAnts/NativeBase-KitchenSink.git
cd NativeBase-KitchenSink
git checkout web-support
yarn
```

* **Run**

```
npm start
```
OR
```
yarn start
```

## To create new react app

```
npm install -g create-react-app
npx create-react-app nativebase-app
cd nativebase-app
npm i native-base react-art react-native-web --save
npm i react-app-rewired customize-cra @babel/plugin-proposal-class-properties --dev --save
```

* **Replace scripts in package.json**

```
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
}
```
* **Create file config-overrides.js at root of your project**

```
const path = require('path');
const {
  override,
  addWebpackAlias,
  babelInclude,
  addBabelPlugins
} = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    "react-native/Libraries/Renderer/shims/ReactNativePropRegistry": "react-native-web/dist/modules/ReactNativePropRegistry",
    "react-native": "react-native-web"
  }),
  babelInclude([
    path.resolve('src'),
    path.resolve('node_modules/native-base-shoutem-theme'),
    path.resolve('node_modules/react-navigation'),
    path.resolve('node_modules/react-native-easy-grid'),
    path.resolve('node_modules/react-native-drawer'),
    path.resolve('node_modules/react-native-safe-area-view'),
    path.resolve('node_modules/react-native-vector-icons'),
    path.resolve('node_modules/react-native-keyboard-aware-scroll-view'),
    path.resolve('node_modules/react-native-web'),
    path.resolve('node_modules/react-native-tab-view'),
    path.resolve('node_modules/static-container'),
  ]),
  addBabelPlugins(
    "@babel/plugin-proposal-class-properties"
  ),
);
```

* **Include Icons**

 Copy [font.css](https://github.com/GeekyAnts/NativeBase-KitchenSink/blob/web-support/src/font.css) to App.css


* **Run**

```
npm start
```
OR
```
yarn start
```
