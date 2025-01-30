import AsyncStorage from '@react-native-async-storage/async-storage';

export const getItem = async (key: string) => {
	try {
		const highScore = await AsyncStorage.getItem(key);
		if (highScore !== null) {
			return highScore;
		}
	} catch (error) {
		console.error('Error setting item:', error);
	}
};

export const setItem = async (key: string, value: any) => {
	try {
		await AsyncStorage.setItem(key, JSON.stringify(value));
	} catch (error) {
		console.error('Error setting item:', error);
	}
};
