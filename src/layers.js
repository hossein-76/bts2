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

const Layers = props => {
  const options = [
    'CID',
    'LAC',
    'PLMN',
    'TAC',
    'EARFCN',
    'Network type',
    'MCC',
    'MNC',
    'Up link',
    'Down link',
    'RSRP',
    'RSRQ',
    'RSSI',
  ];
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onClose}>
      <Pressable onPress={props.onClose} style={styles.background}>
        <View style={styles.modalBody}>
          <Text style={styles.header}>Data layer:</Text>
          {options.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.item}
              onPress={() => {
                props.onChange(item);
                props.onClose();
              }}>
              <Text
                style={{
                  ...styles.itemText,
                  ...(props.layer === item ? styles.activeItem : {}),
                }}>
                {item}
              </Text>
              <View
                style={{
                  ...styles.dot,
                  ...(props.layer === item ? styles.activeDot : {}),
                }}>
                <View
                  style={{
                    ...styles.innerDot,
                    ...(props.layer === item ? styles.activeInnerDot : {}),
                  }}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </Pressable>
    </Modal>
  );
};
export default Layers;

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBody: {
    width: 300,
    overflow: 'hidden',
    height: 'auto',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  header: {
    backgroundColor: '#62d3cb',
    height: 56,
    paddingHorizontal: 24,
    textAlignVertical: 'center',
    color: '#010101',
    fontWeight: 'bold',
  },
  item: {
    height: 48,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 24,
  },
  itemText: {
    flex: 1,
    color: 'gray',
  },
  activeItem: {
    color: '#62d3cb',
    fontWeight: 'bold',
  },
  dot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeDot: {
    borderColor: '#62d3cb',
  },
  innerDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  activeInnerDot: {
    backgroundColor: '#62d3cb',
  },
});
