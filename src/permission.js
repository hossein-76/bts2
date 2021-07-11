import {PermissionsAndroid} from 'react-native';

export function permissionHandler() {
  return new Promise(resolve => {
    phoneState().then(phoneState => {
      if (phoneState) {
        coarse().then(coarse => {
          if (coarse) {
            location().then(location => {
              if (location) resolve(true);
              else resolve(false);
            });
          } else {
            resolve(false);
          }
        });
      } else {
        resolve(false);
      }
    });
  });
}

function phoneState() {
  return new Promise(resolve => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE)
      .then(result => {
        resolve(result === PermissionsAndroid.RESULTS.GRANTED);
      })
      .catch(e => {
        resolve(false);
      });
  });
}

function coarse() {
  return new Promise(resolve => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    )
      .then(result => {
        resolve(result === PermissionsAndroid.RESULTS.GRANTED);
      })
      .catch(e => {
        resolve(false);
      });
  });
}

function location() {
  return new Promise(resolve => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    )
      .then(result => {
        resolve(result === PermissionsAndroid.RESULTS.GRANTED);
      })
      .catch(e => {
        resolve(false);
      });
  });
}
