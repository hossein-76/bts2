import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import MapView, {MAP_TYPES, Marker, Circle, Polyline} from 'react-native-maps';
import {
  getAllCID,
  getAllDOWNLINK,
  getAllEARFCN,
  getAllLAC,
  getAllMCC,
  getAllMNC,
  getAllNETWORK,
  getAllPLMN,
  getAllRSRP,
  getAllRSRQ,
  getAllRSSI,
  getAllTAC,
  getAllUPLINK,
} from './db';
import Layers from './layers';
import Details from './details';
import {permissionHandler} from './permission';
import Geolocation from 'react-native-geolocation-service';

const Map = props => {
  const [list, setList] = useState();
  const [layer, setLayer] = useState('CID');
  const [layerModal, setLayerModal] = useState(false);
  const [detailID, setDetailID] = useState(null);
  const [colors, setColors] = useState({});
  const mapRef = useRef();

  useEffect(() => {
    if (props.isActive) {
      switch (layer) {
        case 'CID':
          getAllCID(list => setList(list));
          break;
        case 'LAC':
          getAllLAC(list => setList(list));
          break;
        case 'PLMN':
          getAllPLMN(list => setList(list));
          break;
        case 'TAC':
          getAllTAC(list => setList(list));
          break;
        case 'EARFCN':
          getAllEARFCN(list => setList(list));
          break;
        case 'Network type':
          getAllNETWORK(list => setList(list));
          break;
        case 'MCC':
          getAllMCC(list => setList(list));
          break;
        case 'MNC':
          getAllMNC(list => setList(list));
          break;
        case 'Up link':
          getAllUPLINK(list => setList(list));
          break;
        case 'Down link':
          getAllDOWNLINK(list => setList(list));
          break;
        case 'RSRP':
          getAllRSRP(list => setList(list));
          break;
        case 'RSRQ':
          getAllRSRQ(list => setList(list));
          break;
        case 'RSSI':
          getAllRSSI(list => setList(list));
          break;
      }
    }
  }, [props.isActive, layer]);

  useEffect(() => {
    const unique = [];
    const newColors = {};
    const pallet = [
      'red',
      'tomato',
      'orange',
      'yellow',
      'gold',
      'wheat',
      'tan',
      'linen',
      'green',
      'blue',
      'aqua',
      'violet',
      'indigo',
    ];
    list?.map(item => {
      if (!unique.includes(item.value)) {
        unique.push(item.value);
      }
    });
    unique.map((item, index) => {
      newColors[item.toString()] = pallet[index % pallet.length];
    });
    setColors(newColors);
    if (list?.length) {
      mapRef.current.animateToRegion(
        {
          latitude: list[0].lat,
          longitude: list[0].long,
          latitudeDelta: 0.0522,
          longitudeDelta: 0.0221,
        },
        1000,
      );
    }
  }, [list]);

  function getMyLocation() {
    permissionHandler().then(result => {
      if (result) {
        Geolocation.getCurrentPosition(
          position => {
            mapRef.current.animateToRegion(
              {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.0522,
                longitudeDelta: 0.0221,
              },
              1000,
            );
          },
          error => {
            // See error code charts below.
            console.warn(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 25000, maximumAge: 10000},
        );
      }
    });
  }

  if (!props.isActive) return null;
  return (
    <>
      <Layers
        visible={layerModal}
        onClose={() => setLayerModal(false)}
        onChange={e => setLayer(e)}
        layer={layer}
      />
      <Details onClose={() => setDetailID(null)} id={detailID} />
      <MapView
        ref={mapRef}
        style={styles.container}
        showsUserLocation={true}
        rotateEnabled={false}
        initialRegion={{
          latitude: 35.69977558165591,
          longitude: 51.338080734449335,
          latitudeDelta: 0.0522,
          longitudeDelta: 0.0221,
        }}>
        {list?.map(item => (
          <Marker
            onPress={() => setDetailID(item.time_id)}
            pinColor={
              colors[item.value.toString()]
                ? colors[item.value.toString()]
                : 'red'
            }
            key={item.id}
            coordinate={{
              latitude: item.lat,
              longitude: item.long,
            }}
            // title={item.value.toString()}
          />
        ))}
        {list?.length ? (
          <Polyline
            strokeWidth={5}
            strokeColor="#62d3cb"
            lineCap="round"
            lineJoin="round"
            coordinates={list.map(item => ({
              latitude: item.lat,
              longitude: item.long,
            }))}
          />
        ) : null}
      </MapView>
      <TouchableOpacity onPress={() => setLayerModal(true)} style={styles.icon}>
        <Image
          source={require('./assets/layers.png')}
          style={styles.iconImage}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={getMyLocation} style={styles.gps}>
        <Image source={require('./assets/gps.png')} style={styles.gpsImage} />
      </TouchableOpacity>
    </>
  );
};
export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  icon: {
    position: 'absolute',
    bottom: 16,
    zIndex: 100,
    right: 16,
    backgroundColor: '#62d3cb',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  gps: {
    position: 'absolute',
    bottom: 85,
    zIndex: 100,
    right: 16,
    backgroundColor: '#62d3cb',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  gpsImage: {
    width: 30,
    height: 30,
  },
});
