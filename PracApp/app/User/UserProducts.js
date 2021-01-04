import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const UserProducts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemInformation}>
        <Text style={styles.informationText}>5</Text>
        <Text style={styles.informationText}>상품수량</Text>
      </View>
      <View style={styles.itemInformation}>
        <Text style={styles.informationText}>10</Text>
        <Text style={styles.informationText}>거래량</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemInformation: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  informationText: {
    fontSize: 23,
    marginTop: 10,
    color: '#045D56',
  },
});

export default UserProducts;
