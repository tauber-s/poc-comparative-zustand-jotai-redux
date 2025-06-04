import { THEME_TYPES } from "../constants";

export const applyThemePreference = (theme) => {
  const { THEME_DARK, THEME_LIGHT } = THEME_TYPES;
  const root = document.documentElement;

  if (theme !== THEME_DARK && theme !== THEME_LIGHT) {
    console.warn("Tema inválido:", theme);
    return;
  }

  const isDark = theme === THEME_DARK;
  root.classList.remove(isDark ? THEME_LIGHT : THEME_DARK);
  root.classList.add(theme);
};