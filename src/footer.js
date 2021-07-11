import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
const Footer = props => {
  const [toggle, setToggle] = useState('HOME');
  useEffect(() => {
    props.onChange(toggle);
  }, [toggle]);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setToggle('HOME')} style={styles.button}>
        <Text
          style={{...styles.item, ...(toggle === 'HOME' ? styles.active : {})}}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setToggle('MAP')} style={styles.button}>
        <Text
          style={{...styles.item, ...(toggle === 'MAP' ? styles.active : {})}}>
          Map
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Footer;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    flex: 1,
  },
  item: {
    textAlign: 'center',
    color: '#6e6e6e',
  },
  active: {
    fontWeight: 'bold',
    color: '#62d3cb',
  },
});
