import { useMemo } from "react";
import {
  ArrowPathRoundedSquareIcon as ArrowPathRoundedSquareIconOutline,
  BellIcon as BellIconOutline,
  BellSlashIcon as BellSlashIconOutline,
  ChatBubbleOvalLeftIcon as ChatBubbleOvalLeftIconOutline,
  CheckBadgeIcon as CheckBadgeIconOutline,
  CheckIcon as CheckIconOutline,
  EllipsisHorizontalIcon as EllipsisHorizontalIconOutline,
  EnvelopeIcon as EnvelopeIconOutline,
  FlagIcon as FlagIconOutline,
  HeartIcon as HeartIconOutline,
  HomeIcon as HomeIconOutline,
  InformationCircleIcon as InformationCircleIconOutline,
  LockClosedIcon as LockClosedIconOutline,
  MagnifyingGlassIcon as MagnifyingGlassIconOutline,
  NoSymbolIcon as NoSymbolIconOutline,
  PencilSquareIcon as PencilSquareIconOutline,
  PlusCircleIcon as PlusCircleIconOutline,
  ShareIcon as ShareIconOutline,
  TrashIcon as TrashIconOutline,
  UserIcon as UserIconOutline,
  XCircleIcon as XCircleIconOutline,
  XMarkIcon as XIconOutline,
} from "@heroicons/react/24/outline";

import {
  ArrowPathRoundedSquareIcon as ArrowPathRoundedSquareIconSolid,
  BellIcon as BellIconSolid,
  BellSlashIcon as BellSlashIconSolid,
  ChatBubbleOvalLeftIcon as ChatBubbleOvalLeftIconSolid,
  CheckBadgeIcon as CheckBadgeIconSolid,
  CheckIcon as CheckIconSolid,
  EllipsisHorizontalIcon as EllipsisHorizontalIconSolid,
  EnvelopeIcon as EnvelopeIconSolid,
  FlagIcon as FlagIconSolid,
  HeartIcon as HeartIconSolid,
  HomeIcon as HomeIconSolid,
  InformationCircleIcon as InformationCircleIconSolid,
  LockClosedIcon as LockClosedIconSolid,
  MagnifyingGlassIcon as MagnifyingGlassIconSolid,
  NoSymbolIcon as NoSymbolIconSolid,
  PencilSquareIcon as PencilSquareIconSolid,
  PlusCircleIcon as PlusCircleIconSolid,
  ShareIcon as ShareIconSolid,
  TrashIcon as TrashIconSolid,
  UserIcon as UserIconSolid,
  XCircleIcon as XCircleIconSolid,
  XMarkIcon as XIconSolid,
} from "@heroicons/react/24/solid";

export const icons = {
  arrowPathRoundedSquare: {
    outline: ArrowPathRoundedSquareIconOutline,
    solid: ArrowPathRoundedSquareIconSolid,
  },
  bell: {
    outline: BellIconOutline,
    solid: BellIconSolid,
  },
  bellSlash: {
    outline: BellSlashIconOutline,
    solid: BellSlashIconSolid,
  },
  chatBubbleOvalLeft: {
    outline: ChatBubbleOvalLeftIconOutline,
    solid: ChatBubbleOvalLeftIconSolid,
  },
  check: {
    outline: CheckIconOutline,
    solid: CheckIconSolid,
  },
  checkBadge: {
    outline: CheckBadgeIconOutline,
    solid: CheckBadgeIconSolid,
  },
  ellipsisHorizontal: {
    outline: EllipsisHorizontalIconOutline,
    solid: EllipsisHorizontalIconSolid,
  },
  envelope: {
    outline: EnvelopeIconOutline,
    solid: EnvelopeIconSolid,
  },
  flag: {
    outline: FlagIconOutline,
    solid: FlagIconSolid,
  },
  heart: {
    outline: HeartIconOutline,
    solid: HeartIconSolid,
  },
  home: {
    outline: HomeIconOutline,
    solid: HomeIconSolid,
  },
  info: {
    outline: InformationCircleIconOutline,
    solid: InformationCircleIconSolid,
  },
  lockClosed: {
    outline: LockClosedIconOutline,
    solid: LockClosedIconSolid,
  },
  magnifyingGlass: {
    outline: MagnifyingGlassIconOutline,
    solid: MagnifyingGlassIconSolid,
  },
  noSymbol: {
    outline: NoSymbolIconOutline,
    solid: NoSymbolIconSolid,
  },
  pencilSquare: {
    outline: PencilSquareIconOutline,
    solid: PencilSquareIconSolid,
  },
  plusCircle: {
    outline: PlusCircleIconOutline,
    solid: PlusCircleIconSolid,
  },
  share: {
    outline: ShareIconOutline,
    solid: ShareIconSolid,
  },
  trash: {
    outline: TrashIconOutline,
    solid: TrashIconSolid,
  },
  user: {
    outline: UserIconOutline,
    solid: UserIconSolid,
  },
  x: {
    outline: XIconOutline,
    solid: XIconSolid,
  },
  xCircle: {
    outline: XCircleIconOutline,
    solid: XCircleIconSolid,
  },
} as const;

export const useIcons = () => {
  const memoizedIcons = useMemo(() => icons, []);
  return memoizedIcons;
};
