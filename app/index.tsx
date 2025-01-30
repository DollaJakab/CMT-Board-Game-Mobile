import ActionsTab from '@/components/actionsTab';
import Board from '@/components/board';
import { View } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import { useStore } from '@/lib/store';
import { boardSize } from '@/lib/constants';
import HighScore from '@/components/highScore';

export default function Index() {
	const lines = useStore((state) => state.lines);
	const filledCells = useStore((state) => state.filledCells);

	return (
		<View className="flex flex-1 items-center justify-evenly bg-background w-full h-full">
			<HighScore />
			<Board />
			<ActionsTab />
			{lines > 0 && filledCells === boardSize && (
				<ConfettiCannon
					count={200}
					origin={{ x: 0, y: 0 }}
				/>
			)}
		</View>
	);
}
