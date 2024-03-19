import { Character } from '@/constants/characters';

const calculate = (firstNumber: number, operator: Character, secondNumber: number): number => {
    switch (operator) {
        case Character.Plus:
            return firstNumber + secondNumber;

        case Character.Minus:
            return firstNumber - secondNumber;

        case Character.Multiple:
            return firstNumber * secondNumber;

        case Character.Divide:
            return firstNumber / secondNumber;

        case Character.Remainder:
            return firstNumber % secondNumber;

        default:
            return 0;
    }
};

const isOperator = (character: Character): boolean => {
    return (
        character === Character.Plus ||
        character === Character.Minus ||
        character === Character.Multiple ||
        character === Character.Divide ||
        character === Character.Remainder
    );
};

const isInfinity = (numb: number) => !isFinite(numb);

const MathHelpers = { calculate, isOperator, isInfinity };

export default MathHelpers;
