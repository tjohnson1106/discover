// @flow

import React, { PureComponent } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-view";

class Discover extends PureComponent<{}, any> {
  render() {
    const { elements } = this.props;

    return (
      <View style={styles.root}>
        <ScrollView>
          <SafeAreaView style={{ flex: 1 }} forceInset="always">
            {elements.map(element => (
              <ElementThumbnail key={element.id} {...{ element }} />
            ))}
          </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  }
});

export default Discover;
