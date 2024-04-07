import React from 'react';
import { Character, characters } from '@/constants/characters';
import CalculatorHelpers from '@/helpers/calculator';

export interface Props {
    onInputCharacter: (character: string) => void;
}

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
                                text-[24px] text-white bg-[#252b38] dark:bg-[#f36536] 
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
