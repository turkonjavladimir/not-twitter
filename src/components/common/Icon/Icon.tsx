import { Fragment } from "react";

import { useIcons } from "../../../lib/hooks/useIcons";

export type IconName =
  | "check"
  | "x"
  | "home"
  | "info"
  | "user"
  | "magnifyingGlass"
  | "bell"
  | "envelope"
  | "chatBubbleOvalLeft"
  | "arrowPathRoundedSquare"
  | "heart"
  | "share"
  | "checkBadge";

interface IconProps {
  name: IconName;
  variant?: "outline" | "solid";
  className?: string;
}

const Icon = ({
  name,
  variant = "outline",
  className = "",
  ...props
}: IconProps) => {
  const icons = useIcons();
  const IconComponent = icons[name]?.[variant] || Fragment;

  return <IconComponent className={`${className}`} {...props} />;
};

export default Icon;
