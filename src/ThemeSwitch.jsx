import "./App.css";

import { useThemeZ } from "./hooks/useThemeZ";
import useThemeZStore from "./stores/useThemeZStore";

import { useAtom } from "jotai";
import { toggleThemeAtom } from "./stores/useThemeJStore";
import { useThemeJ } from "./hooks/useThemeJ";

const ThemeSwitch = () => {
  const toggleThemeZ = useThemeZStore((state) => state.toggleTheme);
  useThemeZ();

  const [, toggleThemeJ] = useAtom(toggleThemeAtom);
  useThemeJ();

  return (
    <div className="h-screen bg-white dark:bg-black flex items-center justify-center">
      <div className="shadow-xl flex flex-col space-y-6 items-center justify-center p-16 dark:bg-gray-900">
        <span className="dark:text-white text-black font-bold text-xl">
          Let's build dark mode with react.
        </span>
        <button
          onClick={toggleThemeZ}
          type="button"
          className="p-4 rounded bg-black dark:bg-white text-white dark:text-black font-semibold"
        >
          Toggle Theme zustand
        </button>
        <button
          onClick={toggleThemeJ}
          type="button"
          className="p-4 rounded bg-black dark:bg-white text-white dark:text-black font-semibold"
        >
          Toggle Theme jotai
        </button>
      </div>
    </div>
  );
}

export default ThemeSwitch;