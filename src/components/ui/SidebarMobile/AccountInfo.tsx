import { LockClosedIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Avatar } from "../../common/Avatar";

function formatNumber(value: string) {
  var length = (Math.abs(parseInt(value, 10)) + "").length,
    index = Math.ceil((length - 3) / 3),
    suffix = ["K", "M", "B", "T"];

  if (length < 4) return value;

  return (
    (Number(value) / Math.pow(1000, index)).toFixed(1).replace(/\.0$/, "") +
    suffix[index - 1]
  );
}

type AccountInfoProps = {
  name: string;
  username: string;
  followers: string;
  following: string;
  avatarLabel: string;
};

const AccountInfo = ({
  name,
  username,
  avatarLabel,
  followers = "0",
  following = "0",
}: AccountInfoProps) => {
  return (
    <div className="p-4">
      <div className="flex w-full items-center justify-between">
        <div>
          <Avatar size="md" label={avatarLabel} />
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

/* type AccountInfoProps = {
  name: string;
  username: string;
  followers: string;
  following: string;
  avatarLabel: string;
};
const AccountInfo = ({
  name,
  username,
  avatarLabel,
  followers = "0",
  following = "0",
}: AccountInfoProps) => {
  return (
    <div className="p-4">
      <div className="flex w-full items-center justify-between">
        <div>
          <Avatar size="md" label={avatarLabel} />
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
}; */
