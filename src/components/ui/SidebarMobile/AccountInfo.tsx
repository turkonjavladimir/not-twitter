import Link from "next/link";
import { LockClosedIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

import { Avatar } from "../../common/Avatar";
import { formatNumber } from "../../../lib/format-number";

type AccountInfoProps = {
  name: string;
  username: string;
  followers: string;
  following: string;
  avatarLabel: string;
  imageUrl?: string;
};

const AccountInfo = ({
  name,
  username,
  avatarLabel,
  followers = "0",
  following = "0",
  imageUrl,
}: AccountInfoProps) => {
  return (
    <div className="p-4">
      <div className="flex w-full items-center justify-between">
        <div>
          <Avatar size="md" label={avatarLabel} imageUrl={imageUrl} />
        </div>
        <Link href="/">
          <PlusCircleIcon className="h-8 w-8 text-neutral-400" />
        </Link>
      </div>

      <div className="mt-2">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 hover:underline"
        >
          <span className="truncate font-semibold">{name}</span>
          <div className="shrink-0">
            <LockClosedIcon className="h-4 w-4" />
          </div>
        </Link>

        <div className="flex min-w-0 leading-none">
          <span className="truncate text-sm text-neutral-500">@{username}</span>
        </div>

        <div className="mt-3 flex gap-5">
          <Link href="/" className="flex min-w-0 gap-1 text-sm hover:underline">
            <span className="truncate font-semibold">
              {formatNumber(following)}
            </span>
            <span className="text-neutral-500">Following</span>
          </Link>

          <Link href="/" className="flex min-w-0 gap-1 text-sm hover:underline">
            <span className="truncate font-semibold">
              {formatNumber(followers)}
            </span>
            <span className="text-neutral-500">Followers</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
