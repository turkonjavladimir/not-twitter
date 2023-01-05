import {
  ArrowPathRoundedSquareIcon,
  ChatBubbleOvalLeftIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Avatar } from "../../common/Avatar";

import { CheckBadgeIcon, UserIcon } from "@heroicons/react/24/solid";

type PostHeaderProps = {
  name: string;
  time: string;
  username: string;
  verified?: boolean;
};
const PostHeader = ({ name, username, time, verified }: PostHeaderProps) => {
  return (
    <div className="flex w-full min-w-0 flex-row justify-between">
      <div className="flex items-start gap-1 truncate">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-1 hover:underline"
        >
          <span className="truncate text-sm font-bold">
            {name} Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Rem, aut?
          </span>

          {verified && (
            <CheckBadgeIcon className="h-5 w-5 shrink-0 text-sky-500" />
          )}
        </Link>

        <span className="truncate text-sm text-neutral-500">@{username}</span>
        <span className="shrink-0 text-sm text-neutral-500">{time}</span>
      </div>
      <button className="px-4">
        <EllipsisHorizontalIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

const PostActions = () => {
  return (
    <div>
      <div className="mt-3 mb-1 flex gap-3">
        <button className="min-w-0">
          <div className="flex min-w-0 items-center gap-1 rounded-full transition-colors hover:text-sky-600">
            <ChatBubbleOvalLeftIcon className="h-5 w-5 shrink-0" />
            <span className="truncate text-xs">1,669</span>
          </div>
        </button>

        <button className="min-w-0">
          <div className="flex items-center gap-1 transition-colors hover:text-green-600">
            <ArrowPathRoundedSquareIcon className="h-5 w-5 shrink-0" />
            <span className="truncate text-xs">14.9k</span>
          </div>
        </button>

        <button className="min-w-0">
          <div className="flex items-center gap-1 transition-colors hover:text-red-600">
            <HeartIcon className="h-5 w-5 shrink-0" />
            <span className="truncate text-xs">359</span>
          </div>
        </button>

        <button className="min-w-0 transition-colors hover:text-blue-500">
          <ShareIcon className="h-5 w-5 shrink-0" />
        </button>
      </div>
    </div>
  );
};

const PostCard = () => {
  return (
    <div className="flex flex-col border-b-[1px]">
      <article className="flex flex-row">
        <div className="flex w-full min-w-0 flex-col">
          <div className="mt-2 mb-1 flex items-center gap-2">
            <div className="ml-14">
              <UserIcon className="h-3 w-3" />
            </div>
            <span className="break-words text-xs font-bold text-neutral-500">
              User One and User Two follow
            </span>
          </div>
          <div className="flex">
            {/* Uer Avatar */}
            <div className="flex flex-col items-center">
              <div className="flex flex-row gap-3 px-4 pb-1">
                <Link href="/profile/me">
                  <Avatar size="md" label="NS" />
                </Link>
              </div>
              <div className="h-full w-[1px] rounded-full bg-gray-200"></div>
            </div>

            <div className="flex w-full min-w-0 flex-col">
              {/* User info area */}
              <PostHeader
                name="Name Surname"
                time="8h"
                verified={true}
                username="username"
              />

              {/* Content */}
              <div>
                <span className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident rem recusandae ex qui non quae adipisci veritatis,
                  dolorum quas ipsa.
                </span>
              </div>

              <PostActions />
            </div>
          </div>

          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-1 transition-colors hover:bg-gray-100"
          >
            <div className="shrink-0 px-2">
              <Avatar label="NU" />
            </div>

            <div className="text-sky-600">
              <span className="break-words text-sm font-semibold">
                Show this thread
              </span>
            </div>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default PostCard;
