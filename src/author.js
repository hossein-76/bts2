import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {removeAllData} from './db';

const Author = props => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onClose}>
      <Pressable
        onPress={props.onClose}
        style={{
          backgroundColor: 'rgba(0,0,0,0.7)',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: 300,
            backgroundColor: 'white',
            borderRadius: 5,
            overflow: 'hidden',
          }}>
          <ImageBackground
            source={require('./assets/authors.jpg')}
            style={{width: '100%', height: 150}}>
            <Text
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: 'white',
                fontSize: 24,
                textAlign: 'center',
                fontWeight: 'bold',
                textAlignVertical: 'center',
              }}>
              AUTHORS:
            </Text>
          </ImageBackground>
          <View
            style={{
              height: 120,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.name}>Hossein Rahimi</Text>
            <Text style={styles.name}>&</Text>
            <Text style={styles.name}>Sepehr Hashemi</Text>
          </View>
          <TouchableOpacity
            onPress={e => {
              removeAllData();
              props.onClose();
            }}
            style={{
              width: '100%',
              height: 42,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(255,0,0,0.3)',
            }}>
            <Text style={{color: 'red'}}>Drop Data</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
};
export default Author;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {backgroundColor: 'red', flex: 1, borderRadius: 16},
  name: {
    color: '#010101',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 4,
  },
});
