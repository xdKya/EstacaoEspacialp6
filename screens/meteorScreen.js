import react, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import axios from "axios";

export default class MeteorScreen extends Component {
  constructor() {
    super();
    this.state = {
      meteors: {},
    };
  }

  componentDidMount() {
    this.getMeteors();
  }

  getMeteors = () => {
    axios
      .get(
        "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=aHJTmR3fTE3zAKiO5vBOV4fk8w0SL7gkufrkpRWN"
      )
      .then((dados) => {
        this.setState({
          meteors: dados.data.near_earth_objects,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  keyExtractor = (item, index) => {
    index.toString();
  };

  renderItem = ({ item }) => {
    let meteor = item;
    let bg_img, speed, size;
    if (meteor.threat_score <= 30) {
      bg_img = require("../assets/meteor_bg1.png");
      speed = require("../assets/meteor_speed1.gif");
      size = 100;
    } else if (meteor.threatScore <= 75) {
      bg_img = require("../assets/meteor_bg2.png");
      speed = require("../assets/meteor_speed2.gif");
      size = 200;
    } else {
      bg_img = require("../assets/meteor_bg3.png");
      speed = require("../assets/meteor_speed3.gif");
      size = 300;
    }
    return null;
  };

  render() {
    if (Object.keys(this.state.meteors).length === 0) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
          }}
        >
          <Text style={{ fontSize: 50, color: "white" }}>Carregando ...</Text>
        </View>
      );
    } else {
      let meteor_list = Object.keys(this.state.meteors).map((data) => {
        return this.state.meteors[data];
      });
      let meteors = [].concat.apply([], meteor_list);

      meteors.forEach((element) => {
        let diameter =
          (element.estimated_diameter.kilometers.estimated_diameter_min +
            element.estimated_diameter.kilometers.estimated_diameter_max) /
          2;
        let threatScore =
          (diameter / element.close_approach_data[0].miss_distance.kilometers) *
          1000000000;
        element.threat_score = threatScore;
        console.log(threatScore);
      });

      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidArea} />
          <FlatList
            data={meteors}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
          />
        </View>
      );
    }
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
});

//https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=aHJTmR3fTE3zAKiO5vBOV4fk8w0SL7gkufrkpRWN
