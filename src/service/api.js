import Axios from 'axios';
import { BASE_URL, LOCALE, TOKEN } from 'react-native-dotenv';

export const getData = async () => {
    try {
        const data = await Axios.get(`${BASE_URL}/${LOCALE}/days/15?token=${TOKEN}`)
          .then(result => result.data)
          .catch(error => error);
        return data;
    } catch (error) {
      throw error;
    }
  }