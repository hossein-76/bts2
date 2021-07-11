import React, {useEffect, useState} from 'react';
import Author from './author';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <View style={styles.container}>
      <Author visible={toggle} onClose={() => setToggle(false)} />
      <Text style={styles.text1}>BTS</Text>
      <Text style={styles.text2}>APP</Text>
      <TouchableOpacity onPress={() => setToggle(true)}>
        <Image style={styles.icon} source={require('./assets/author.png')} />
      </TouchableOpacity>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 65,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  text1: {
    color: '#62d3cb',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text2: {
    color: '#010101',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
