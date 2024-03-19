import { ICalc } from '@/components//Calculator';

export enum Character {
    Empty = '',

    ClearAll = 'AC',
    Clear = 'C',

    Thousand = '000',
    Zero = '0',
    One = '1',
    Two = '2',
    Three = '3',
    Four = '4',
    Five = '5',
    Six = '6',
    Seven = '7',
    Eight = '8',
    Nine = '9',

    Dot = '.',

    Plus = '+',
    Minus = '-',
    Multiple = '*',
    Divide = '/',
    Remainder = '%',
    Equal = '=',
}

export const DEFAULT_CALC: ICalc = {
    operator: Character.Empty,
    question: Character.Empty,
    result: '0',
};
