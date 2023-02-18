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
  ChatBubbleOvalLeftIcon as ChatBubbleOvalLeftIconOutline,
  ArrowPathRoundedSquareIcon as ArrowPathRoundedSquareIconOutline,
  HeartIcon as HeartIconOutline,
  ShareIcon as ShareIconOutline,
  CheckBadgeIcon as CheckBadgeIconOutline,
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
  ChatBubbleOvalLeftIcon as ChatBubbleOvalLeftIconSolid,
  ArrowPathRoundedSquareIcon as ArrowPathRoundedSquareIconSolid,
  HeartIcon as HeartIconSolid,
  ShareIcon as ShareIconSolid,
  CheckBadgeIcon as CheckBadgeIconSolid,
} from "@heroicons/react/24/solid";

export const icons = {
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
  chatBubbleOvalLeft: {
    outline: ChatBubbleOvalLeftIconOutline,
    solid: ChatBubbleOvalLeftIconSolid,
  },
  arrowPathRoundedSquare: {
    outline: ArrowPathRoundedSquareIconOutline,
    solid: ArrowPathRoundedSquareIconSolid,
  },
  heart: {
    outline: HeartIconOutline,
    solid: HeartIconSolid,
  },
  share: {
    outline: ShareIconOutline,
    solid: ShareIconSolid,
  },
  checkBadge: {
    outline: CheckBadgeIconOutline,
    solid: CheckBadgeIconSolid,
  },
} as const;

export const useIcons = () => {
  const memoizedIcons = useMemo(() => icons, []);
  return memoizedIcons;
};
