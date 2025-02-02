import React, {Component} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  SafeAreaView,
  Animated,
} from 'react-native';
import ItemImage from './ItemImage';
import ScrollButton from './ScrollButton';
import EnrollButton from './EnrollButton';

class Recommend extends Component {
  navigation = this.props.navigation;

  animationBottom = new Animated.Value(0);
  animate = () => {
    Animated.timing(this.animationBottom, {
      toValue: 250,
      duration: 1000,
    }).start();
  };
  render() {
    const animationStyles = {
      transform: [{translateY: this.animationBottom}],
    };
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>관심상품을 선택하세요</Text>
        <ScrollButton />

        <SafeAreaView style={{height: 400}}>
          <ScrollView>
            {/*<ItemImage
              animationStyles={animationStyles}
              animate={this.animate}
						/>*/}
            <ItemImage />
          </ScrollView>
        </SafeAreaView>

        <View style={{transform: [{rotate: '180deg'}]}}>
          <ScrollButton />
        </View>

        <EnrollButton navigation={this.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    alignItems: 'center',
    backgroundColor: '#1d8830',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 25,
    color: 'rgb(243,250,246)',
    fontWeight: '300',
    marginTop: 80,
    marginBottom: 50,
  },
  itemsClick: {
    borderWidth: 5,
    borderColor: 'yellow',
    borderRadius: 100,
  },
});

export default Recommend;
