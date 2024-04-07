import { useEffect, useState } from 'react';
import Buttons from './Buttons';
import Screen from './Screen';
import CalculatorHelpers from '@/helpers/calculator';
import { Character, DEFAULT_CALC } from '@/constants/characters';
import Header from './Header';
import StringUtils from '@/helpers/string';

export interface ICalc {
    operator:
        | Character.Empty
        | Character.Plus
        | Character.Minus
        | Character.Multiple
        | Character.Divide
        | Character.Remainder;

    question: string;
    result: string;
}

const Calculator = () => {
    const [calc, setCalc] = useState<ICalc>(DEFAULT_CALC);

    useEffect(() => {
        document.addEventListener('keydown', onDocumentKeyDown);

        return () => {
            document.removeEventListener('keydown', onDocumentKeyDown);
        };
    }, [calc.result]);

    const onDocumentKeyDown = (event: KeyboardEvent): void => {
        handleInputCharacter(CalculatorHelpers.detechKeyOnPress(event.key));
    };

    const handleInputCharacter = (character: string): void => {
        setCalc(CalculatorHelpers.getCalcValue(calc, character));
    };

    return (
        <div
            className={StringUtils.classNames(
                'flex flex-col gap-4',
                'w-[340px] h-[560px]',
                'bg-lightPrimary dark:bg-darkPrimary',
                'pt-[8px] px-[20px] rounded-2xl',
                'select-none',
            )}
        >
            <Header />
            <Screen calc={calc} />
            <Buttons onInputCharacter={handleInputCharacter} />
        </div>
    );
};

export default Calculator;
