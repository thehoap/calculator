import { Moon, Sun } from '@/assets';
import StringUtils from '@/helpers/string';
import useDarkMode, { THEME } from '@/hooks/useDarkMode';
import { ChangeEvent, useMemo } from 'react';

const Header = () => {
    const { theme, setTheme } = useDarkMode();
    const isDarkMode = useMemo(() => theme === THEME.DARK, [theme]);

    const handleToggleDarkMode = (event: ChangeEvent<HTMLInputElement>): void => {
        const theme = event.target.checked ? THEME.DARK : THEME.LIGHT;
        setTheme(theme);
    };

    const svgClassName = StringUtils.classNames('absolute top-[2px]', 'w-4 h-4', 'bg-[#fff]', 'rounded-full');

    return (
        <header className='flex justify-between items-center mb-2'>
            <h1 className={StringUtils.classNames('text-sun dark:text-moon', 'text-[20px] font-extrabold uppercase')}>
                Calculator
            </h1>
            <input
                type='checkbox'
                name='toggle-darkmode'
                id='toggle-darkmode'
                className='hidden'
                checked={isDarkMode}
                onChange={handleToggleDarkMode}
            />
            <label
                className={StringUtils.classNames(
                    'relative',
                    'flex justify-between items-center',
                    'w-[50px] h-[20px]',
                    isDarkMode ? 'bg-moon' : 'bg-[#fad496]',
                    'px-[2px] py-[4px] rounded-[20px]',
                    'cursor-pointer',
                )}
                htmlFor='toggle-darkmode'
            >
                <Moon
                    className={StringUtils.classNames(
                        svgClassName,
                        'stroke-moon fill-moon',
                        isDarkMode
                            ? 'opacity-100 left-[100%] translate-x-[calc(-100%-2px)] rotate-0'
                            : 'opacity-0 left-0 rotate-180',
                    )}
                />
                <Sun
                    className={StringUtils.classNames(
                        svgClassName,
                        'stroke-sun fill-sun',
                        !isDarkMode
                            ? 'opacity-100 right-[100%] translate-x-[calc(100%+2px)] rotate-180'
                            : 'opacity-0 right-0',
                    )}
                />
            </label>
        </header>
    );
};

export default Header;
