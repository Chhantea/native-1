import {AsyncStorage} from 'react-native';


const deviceStorage = {
    async setCookie(key, value) {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },
    async  getCookie(key){
        try {
                const value = await AsyncStorage.getItem(key);
                if (value !== null) {
                    return  value;
                }
            } catch (error) {
                // Error retrieving data
            console.log('AsyncStorage Error: ' + error.message);
            }
    }
};

export default deviceStorage;