import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useToggleTheme = () => {
  const { theme, themes, setTheme, systemTheme, resolvedTheme } = useTheme();
  const [themeValue, setThemeValue] = useState<string | undefined>("system");

  useEffect(() => setThemeValue(theme), [theme]);

  return { theme: themeValue, setTheme, themes, systemTheme, resolvedTheme };
};
