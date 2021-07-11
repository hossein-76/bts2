import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './header';
import Footer from './footer';
import Home from './home';
import Map from './map';

const Main = () => {
  const [toggle, setToggle] = useState('HOME');
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Home isActive={toggle === 'HOME'} />
        <Map isActive={toggle === 'MAP'} />
      </View>
      <Footer onChange={e => setToggle(e)} />
    </View>
  );
};
export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {backgroundColor: 'red', flex: 1, borderRadius: 16},
});
