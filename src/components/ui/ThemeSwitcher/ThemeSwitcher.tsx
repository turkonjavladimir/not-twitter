import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import Toggle from "../Toggle";
import ThemeIcon from "./ThemeIcon";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center">
        <div role="status" className="flex max-w-sm animate-pulse gap-3">
          <div className="h-7 w-[72px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            if (resolvedTheme === "light") {
              setTheme("dark");
            } else {
              setTheme("light");
            }
          }}
        >
          <ThemeIcon theme={resolvedTheme} />
        </button>

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
    </>
  );
};

export default ThemeSwitcher;
