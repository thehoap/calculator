import { useEffect, useState } from 'react';

export enum THEME {
    LIGHT = 'light',
    DARK = 'dark',
}

const useDarkMode = () => {
    const [theme, setTheme] = useState<THEME.LIGHT | THEME.DARK>(localStorage.theme);

    useEffect(() => {
        console.log(theme);
        const html = document.documentElement;
        const currentTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;

        html.classList.remove(currentTheme);
        html.classList.add(theme);

        localStorage.setItem('theme', theme);
    }, [theme]);

    return { theme, setTheme };
};

export default useDarkMode;
