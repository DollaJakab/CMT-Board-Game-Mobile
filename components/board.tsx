import { View, Text } from 'react-native';
import React from 'react';
import { useStore } from '@/lib/store';
import Cell from './cell';

const Board = () => {
	const board = useStore((state) => state.board);

	return (
		<View className="flex flex-col max-w-[80%] aspect-square gap-1">
			{board.map((row, i) => (
				<View
					key={i}
					className="flex flex-row gap-1"
				>
					{row.map((cell, j) => (
						<Cell
							key={j}
							row={i}
							col={j}
							cell={cell}
						/>
					))}
				</View>
			))}
		</View>
	);
};

export default Board;
