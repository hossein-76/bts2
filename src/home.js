import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Text,
} from 'react-native';
import {collectData} from './dataCollector';
import {getAllCID} from './db';
import {permissionHandler} from './permission';
const Home = props => {
  const [duration, setDuration] = useState(null);
  const timeInterval = useRef();
  const dataInterval = useRef();

  function onToggleHandler() {
    if (duration === null) {
      permissionHandler().then(result => {
        if (result) {
          setDuration(0);
          const startTime = new Date().getTime();
          timeInterval.current = setInterval(() => {
            setDuration(new Date().getTime() - startTime);
          }, 1000);
          collectData();
          dataInterval.current = setInterval(() => {
            collectData();
          }, 30000);
        }
      });
    } else {
      if (timeInterval.current) {
        clearInterval(timeInterval.current);
        timeInterval.current = null;
      }
      if (dataInterval.current) {
        clearInterval(dataInterval.current);
        dataInterval.current = null;
      }
      setDuration(null);
      getAllCID();
    }
  }

  useEffect(() => {
    return () => {
      if (timeInterval.current) {
        clearInterval(timeInterval.current);
      }
      if (dataInterval.current) {
        clearInterval(dataInterval.current);
        dataInterval.current = null;
      }
    };
  }, []);

  function timeParser(value) {
    let second = Math.floor(value / 1000) % 60;
    let minutes = Math.floor(value / 1000 / 60) % 60;
    let hour = Math.floor(value / 1000 / 60 / 60) % 60;
    return `${hour < 10 ? '0' + hour : hour}:${
      minutes < 10 ? '0' + minutes : minutes
    }:${second < 10 ? '0' + second : second}`;
  }

  if (!props.isActive) return null;
  return (
    <ImageBackground
      imageStyle={styles.bgImage}
      resizeMode={'contain'}
      source={require('./assets/background.png')}
      style={styles.container}>
      <View style={styles.cover}>
        <TouchableOpacity
          onPress={onToggleHandler}
          style={{
            ...styles.button,
            ...(duration === null ? {} : styles.active),
          }}>
          {duration === null ? <Text style={styles.start}>Start</Text> : null}
          {duration !== null ? (
            <>
              <Text style={styles.end}>Stop</Text>
              <Text style={styles.time}>{timeParser(duration)}</Text>
            </>
          ) : null}
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bgImage: {width: '90%', margin: '5%'},
  cover: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 150,
    height: 150,
    borderRadius: 50,
    backgroundColor: 'white',
    elevation: 10,
    borderWidth: 10,
    borderStyle: 'solid',
    borderColor: '#62d3cb',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  active: {
    backgroundColor: '#62d3cb',
  },
  start: {
    color: '#62d3cb',
    fontWeight: 'bold',
    fontSize: 20,
  },
  end: {
    color: '#010101',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 12,
  },
  time: {
    color: '#010101',
    fontSize: 14,
  },
});
