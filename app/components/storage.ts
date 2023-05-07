import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export const setData = (key: any, value: any) => {
  return storage.set(key, value);
};

export const getData = (key: any) => {
  return storage.getString(key) || '';
};

export const removeData = (key: any) => {
  return storage.delete(key);
};
