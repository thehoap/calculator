import React from 'react';
import { Character } from '@/constants/characters';
import styled from 'styled-components';

export interface Props {
    onInputCharacter: (character: string) => void;
}

const characters: string[] = [
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
        <StyledButtons>
            {characters.map((character) => (
                <div
                    key={character}
                    onClick={() => onClickButton(character)}
                    dangerouslySetInnerHTML={{ __html: character }}
                ></div>
            ))}
        </StyledButtons>
    );
};

const StyledButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;

    & div {
        width: 80px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        font-size: 20px;
        color: #fff;
        background-color: #252b38;
        cursor: pointer;
        user-select: none;
    }
`;

export default Buttons;
