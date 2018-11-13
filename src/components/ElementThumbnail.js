import React, { PureComponent } from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";

const width = Dimensions.get("window").width / 2 - 16 * 2;
const height = width * 1.77;

type ElementThumbnailProps = {
  element: Element
};

class ElementThumbnail extends PureComponent<ElementThumbnailProps> {
  render() {
    const { element } = this.props;

    return <Image source={element.source} style={styles.imageThumb} />;
  }
}

const styles = StyleSheet.create({
  imageThumb: {
    ...StyleSheet.absoluteFillObject,
    width: null,
    height: null,
    resizeMode: "cover",
    borderRadius
  }
});

export default ElementThumbnail;
