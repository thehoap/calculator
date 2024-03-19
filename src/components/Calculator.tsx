import { useEffect, useState } from 'react';
import styled from 'styled-components';
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
        <StyledCalculator>
            <Header></Header>
            <Screen calc={calc} />
            <Buttons onInputCharacter={handleInputCharacter} />
        </StyledCalculator>
    );
};

export const StyledCalculator = styled.div`
    width: 375px;
    height: 600px;
    border: 1px solid black;
`;

export default Calculator;
