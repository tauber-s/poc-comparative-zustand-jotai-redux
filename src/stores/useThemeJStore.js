import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { THEME_TYPES } from "../constants";

export const themeAtom = atomWithStorage("theme", THEME_TYPES.THEME_LIGHT);

export const toggleThemeAtom = atom(
  (get) => get(themeAtom),
  (get, set) => {
    const current = get(themeAtom);
    const next =
      current === THEME_TYPES.THEME_LIGHT
        ? THEME_TYPES.THEME_DARK
        : THEME_TYPES.THEME_LIGHT;
    set(themeAtom, next);
  }
);