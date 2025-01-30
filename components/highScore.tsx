import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getItem, setItem } from '@/lib/utils';
import { useStore } from '@/lib/store';

const HighScore = () => {
	const [highScore, setHighScore] = useState('0');
	const lines = useStore((state) => state.lines);

	useEffect(() => {
		(async () => {
			const highScore = await getItem('highScore');
			if (lines > parseInt(highScore as string)) {
				console.log(highScore, lines);
				await setItem('highScore', lines);
				setHighScore(lines.toString());
			}
		})();
		// setItem('highScore', 0);
	}, [lines]);

	useEffect(() => {
		(async () => {
			const highScore = await getItem('highScore');
			setHighScore(highScore as string);
		})();
	}, []);

	return (
		<View>
			<Text className="text-tertiary text-xl text-center">High Score: {highScore}</Text>
		</View>
	);
};

export default HighScore;
