import Link from "next/link";
import { useRouter } from "next/router";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  BellIcon,
  EnvelopeIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
  PencilSquareIcon,
  BookmarkIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

import { Avatar } from "../Avatar";
import generateSlug from "../../../lib/generate-slug";

const bottonNavLinks = [
  {
    icon: <HomeIcon className="h-6 w-6" />,
    url: "/",
    label: "Home",
  },
  {
    icon: <MagnifyingGlassIcon className="h-6 w-6" />,
    url: "/search",
    label: "Search",
  },
  {
    icon: <BellIcon className="h-6 w-6" />,
    url: "/notifications",
    label: "Notifications",
  },
  {
    icon: <EnvelopeIcon className="h-6 w-6" />,
    url: "/messages",
    label: "Messages",
  },
  {
    icon: <BookmarkIcon className="h-6 w-6" />,
    url: "/bookmarks",
    label: "Bookmarks",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    url: "/profile",
    label: "Profile",
  },
];

type NavItemProps = {
  label?: string;
  active?: boolean;
  icon?: React.ReactNode;
};

export const NavItem = ({ label, icon, active }: NavItemProps) => {
  return (
    <span
      className={`${
        active ? "bg-gray-100 font-semibold" : ""
      } flex w-full items-center justify-center rounded-full p-3 text-sm transition-colors hover:bg-gray-100 lg:justify-start`}
    >
      <div className="flex items-center gap-4">
        <div>{icon}</div>
        <div className="hidden xl:block">
          <span className="text-sm xl:text-lg">{label}</span>
        </div>
      </div>
    </span>
  );
};

type UserAvatarProps = {
  label: string;
  username: string;
  imageUrl?: string;
};

const UserAvatar = ({ imageUrl, username, label }: UserAvatarProps) => {
  /* @TODO: Make a functional dropdown/popup */
  return (
    <div className="mt-1 mb-4 flex cursor-pointer items-center gap-3 rounded-full p-2 transition-colors hover:bg-gray-100">
      <button>
        <Avatar size="lg" label={label} imageUrl={imageUrl} />
      </button>

      <div className="hidden max-w-[125px] flex-col xl:flex">
        <span className="block truncate text-sm font-semibold">{label}</span>
        <span className="block truncate text-sm">@{username}</span>
      </div>

      <div className="hidden xl:block">
        <EllipsisHorizontalIcon className="h-5 w-5" />
      </div>
    </div>
  );
};

const Sidebar = () => {
  const router = useRouter();
  const CURRENT_USER = "test-user"; // @TODO: Remove once user sessions is implemented

  const navItems = bottonNavLinks?.map((item) => {
    const url = generateSlug(item?.url, CURRENT_USER);
    const active =
      item?.url === "/profile"
        ? router?.asPath === `/profile/${router?.query?.slug}`
        : router?.asPath === item?.url;

    return (
      <Link href={url} key={item?.url}>
        <NavItem icon={item?.icon} label={item?.label} active={active} />
      </Link>
    );
  });

  return (
    <aside className="sticky top-0 hidden h-screen items-center border-r-[1px] md:flex md:flex-col">
      <div className="flex h-[650px] w-full flex-col items-center justify-between overflow-y-auto px-5 md:h-full">
        <div className="flex flex-col items-center xl:items-start">
          <div>
            <Link
              className="text-md flex w-full items-center justify-center px-3 py-4"
              href="/"
            >
              Logo
            </Link>
          </div>

          <nav className="flex flex-col justify-between gap-3">
            {navItems}

            {/* @TODO: Add dropdown menu */}
            <button onClick={() => console.log("Setttings menu")}>
              <NavItem
                icon={<EllipsisHorizontalCircleIcon className="h-6 w-6" />}
                label="More"
              />
            </button>
          </nav>

          {/* @TODO: Redirect to a post page */}
          <button className="mt-4 mb-4 flex flex-row gap-4 rounded-full bg-blue-500 p-3 font-bold text-white transition-colors hover:bg-blue-600 xl:w-full xl:justify-center">
            <span className="xl:hidden">
              <PencilSquareIcon className="h-6 w-6" />
            </span>
            <span className="hidden text-center xl:block">Post</span>
          </button>
        </div>
        <UserAvatar label="Name Surname" username="username" />
      </div>
    </aside>
  );
};

export default Sidebar;
