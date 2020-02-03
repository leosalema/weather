import AsyncStorage from '@react-native-community/async-storage';

export const storageData = async (data) => {
    try {
      await AsyncStorage.setItem('@Data', JSON.stringify(data));
    } catch (error) {
      throw error
    }
  };

export const retrivedData = async () => {
    try {
      const value = await AsyncStorage.getItem('@Data');
      return JSON.parse(value);
    } catch (error) {
      throw error
    }
}