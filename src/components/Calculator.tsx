import { useEffect } from 'react';
import Buttons from './Buttons';
import Screen from './Screen';
import CalculatorHelpers from '@/helpers/calculator';
import { Character, DEFAULT_CALC } from '@/constants/characters';
import Header from './Header';
import StringUtils from '@/helpers/string';
import useUndoRedo from '@/hooks/useUndoRedo';
import { Redo, Undo } from '@/assets';

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
    const { present: calc, past, future, undo, redo, updatePresent: updateCalc } = useUndoRedo<ICalc>(DEFAULT_CALC);

    useEffect(() => {
        document.addEventListener('keydown', onDocumentKeyDown);

        return () => {
            document.removeEventListener('keydown', onDocumentKeyDown);
        };
    }, [calc.result]);

    const onDocumentKeyDown = (event: KeyboardEvent): void => {
        const character: Character = CalculatorHelpers.detechKeyOnPress(event.key);

        if (character !== Character.Empty) {
            handleInputCharacter(character);
        }
    };

    const handleInputCharacter = (character: string): void => {
        updateCalc(CalculatorHelpers.getCalcValue(calc, character));
    };

    return (
        <div
            className={StringUtils.classNames(
                'flex flex-col gap-2',
                'w-[340px] h-[560px]',
                'bg-lightPrimary dark:bg-darkPrimary',
                'pt-[8px] px-[20px] rounded-2xl',
                'select-none',
            )}
        >
            <Header />
            <Screen calc={calc} />
            <div className={StringUtils.classNames('flex justify-end items-center gap-2')}>
                <Undo onClick={undo} disabled={past.length === 0} />
                <Redo onClick={redo} disabled={future.length === 0} />
            </div>
            <Buttons onInputCharacter={handleInputCharacter} />
        </div>
    );
};

export default Calculator;
