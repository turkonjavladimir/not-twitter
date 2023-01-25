import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import Toggle from "../Toggle";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Toggle
      onChange={() => {
        if (theme === "system" && resolvedTheme) {
          setTheme(resolvedTheme);
        } else {
          setTheme("system");
        }
      }}
      enabled={theme === "system"}
    />
  );
};

export default ThemeSwitcher;