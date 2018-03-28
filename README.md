# NativeBase KitchenSink v2.1.0
An example app with all the UI components of NativeBase

> **NativeBase-KitchenSink** comes in four forms of app for you!
>1. Pure React Native App with `react-navigation` on branch **[master](https://github.com/GeekyAnts/NativeBase-KitchenSink)**
>2. Pure React Native App with `RNRF` on branch **[RNRF](https://github.com/GeekyAnts/NativeBase-KitchenSink/tree/RNRF)**
>3. An Expo app with `CRNA` and `react-navigation` on branch **[CRNA](https://github.com/GeekyAnts/NativeBase-KitchenSink/tree/CRNA)**
>4. A React App with `NativeBase for web` on branch **[web-support](https://github.com/GeekyAnts/NativeBase-KitchenSink/tree/web-support)**

>Find the installation guide in `ReadMe` of appropriate branches

## Demo

iOS | Android
 :--:| :-----:
 ![ios-demo](./screenshots/iOS.gif) | ![android-demo](./screenshots/Android.gif)


[NativeBase](http://nativebase.io/) is a free and open source framework that enables developers to build high-quality apps using [React Native](https://facebook.github.io/react-native/) for iOS and Android with a fusion of ES6. NativeBase builds a layer on top of React Native that provides you with basic set of components for mobile application development. This helps you to build world-class application experiences on native platforms.

NativeBase without a doubt fits in well with mobile applications which cut downs one huge part of your app - The Front end.
The applications stack of components is built using native UI components, so there are no compromises with the user experience.


## Installation

*	**Clone and install packages**
```
git clone git@github.com:GeekyAnts/NativeBase-KitchenSink.git
cd NativeBase-KitchenSink
git checkout RNRF
yarn
react-native link react-native-vector-icons
```

*	**Run on iOS**
	*	Opt #1:
		*	Open the project in Xcode from `ios/NativeBase-KitchenSink.xcodeproj`
		*	Click `run` button to simulate
	*	Opt #2:
		*	Run `react-native run-ios` in your terminal


*	**Run on Android**
	*	Make sure you have an `Android emulator` installed and running
	*	Run `react-native run-android` in your terminal
