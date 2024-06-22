import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';

import {
    daysOfTheWeek,
    firstDayOfWeek,
    numDaysInMonth,
} from '../helpers/date-utils';

const showDayNumber = (row, col, cellCount) => {
    return row === 0
        ? col >= firstDayOfWeek
        : cellCount - firstDayOfWeek <= numDaysInMonth;
};

const createCells = (rows = 6, cols = 7) => {
    let cellCount = 0;
    let dayCount = 1;
    return Array.from({ length: rows }, (_, rowIndex) => {
        return (
            <TableRow key={`row-${rowIndex}`}>
                {Array.from({ length: cols }, (_, colIndex) => {
                    cellCount++;
                    return (
                        <TableCell key={`[${rowIndex},${colIndex}]`}>
                            {showDayNumber(rowIndex, colIndex, cellCount)
                                ? dayCount++
                                : null}
                        </TableCell>
                    );
                })}
            </TableRow>
        );
    });
};

export const Calendar = () => {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {daysOfTheWeek.map((day, index) => (
                            <TableCell key={`${index}-${day}`}>{day}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>{createCells()}</TableBody>
            </Table>
        </TableContainer>
    );
};
