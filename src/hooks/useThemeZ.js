import { useEffect } from "react";
import useThemeZStore from "../stores/useThemeZStore";
import { applyThemePreference } from "../utils/themeUtils";

const selector = (state) => state.theme;
export const useThemeZ = () => {
  const theme = useThemeZStore(selector);
  useEffect(() => {
    applyThemePreference(theme);
  }, [theme]);
};