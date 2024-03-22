import React from 'react';
import { ICalc } from './Calculator';
import CalculatorHelpers, { RESULT_MAX_LENGTH } from '@/helpers/calculator';
import { Character } from '@/constants/characters';

interface Props {
    calc: ICalc;
}

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
        <div className='h-[100px] pr-[40px] text-[40px]'>
            <div className='flex justify-end items-center h-[50px] text-[20px]'>
                {question && (
                    <>
                        {addCommasToNumber(String(firstNumber))}
                        <span
                            className='inline-block w-[20px] mx-[8px] my-0 '
                            dangerouslySetInnerHTML={{
                                __html: CalculatorHelpers.renderOperator(operator),
                            }}
                        />
                    </>
                )}
            </div>
            <div className='h-[50px] mt-auto text-right text-[40px]'>{renderResult(result)}</div>
        </div>
    );
};

export default Screen;
