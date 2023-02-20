import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

const SplashScreen = () => {
  return <SafeAreaView style={styles.safeArea}>
        
    <View style={styles.PtpDzWVo}><ImageBackground style={styles.UNllMUtY} source={require("./mdka-logo.png")} resizeMode="cover"></ImageBackground></View></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  PWhbvQAS: {
    width: 200,
    height: 62,
    position: "relative",
    top: 0,
    left: 79,
    transform: "rotate(0deg)",
    flexDirection: "row",
    flex: "1",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "no-wrap"
  },
  ywYHZABQ: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    flexDirection: "row",
    flex: "1",
    alignItems: "start",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  OYXmuwxk: {
    flex: 1
  },
  BzITfirm: {
    flex: 1
  },
  PtpDzWVo: {
    height: 574,
    width: 358,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    flexDirection: "row",
    flex: "1",
    justifyContent: "center"
  },
  UNllMUtY: {
    width: 107,
    height: 62,
    position: "absolute",
    top: 256
  }
});
export default SplashScreen;