import { ICalc } from '@/components//Calculator';
import { Character, DEFAULT_CALC } from '@/constants/characters';
import MathHelpers from './math';

export const RESULT_MAX_LENGTH = 11;

const getCalcValue = (calc: ICalc, character: string): ICalc => {
    const hasOperator = MathHelpers.isOperator(calc.question.slice(-1) as Character);

    switch (character) {
        /*
         * Clear function
         */
        case Character.ClearAll:
            return DEFAULT_CALC;
        case Character.Clear:
            if (calc.result.length === 1) {
                return {
                    ...calc,
                    result: '0',
                };
            }

            return {
                ...calc,
                result: String(calc.result).slice(0, -1),
            };

        /*
         * Number
         */
        case Character.Zero:
        case Character.One:
        case Character.Two:
        case Character.Three:
        case Character.Four:
        case Character.Five:
        case Character.Six:
        case Character.Seven:
        case Character.Eight:
        case Character.Nine:
            if (isScreenFull(calc.result, character)) {
                return calc;
            }

            if (MathHelpers.isInfinity(Number(calc.result))) {
                return {
                    ...calc,
                    result: character,
                };
            }

            if (hasDot(calc.result)) {
                return {
                    ...calc,
                    result: `${calc.result}${character}`,
                };
            }

            return {
                ...calc,
                result: String(Number(calc.result) * 10 + Number(character)),
            };

        /*
         * Operator
         */
        case Character.Plus:
        case Character.Minus:
        case Character.Multiple:
        case Character.Divide:
        case Character.Remainder:
            if (MathHelpers.isInfinity(Number(calc.result))) {
                return {
                    operator: character,
                    question: `0 ${character}`,
                    result: '0',
                };
            }

            if (hasOperator) {
                const { firstNumber, operator } = getFirstNumberAndOperator(calc.question);

                if (Number(calc.result)) {
                    const result: number = MathHelpers.calculate(
                        firstNumber,
                        operator as Character,
                        Number(calc.result),
                    );

                    return {
                        operator: character,
                        question: `${result} ${character}`,
                        result: '0',
                    };
                }

                return {
                    ...calc,
                    operator: character,
                    question: `${firstNumber} ${character}`,
                };
            }

            return {
                operator: character,
                question: `${calc.result} ${character}`,
                result: '0',
            };

        /*
         * Other
         */
        case Character.Dot:
            if (isScreenFull(calc.result, character)) {
                return calc;
            }

            if (hasDot(calc.result)) {
                return calc;
            }

            return {
                ...calc,
                result: `${calc.result}.`,
            };

        case Character.Thousand:
            if (isScreenFull(calc.result, character)) {
                return calc;
            }

            if (hasDot(calc.result)) {
                return calc;
            }

            return {
                ...calc,
                result: `${calc.result}${character}`,
            };

        case Character.Equal: {
            if (!calc.question) {
                return calc;
            }

            const { firstNumber, operator } = getFirstNumberAndOperator(calc.question);
            const result: number = MathHelpers.calculate(firstNumber, operator as Character, Number(calc.result));

            return {
                ...DEFAULT_CALC,
                result: String(result),
            };
        }
        default:
            return calc;
    }
};

const isScreenFull = (result: string, character: Character): boolean => {
    /*
     * The largest number is 999 999 999.
     * Converting it to localeString will add 2 more commas.
     */
    return result.length + 2 + character.length > RESULT_MAX_LENGTH;
};

const hasDot = (numb: string) => numb.includes(Character.Dot);

const getFirstNumberAndOperator = (question: string): { firstNumber: number; operator: Character } => {
    /*
     * question has format '<number> <operator>'
     */
    const [firstNumber, operator] = question.split(' ');

    return {
        firstNumber: Number(firstNumber),
        operator: operator as Character,
    };
};

const detechKeyOnPress = (key: string): Character => {
    if (Object.values(Character).includes(key as Character)) {
        return key as Character;
    }

    if (key === 'Backspace') {
        return Character.Clear;
    }

    if (key === 'Delete') {
        return Character.ClearAll;
    }

    if (key === 'Enter') {
        return Character.Equal;
    }

    return Character.Empty;
};

const CalculatorHelpers = {
    getCalcValue,
    detechKeyOnPress,
    getFirstNumberAndOperator,
    hasDot,
};

export default CalculatorHelpers;
