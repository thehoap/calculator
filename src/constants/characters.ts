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

export const OperatorHTMLEntity = {
    [Character.Multiple]: '&#215;',
    [Character.Divide]: '&#247;',
};

export const DEFAULT_CALC: ICalc = {
    operator: Character.Empty,
    question: Character.Empty,
    result: '0',
};

export const characters: Character[] = [
    Character.ClearAll,
    Character.Clear,
    Character.Remainder,
    Character.Divide,

    Character.Seven,
    Character.Eight,
    Character.Nine,
    Character.Multiple,

    Character.Four,
    Character.Five,
    Character.Six,
    Character.Minus,

    Character.One,
    Character.Two,
    Character.Three,
    Character.Plus,

    Character.Zero,
    Character.Dot,
    Character.Thousand,
    Character.Equal,
];
