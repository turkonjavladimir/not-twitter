import Icon from "../../common/Icon";

type ThemeIconProps = {
  theme?: string;
};

const ThemeIcon = ({ theme }: ThemeIconProps) => {
  switch (theme) {
    case "light":
      return <Icon name="moonIcon" className="h-5 w-5" />;

    case "dark":
      return <Icon name="moonIcon" variant="solid" className="h-5 w-5" />;

    default:
      return <Icon name="moonIcon" className="h-5 w-5" />;
  }
};

export default ThemeIcon;
