import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { themeAtom } from "../stores/useThemeJStore";
import { applyThemePreference } from "../utils/themeUtils";

export const useThemeJ = () => {
  const theme = useAtomValue(themeAtom);

  useEffect(() => {
    applyThemePreference(theme);
  }, [theme]);
};