import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import { useStore } from '@/lib/store';
import { useShallow } from 'zustand/react/shallow';
import { boardSize } from '@/lib/constants';

const ActionsTab = () => {
	const { lines, filledCells, resetBoard } = useStore(
		useShallow((state) => ({
			lines: state.lines,
			filledCells: state.filledCells,
			resetBoard: state.resetBoard,
		}))
	);

	const opacityAnim = useRef(new Animated.Value(0)).current; // Animation for opacity
	const widthAnim = useRef(new Animated.Value(140)).current; // Animation for width

	useEffect(() => {
		// Animate opacity when the message is displayed or hidden
		Animated.timing(opacityAnim, {
			toValue: filledCells === boardSize ? 1 : 0,
			duration: 200,
			useNativeDriver: true,
			easing: Easing.sin,
		}).start();
	}, [filledCells]);

	useEffect(() => {
		// Animate width when the button text changes
		Animated.timing(widthAnim, {
			toValue: filledCells === boardSize ? 140 : 120, // Adjust the target width
			duration: 300,
			useNativeDriver: false, // Width animation needs `useNativeDriver: false`
			easing: Easing.sin,
		}).start();
	}, [filledCells]);

	return (
		<View className="w-[80%] flex flex-col gap-5 items-center">
			<Animated.View
				style={{
					width: widthAnim, // Animated width
				}}
			>
				<TouchableOpacity
					className="bg-primary p-5 rounded-xl items-center"
					onPress={resetBoard}
				>
					<Text className="font-semibold text-secondary">
						{filledCells === boardSize ? 'Play again' : 'Reset'}
					</Text>
				</TouchableOpacity>
			</Animated.View>

			<Animated.View
				style={{
					opacity: opacityAnim, // Fade in/out animation
				}}
			>
				<Text className="text-tertiary text-xl text-center">
					{lines > 0 ? `Congratulations you have ${lines} lines!` : 'You have no lines, try again.'}
				</Text>
			</Animated.View>
		</View>
	);
};

export default ActionsTab;
