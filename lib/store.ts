import { create } from 'zustand';
import { CellTypes, Store } from './types';
import { linesCalculator } from './linesCalculator';
import { boardRows, boardCols } from './constants';

export const useStore = create<Store>((set) => ({
	board: new Array(boardRows).fill(null).map(() => new Array(boardCols).fill({ color: 'black', value: undefined })),
	filledCells: 0,
	currentLetter: CellTypes.C,
	lines: 0,
	resetBoard: () =>
		set(() => {
			return {
				board: new Array(boardRows)
					.fill(null)
					.map(() => new Array(boardCols).fill({ color: 'black', value: undefined })),
				currentLetter: CellTypes.C,
				lines: 0,
				filledCells: 0,
			};
		}),
	setCellValue: (row: number, col: number) => {
		set((state) => {
			const newState = { ...state };
			//Update the board with the new value
			const newBoard = [...newState.board];
			const newValue = Object.values(CellTypes).find((value) => value === newState.currentLetter) as CellTypes;
			newBoard[row][col] = { ...newBoard[row][col], value: newValue };
			newState.board = newBoard;
			//Update the current letter
			newState.currentLetter =
				Object.values(CellTypes)[(Object.keys(CellTypes).indexOf(newState.currentLetter) + 1) % 3];
			//Check if there are any lines
			const lines = linesCalculator(newState.board);
			newState.lines = lines.length;
			//Update the color of the cells in the line
			lines.forEach((line) => {
				line.forEach(([row, col]) => {
					let color = 'black';
					const currentCell = newBoard[row][col];
					if (currentCell.value === CellTypes.C) {
						color = 'green';
					} else if (currentCell.value === CellTypes.M) {
						color = 'blue';
					} else if (currentCell.value === CellTypes.T) {
						color = 'red';
					}
					newBoard[row][col] = { ...currentCell, color: color };
				});
			});
			//Update the filled cells
			newState.filledCells = newState.filledCells + 1;
			return newState;
		});
	},
}));
