import React from 'react';
import styled from 'styled-components';
import { ICalc } from './Calculator';
import CalculatorHelpers, { RESULT_MAX_LENGTH } from '@/helpers/calculator';
import { Character } from '@/constants/characters';

interface Props {
    calc: ICalc;
}

const OperatorHTMLEntity = {
    [Character.Multiple]: '&#215;',
    [Character.Divide]: '&#247;',
};

const renderOperator = (operator: Character): React.ReactNode => {
    if (operator === Character.Multiple || operator === Character.Divide) {
        return (
            <span
                dangerouslySetInnerHTML={{
                    __html: OperatorHTMLEntity[operator],
                }}
            />
        );
    }

    return <span>{operator}</span>;
};

const renderResult = (result: string): React.ReactNode => {
    if (!isFinite(Number(result))) {
        return 'division by zero';
    }

    return addCommasToNumber(result);
};

const addCommasToNumber = (numb: string): string => {
    const [integerPart, decimalPart] = numb.split('.');
    const integerWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ','); //add comma between each group of 3 digits

    if (CalculatorHelpers.hasDot(numb) && !decimalPart) {
        return `${integerWithCommas}.`;
    }

    const decimalMaxLength = RESULT_MAX_LENGTH - integerWithCommas.length - Character.Dot.length;

    return `${integerWithCommas}${decimalPart ? `.${decimalPart.slice(0, decimalMaxLength)}` : ''}`;
};

const Screen = ({ calc }: Props) => {
    const { question, result } = calc;
    const { firstNumber, operator } = CalculatorHelpers.getFirstNumberAndOperator(question);

    return (
        <StyledScreen>
            <StyledQuestion>
                {question && (
                    <>
                        {addCommasToNumber(String(firstNumber))}
                        {renderOperator(operator)}
                    </>
                )}
            </StyledQuestion>
            <StyledResult>{renderResult(result)}</StyledResult>
        </StyledScreen>
    );
};

const StyledScreen = styled.div`
    height: 100px;
    padding-right: 20px;
    font-size: 40px;
`;

const StyledQuestion = styled.div`
    border: 1px solid red;
    display: flex;
    justify-content: right;
    align-items: center;
    height: 50px;
    padding-right: 20px;
    font-size: 20px;

    & span {
        display: inline-block;
        margin: 0 4px;
    }
`;

const StyledResult = styled.div`
    border: 1px solid blue;
    text-align: right;
    height: 50px;
    margin-top: auto;
    padding-right: 20px;
    font-size: 40px;
`;

export default Screen;
