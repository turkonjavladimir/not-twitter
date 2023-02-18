import Link from "next/link";

import Icon from "../../common/Icon";
import CardDropdownMenu from "./CardDropdownMenu";

type PostHeaderProps = {
  name: string;
  time: string;
  username: string;
  verified?: boolean;
};

const CardHeader = ({ name, username, time, verified }: PostHeaderProps) => {
  return (
    <div className="flex w-full min-w-0 flex-row justify-between gap-2">
      <div className="flex items-start gap-1 truncate">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-1 hover:underline"
        >
          <span className="truncate text-sm font-bold">{name}</span>

          {verified && (
            <Icon
              name="checkBadge"
              variant="solid"
              className="h-5 w-5 shrink-0 text-sky-500"
            />
          )}
        </Link>

        <span className="truncate text-sm text-neutral-500">@{username}</span>
        <span className="shrink-0 text-sm text-neutral-500">{time}</span>
      </div>

      <CardDropdownMenu />
    </div>
  );
};

export default CardHeader;
