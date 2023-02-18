import { useMemo } from "react";
import {
  CheckIcon as CheckIconOutline,
  XMarkIcon as XIconOutline,
  HomeIcon as HomeIconOutline,
  InformationCircleIcon as InformationCircleIconOutline,
  UserIcon as UserIconOutline,
  MagnifyingGlassIcon as MagnifyingGlassIconOutline,
  BellIcon as BellIconOutline,
  EnvelopeIcon as EnvelopeIconOutline,
} from "@heroicons/react/24/outline";
import {
  CheckIcon as CheckIconSolid,
  XMarkIcon as XIconSolid,
  HomeIcon as HomeIconSolid,
  InformationCircleIcon as InformationCircleIconSolid,
  UserIcon as UserIconSolid,
  MagnifyingGlassIcon as MagnifyingGlassIconSolid,
  BellIcon as BellIconSolid,
  EnvelopeIcon as EnvelopeIconSolid,
} from "@heroicons/react/24/solid";

type XIcon = typeof XIconOutline | typeof XIconSolid;
type UserIcon = typeof UserIconOutline | typeof UserIconSolid;
type HomeIcon = typeof HomeIconOutline | typeof HomeIconSolid;
type CheckIcon = typeof CheckIconOutline | typeof CheckIconSolid;
type BellIcon = typeof BellIconOutline | typeof BellIconSolid;
type EnvelopeIcon = typeof EnvelopeIconOutline | typeof EnvelopeIconSolid;
type MagnifyingGlassIcon =
  | typeof MagnifyingGlassIconOutline
  | typeof MagnifyingGlassIconSolid;
type InformationCircleIcon =
  | typeof InformationCircleIconOutline
  | typeof InformationCircleIconSolid;

export interface Icons {
  [key: string]: {
    outline:
      | CheckIcon
      | XIcon
      | HomeIcon
      | InformationCircleIcon
      | UserIcon
      | MagnifyingGlassIcon
      | BellIcon
      | EnvelopeIcon;
    solid:
      | CheckIcon
      | XIcon
      | HomeIcon
      | InformationCircleIcon
      | UserIcon
      | MagnifyingGlassIcon
      | BellIcon
      | EnvelopeIcon;
  };
}

export const icons: Icons = {
  check: { outline: CheckIconOutline, solid: CheckIconSolid },
  x: { outline: XIconOutline, solid: XIconSolid },
  home: { outline: HomeIconOutline, solid: HomeIconSolid },
  info: {
    outline: InformationCircleIconOutline,
    solid: InformationCircleIconSolid,
  },
  user: {
    outline: UserIconOutline,
    solid: UserIconSolid,
  },
  magnifyingGlass: {
    outline: MagnifyingGlassIconOutline,
    solid: MagnifyingGlassIconSolid,
  },
  bell: {
    outline: BellIconOutline,
    solid: BellIconSolid,
  },
  envelope: {
    outline: EnvelopeIconOutline,
    solid: EnvelopeIconSolid,
  },
};

export const useIcons = () => {
  const memoizedIcons = useMemo(() => icons, []);
  return memoizedIcons;
};
