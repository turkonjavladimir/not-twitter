import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import ThemeIcon from "./ThemeIcon";

const ManualThemeToggle = ({ hasLabel = false }: { hasLabel?: boolean }) => {
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
    <div
      className={`flex ${
        hasLabel ? "w-full" : ""
      } items-center justify-between`}
    >
      {hasLabel && (
        <span className="ml-2">
          Toggle {resolvedTheme === "dark" ? "light" : "dark"}
        </span>
      )}
      <button
        className="p-2"
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
    </div>
  );
};

export default ManualThemeToggle;
