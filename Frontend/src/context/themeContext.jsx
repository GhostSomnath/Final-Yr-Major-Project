import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext(null);

export function ThemeCompo({ children }) {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Apply theme to the html element
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeCompo');
    }
    return context;
}
