import AsyncStorage from '@react-native-community/async-storage';

module.exports = {
    get (key) {
        return AsyncStorage.getItem(key)
            .catch(err => {
                throw new Error(`[react-native-storage-wrapper] - ${err}`);
            });
    },
    set (key, value) {
        return AsyncStorage.setItem(key, value)
            .catch(err => {
                throw new Error(`[react-native-storage-wrapper] - ${err}`);
            });
    },
    del (key) {
        return AsyncStorage.removeItem(key)
            .catch(err => {
                throw new Error(`[react-native-storage-wrapper] - ${err}`);
            });
    }
};
