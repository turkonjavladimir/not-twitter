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
    <div className="flex min-w-0 items-center justify-between p-2">
      <span className="truncate">Use system theme</span>
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
    </div>
  );
};

export default ThemeSwitcher;
