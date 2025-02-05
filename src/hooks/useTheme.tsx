'use client';
import { useState, useEffect } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.add(storedTheme);
    setTheme(storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return { theme, toggleTheme };
}
