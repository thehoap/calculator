import React from 'react';
import { Character, characters } from '@/constants/characters';
import CalculatorHelpers from '@/helpers/calculator';
import StringUtils from '@/helpers/string';
import MathHelpers from '@/helpers/math';

export interface Props {
    onInputCharacter: (character: string) => void;
}

const Buttons = ({ onInputCharacter }: Props) => {
    const onClickButton = (character: string): void => {
        onInputCharacter(character);
    };

    const getButtonColors = (character: Character): string => {
        if (MathHelpers.isOperator(character)) {
            return 'border-orange text-lightPrimary dark:text-[#494542] bg-lightOrange';
        }

        if (character === Character.Clear || character === Character.ClearAll) {
            return 'border-red text-lightPrimary dark:text-[#494542] bg-lightRed';
        }

        if (character === Character.Equal) {
            return 'border-[#8a8294] text-lightPrimary dark:text-[#494542] bg-[#a49dab]';
        }

        return 'border-[#e3d9ca] dark:border-[#B4AFAB] text-red dark:text-lightRed bg-[#f5f0eb] dark:bg-[#4B473E]';
    };

    return (
        <div
            className={StringUtils.classNames(
                'flex justify-center items-center flex-wrap gap-2',
                'p-[8px] rounded-lg',
                'bg-[#ccbfb4] dark:bg-[#54504D]',
            )}
        >
            {characters.map((character: Character) => (
                <button
                    className={StringUtils.classNames(
                        'flex justify-center items-center',
                        `w-[64px] h-[64px]`,
                        'text-[20px] font-bold ',
                        'border-[4px] rounded-xl',
                        'cursor-pointer',
                        getButtonColors(character),
                    )}
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
