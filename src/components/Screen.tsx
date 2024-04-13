import React from 'react';
import { ICalc } from './Calculator';
import CalculatorHelpers, { RESULT_MAX_LENGTH } from '@/helpers/calculator';
import { Character } from '@/constants/characters';
import StringUtils from '@/helpers/string';

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
        <div
            className={StringUtils.classNames(
                'flex flex-col justify-between',
                'h-[88px]',
                'bg-[#f5f0eb] dark:bg-[#4B473E]',
                'py-[4px] pr-[20px] border-[4px] border-darkPrimary dark:border-lightPrimary rounded-xl',
                'text-[40px] text-darkPrimary dark:text-lightPrimary',
            )}
        >
            <div
                className={StringUtils.classNames(
                    'flex justify-end items-center',
                    'h-[40px]',
                    'text-[16px]',
                    'opacity-40',
                )}
            >
                {question && (
                    <>
                        {addCommasToNumber(String(firstNumber))}
                        <span
                            className={StringUtils.classNames('inline-block', 'w-[20px]', 'mx-[8px] my-0')}
                            dangerouslySetInnerHTML={{
                                __html: CalculatorHelpers.renderOperator(operator),
                            }}
                        />
                    </>
                )}
            </div>
            <div className={StringUtils.classNames('h-[60px]', 'text-right text-[28px]')}>{renderResult(result)}</div>
        </div>
    );
};

export default Screen;
