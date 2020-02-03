import { getData } from '../../service/api';
import { storageData, retrivedData } from '../../service/storage';

export const getWeather = async() => {
    try {
        const data = await getData()
            .then(result => result)
        storageData(data);
        return data;
    } catch (error){
        return retrivedData();
    }
};
        