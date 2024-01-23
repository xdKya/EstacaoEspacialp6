import react, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
  SafeAreaView,
  ImageBackground,
} from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidArea} />
        <ImageBackground
          style={styles.bgImg}
          source={require("../assets/bg2.gif")}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Estação Espacial</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("eei");
            }}
          >
            <Text style={styles.textButton}>RASTREAR EEI</Text>
            <Image
              source={require("../assets/iss_icon.png")}
              style={styles.img}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("meteor");
            }}
          >
            <Text style={styles.textButton}>METEOROS</Text>
            <Image
              source={require("../assets/meteor_icon.png")}
              style={styles.img}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flex: 1,
  },
  droidArea: {
    manginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  titleContainer: {
    backgroundColor: "transparent",
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 40,
    fontFamily: "fantasy",
    color: "white",
  },
  button: {
    backgroundColor: "rgba(200,100,255,0.6)",
    marginTop: 50,
    flex: 0.3,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 30,

    justifyContent: "center",
  },
  textButton: {
    fontSize: 35,
    fontFamily: "fantasy",
    textAlign: "center",
  },
  bgImg: {
    flex: 1,
  },
  img: {
    width: 150,
    height: 150,
    position: "absolute",
    top: -50,
    right: 10,
  },
});
