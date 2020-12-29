import React from "react";
import Setup from "./src/boot/setup";

export default class App extends React.Component {
  render() {
    return <Setup />;
  }
}
// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { Ionicons } from "@expo/vector-icons";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your helo cyrus app!</Text>
//       <Ionicons name="md-checkmark-circle" size={32} color="green" />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
