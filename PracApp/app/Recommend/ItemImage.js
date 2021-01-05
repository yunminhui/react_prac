import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';

const ItemImage = (animationStyles, animate) => (
  <View>{images(animationStyles, animate)}</View>
);

const image_fnames = [
  require('./img/aubergine.png'),
  require('./img/broccoli.png'),
  require('./img/carrot.png'),
  require('./img/chilipepper.png'),
  require('./img/mashroom.png'),
  require('./img/onion.png'),
  require('./img/potato.png'),
  require('./img/sweetpotato.png'),
  require('./img/tomato.png'),
];

const images = (animationStyles, animate) =>
  image_fnames.map((image, index) => (
    <View>
      <TouchableOpacity onPress={() => animate}>
        <Animated.View style={[styles.itembox, animationStyles]}>
          <Image style={styles.item} source={image} />
        </Animated.View>
      </TouchableOpacity>
    </View>
  ));

const styles = StyleSheet.create({
  itembox: {
    marginTop: 15,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    flex: 1,
  },
  item: {
    height: 80,
    width: 80,
    marginBottom: 50,
  },
});

export default ItemImage;
