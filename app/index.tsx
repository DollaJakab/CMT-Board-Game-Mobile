import { Text, View } from 'react-native';
import { useStore } from '@/lib/store';
import { colorScheme } from 'nativewind';

export default function Index() {
	colorScheme.set('system');
	const board = useStore((state) => state.board);
	return (
		<View className="flex flex-1 items-center justify-center bg-background">
			<View className="flex flex-col gap-3">
				{board.map((row, i) => (
					<View
						key={i}
						className="flex flex-row gap-3"
					>
						{row.map((cell, j) => (
							<View
								key={j}
								className="bg-text w-10 h-10 flex gap-3 justify-center items-center"
							>
								<Text>{cell.value}</Text>
							</View>
						))}
					</View>
				))}
			</View>
		</View>
	);
}
