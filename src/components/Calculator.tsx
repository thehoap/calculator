import { useEffect, useState } from 'react';
import Buttons from './Buttons';
import Screen from './Screen';
import CalculatorHelpers from '@/helpers/calculator';
import { Character, DEFAULT_CALC } from '@/constants/characters';
import Header from './Header';

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
        <div className='w-[375px] h-[600px] border border-black'>
            <Header />
            <Screen calc={calc} />
            <Buttons onInputCharacter={handleInputCharacter} />
        </div>
    );
};

export default Calculator;
