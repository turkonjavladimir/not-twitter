import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import ThemeIcon from "./ThemeIcon";

const ManualThemeSwitcher = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
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
  );
};

export default ManualThemeSwitcher;
