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
  EllipsisHorizontalIcon as EllipsisHorizontalIconOutline,
  PencilSquareIcon as PencilSquareIconOutline,
  XCircleIcon as XCircleIconOutline,
  NoSymbolIcon as NoSymbolIconOutline,
  BellSlashIcon as BellSlashIconOutline,
  FlagIcon as FlagIconOutline,
  TrashIcon as TrashIconOutline,
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
  EllipsisHorizontalIcon as EllipsisHorizontalIconSolid,
  PencilSquareIcon as PencilSquareIconSolid,
  XCircleIcon as XCircleIconSolid,
  NoSymbolIcon as NoSymbolIconSolid,
  BellSlashIcon as BellSlashIconSolid,
  FlagIcon as FlagIconSolid,
  TrashIcon as TrashIconSolid,
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
  ellipsisHorizontal: {
    outline: EllipsisHorizontalIconOutline,
    solid: EllipsisHorizontalIconSolid,
  },
  pencilSquare: {
    outline: PencilSquareIconOutline,
    solid: PencilSquareIconSolid,
  },
  xCircle: {
    outline: XCircleIconOutline,
    solid: XCircleIconSolid,
  },
  noSymbol: {
    outline: NoSymbolIconOutline,
    solid: NoSymbolIconSolid,
  },
  bellSlash: {
    outline: BellSlashIconOutline,
    solid: BellSlashIconSolid,
  },
  flag: {
    outline: FlagIconOutline,
    solid: FlagIconSolid,
  },
  trash: {
    outline: TrashIconOutline,
    solid: TrashIconSolid,
  },
} as const;

export const useIcons = () => {
  const memoizedIcons = useMemo(() => icons, []);
  return memoizedIcons;
};
