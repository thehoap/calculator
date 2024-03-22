import React from 'react';
import { Character } from '@/constants/characters';
import CalculatorHelpers from '@/helpers/calculator';

export interface Props {
    onInputCharacter: (character: string) => void;
}

const characters: Character[] = [
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

const Buttons = ({ onInputCharacter }: Props) => {
    const onClickButton = (character: string): void => {
        onInputCharacter(character);
    };

    return (
        <div className='flex justify-center items-center flex-wrap gap-3'>
            {characters.map((character: Character) => (
                <button
                    className='flex justify-center items-center 
                                w-[80px] h-[80px] 
                                text-[24px] text-white bg-[#252b38] 
                                rounded-[16px] 
                                cursor-pointer select-none'
                    key={character}
                    onClick={() => onClickButton(character)}
                    dangerouslySetInnerHTML={{
                        __html: CalculatorHelpers.renderOperator(character),
                    }}
                />
            ))}
        </div>
    );
};

export default Buttons;
