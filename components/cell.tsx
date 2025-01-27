import { View, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { CellProps } from '@/lib/types';
import { useStore } from '@/lib/store';

const Cell = ({ cell, row, col }: { cell: CellProps; row: number; col: number }) => {
	const setCellValue = useStore((state) => state.setCellValue);
	return (
		<View className="bg-primary aspect-square flex flex-1 gap-3 justify-center items-center rounded-md">
			<TouchableOpacity
				className="w-full h-full flex justify-center items-center"
				disabled={cell.value !== undefined}
				activeOpacity={0.7}
				onPress={() => setCellValue(row, col)}
			>
				<Text style={{ color: cell.color }}>{cell.value}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Cell;
