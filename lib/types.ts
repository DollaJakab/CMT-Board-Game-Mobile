export enum CellTypes {
	C = 'C',
	M = 'M',
	T = 'T',
}

export interface CellProps {
	color: string;
	value: CellTypes;
}

export interface Store {
	board: CellProps[][];
	currentLetter: CellTypes;
	lines: number;
	filledCells: number;
	resetBoard: () => void;
	setCellValue: (row: number, col: number) => void;
}
