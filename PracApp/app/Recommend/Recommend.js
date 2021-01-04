import React, {Component} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  SafeAreaView,
  Button,
  Animated,
} from 'react-native';
import ItemImage from './ItemImage';
import ScrollButton from './ScrollButton';
import HomeScreen from '../Login/HomeScreen';

class Recommend extends Component {
  animatedButton = new Animated.Value(0);
  animate = (value) => {
    Animated.timing(this.animatedButton, {
      toValue: 800,
      duration: 1000,
    }).start();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>관심상품을 선택하세요</Text>
        <ScrollButton />

        <SafeAreaView style={{height: 400}}>
          <ScrollView>
            <ItemImage />
          </ScrollView>
        </SafeAreaView>

        <TouchableOpacity>
          <Image
            style={[styles.button, {transform: [{rotate: '180deg'}]}]}
            source={require('./img/다각형2.png')}
          />
        </TouchableOpacity>
        {/*<ScrollButton style={{transform: [{rotate: '180deg'}]}} />*/}

        <TouchableOpacity
          sytle={styles.button}
          // onPress={() => {
          //   this.props.navigation.navigate('Feed');
          //   // this.animate;
          // }}>
          onPress={this.animate}>
          <Animated.View
            style={[styles.completeButton, {marginLeft: this.animatedButton}]}>
            <Image
              style={{width: 80, height: 80}}
              source={require('./img/shopping_cart.png')}
            />
            <Text style={{color: 'white', fontSize: 20, marginTop: 8}}>
              등록
            </Text>
          </Animated.View>
        </TouchableOpacity>
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
  // button: {
  //   margin: 10,
  //   height: 30,
  //   alignItems: 'center',
  // },
  itemsClick: {
    borderWidth: 5,
    borderColor: 'yellow',
    borderRadius: 100,
  },
  completeButton: {
    // marginTop: 25,
    width: 80,
    height: 80,
    // alignItems: 'center',
  },
});

export default Recommend;
