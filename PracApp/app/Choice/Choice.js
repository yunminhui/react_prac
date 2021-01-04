import * as React from 'react';
import {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

// export default class Choice extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <ChoiceButton user={'구매자'} page={'Recommend'} />
//         <ChoiceButton user={'판매자'} page={'Registration'} />
//       </View>
//     );
//   }
// }
const Choice = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/*<ChoiceButton*/}
      {/*  user={'구매자'}*/}
      {/*  navigation1={navigation}*/}
      {/*  page={'Recommend'}*/}
      {/*/>*/}
      {/*<ChoiceButton*/}
      {/*  user={'판매자'}*/}
      {/*  navigation1={navigation}*/}
      {/*  page={'Registration'}*/}
      {/*/>*/}
      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('Recommend')}>
          <Text style={styles.userText}>구매자</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Seller')}>
        <View>
          <Text style={styles.userText}>판매자</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// const ChoiceButton = ({navigation1, user, page}) => {
//   return (
//     <View style={styles.button}>
//       <TouchableOpacity onPre() => navigation1.navigate(page)}>
//         <Text style={styles.userText}>{user}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 100,
    width: 200,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#1d8830',
  },
  userText: {
    fontSize: 30,
    color: '#0d3b15',
  },
});

export default Choice;
