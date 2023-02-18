import Link from "next/link";

import { Avatar } from "../../common/Avatar";

import Icon from "../../common/Icon";
import CardHeader from "./CardHeader";
import CardActions from "./CardActions";

const Card = () => {
  return (
    <div className="flex flex-col border-b-[1px] dark:border-neutral-700">
      <article className="flex flex-row">
        <div className="flex w-full min-w-0 flex-col">
          <div className="mt-2 mb-1 ml-8 flex items-center gap-2 px-4">
            <div className="">
              <Icon name="user" className="h-3 w-3" />
            </div>
            <span className="break-words text-xs font-bold text-neutral-500">
              User One and User Two follow
            </span>
          </div>

          <div className="flex px-4">
            {/* Uer Avatar */}
            <div className="mr-3 flex flex-col items-center">
              <div className="flex flex-row gap-3 pb-1">
                <Link href="/profile/me">
                  <Avatar size="md" label="NS" />
                </Link>
              </div>
              <div className="h-full w-[1px] rounded-full bg-gray-200 dark:bg-neutral-700"></div>
            </div>

            <div className="flex w-full min-w-0 flex-col">
              {/* User info area */}
              <CardHeader
                time="8h"
                verified={true}
                name="Name Surname"
                username="username"
              />

              {/* Content */}
              <div className="">
                <span className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident rem recusandae ex qui non quae adipisci veritatis,
                  dolorum quas ipsa.
                </span>
              </div>

              <CardActions />
            </div>
          </div>

          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-1 transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800"
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

export default Card;
