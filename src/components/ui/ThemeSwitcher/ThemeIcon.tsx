import { MoonIcon } from "@heroicons/react/24/outline";
import { MoonIcon as MoonIconSolid } from "@heroicons/react/24/solid";

type ThemeIconProps = {
  theme?: string;
};

const ThemeIcon = ({ theme }: ThemeIconProps) => {
  switch (theme) {
    case "light":
      return <MoonIcon className="h-5 w-5" />;

    case "dark":
      return <MoonIconSolid className="h-5 w-5" />;

    default:
      return <MoonIcon className="h-5 w-5" />;
  }
};

export default ThemeIcon;
