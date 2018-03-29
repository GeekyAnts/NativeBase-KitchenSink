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
create-react-app nativebase-web-app
cd nativebase-web-app
npm eject
npm install native-base --save
npm install create-react-app --save
npm install react-native-web --save
```
* **Setup resolve alias in your webpack configuration**

```
alias: {
  "react-native/Libraries/Renderer/shims/ReactNativePropRegistry": "react-native-web/dist/modules/ReactNativePropRegistry",
  "react-native": "react-native-web"
},
```
* **Add Path resolver for NativeBase dependencies in your webpack configuration**

```
{
  test: /\.(js|jsx|mjs)$/,
  include: [
    paths.appSrc,
    path.resolve(paths.appNodeModules, "native-base-shoutem-theme"),
    path.resolve(paths.appNodeModules, "react-navigation"),
    path.resolve(paths.appNodeModules, "react-native-easy-grid"),
    path.resolve(paths.appNodeModules, "react-native-drawer"),
    path.resolve(paths.appNodeModules, "react-native-safe-area-view"),
    path.resolve(paths.appNodeModules, "react-native-vector-icons"),
    path.resolve(
      paths.appNodeModules,
      "react-native-keyboard-aware-scroll-view"
    ),
    path.resolve(paths.appNodeModules, "react-native-web"),
    path.resolve(paths.appNodeModules, "react-native-tab-view"),
    path.resolve(paths.appNodeModules, "static-container")
  ],
  loader: require.resolve("babel-loader"),
  options: {
    cacheDirectory: true
  }
},
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
