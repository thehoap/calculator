import { Moon, Sun } from '@/assets';
import useDarkMode, { THEME } from '@/hooks/useDarkMode';
import { ChangeEvent, useMemo } from 'react';
import styled from 'styled-components';

const Header = () => {
    const { theme, setTheme } = useDarkMode();
    const isDarkMode = useMemo(() => theme === THEME.DARK, [theme]);

    const handleToggleDarkMode = (event: ChangeEvent<HTMLInputElement>): void => {
        const theme = event.target.checked ? THEME.DARK : THEME.LIGHT;
        setTheme(theme);
    };

    return (
        <StyledHeader className='flex justify-between items-center'>
            <p>
                Calculator by <a href='https://github.com/thehoap'>thehoap</a>
            </p>
            <div>
                <input
                    type='checkbox'
                    name='toggle-darkmode'
                    id='toggle-darkmode'
                    checked={isDarkMode}
                    onChange={handleToggleDarkMode}
                />
                <label
                    className='flex items-center w-[75px] h-[25px] p-[2px] border border-black rounded-[20px]'
                    htmlFor='toggle-darkmode'
                >
                    {isDarkMode ? <Sun /> : <Moon />}
                </label>
            </div>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    & svg {
        display: inline-block;
        width: 25px;
        height: 25px;
        border: 1px solid black;
        border-radius: 50%;
    }
`;

export default Header;
