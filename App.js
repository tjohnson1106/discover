// @flow

import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator, StatusBar } from "react-native";
import { Asset } from "expo";

import { Discover } from "./src/components/Discover";

const elements = [
  {
    id: "2",
    source: require("./assets/stories/2.jpg"),
    user: "derek.russel",
    avatar: require("./assets/avatars/derek.russel.png")
  },
  {
    id: "4",
    source: require("./assets/stories/4.jpg"),
    user: "jmitch",
    avatar: require("./assets/avatars/jmitch.png")
  },
  {
    id: "7",
    source: require("./assets/stories/7.jpg"),
    user: "andrea.schmidt",
    avatar: require("./assets/avatars/andrea.schmidt.png"),
    video: require("./assets/stories/7.mp4")
  },
  {
    id: "5",
    source: require("./assets/stories/5.jpg"),
    user: "monicaa",
    avatar: require("./assets/avatars/monicaa.png")
  },
  {
    id: "3",
    source: require("./assets/stories/3.jpg"),
    user: "alexandergarcia",
    avatar: require("./assets/avatars/alexandergarcia.png")
  },
  {
    id: "1",
    source: require("./assets/stories/1.jpg"),
    user: "andrea.schmidt",
    avatar: require("./assets/avatars/andrea.schmidt.png")
  },
  {
    id: "6",
    source: require("./assets/stories/6.jpg"),
    user: "andrea.schmidt",
    avatar: require("./assets/avatars/andrea.schmidt.png")
  }
];

type AppState = {
  ready: boolean
};

export default class App extends Component<{}, AppState> {
  state = {
    ready: false
  };
  ////////////////////////////////////////////////////////
  // load elements //////////////////////////////////////
  // Expo Assets standalone component loading only//////
  /////////////////////////////////////////////////////

  async componentDidMount() {
    await Promise.all(
      elements.map(element =>
        Promise.all([
          Asset.loadAsync(element.source),
          Asset.loadAsync(element.avatar),
          element.video ? Asset.loadAsync(element) : undefined
        ])
      )
    );
    this.setState({ ready: true });
  }

  render() {
    const { ready } = this.state;

    if (ready) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="black" />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        <Discover />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E4363",
    alignItems: "center",
    justifyContent: "center"
  }
});
