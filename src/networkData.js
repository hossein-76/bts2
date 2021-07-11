import {NativeModules} from 'react-native';
const {SIM} = NativeModules;

export function getCID(callBack) {
  SIM.getCID(callBack);
}
export function getLAC(callBack) {
  SIM.getLAC(callBack);
}
export function getPLMN(callBack) {
  SIM.getPLMN(callBack);
}
export function getNETWORK(callBack) {
  SIM.getNetworkType(callBack);
}
export function getTAC(callBack) {
  SIM.getTAC(callBack);
}
export function getEARFCN(callBack) {
  SIM.getEARFCN(callBack);
}

export function getMCC(callBack) {
  SIM.getMCC(callBack);
}
export function getMNC(callBack) {
  SIM.getMNC(callBack);
}
export function getUPLINK(callBack) {
  SIM.getUPLINK(callBack);
}
export function getDOWNLINK(callBack) {
  SIM.getDOWNLINK(callBack);
}
export function getRSRP(callBack) {
  SIM.getRSRP(callBack);
}
export function getRSRQ(callBack) {
  SIM.getRSRQ(callBack);
}
export function getRSSI(callBack) {
  SIM.getRSSI(callBack);
}
