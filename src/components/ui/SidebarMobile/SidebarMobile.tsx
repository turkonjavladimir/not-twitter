import Link from "next/link";
import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  UserIcon,
  XMarkIcon,
  BookmarkIcon,
  QueueListIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

import { useUI } from "../context";

import Settings from "./Settings";
import AccountInfo from "./AccountInfo";

const sideNavLinks = [
  {
    icon: <UserIcon className="h-6 w-6" />,
    url: "/profile",
    label: "Profile",
  },
  {
    icon: <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />,
    url: "/topics",
    label: "Topics",
  },
  {
    icon: <BookmarkIcon className="h-6 w-6" />,
    url: "/bookmarks",
    label: "Bookmarks",
  },
  {
    icon: <QueueListIcon className="h-6 w-6" />,
    url: "/lists",
    label: "Lists",
  },
];

type NavItemProps = {
  label?: string;
  active?: boolean;
  icon?: React.ReactNode;
};

const NavItem = ({ label, icon, active }: NavItemProps) => {
  return (
    <span
      className={`${
        active ? "bg-gray-100 dark:bg-neutral-700" : ""
      } flex w-full items-center justify-start rounded-lg p-3 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-neutral-700 lg:justify-start`}
    >
      <div className="flex min-w-0 items-center gap-4">
        <div>{icon}</div>
        <span className="truncate text-lg">{label}</span>
      </div>
    </span>
  );
};

const SidebarMobile = ({ displaySidebar }: { displaySidebar: boolean }) => {
  const { closeSidebar } = useUI();
  const sidebarNavItems = sideNavLinks?.map((item) => (
    <Link href={"/"} key={item?.url}>
      <NavItem
        icon={item?.icon}
        label={item?.label}
        /*   active={active} */
      />
    </Link>
  ));

  return (
    <div>
      <Transition.Root show={displaySidebar} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 xl:hidden"
          onClose={closeSidebar}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-[280px] flex-1 flex-col bg-white pt-3 dark:bg-neutral-800">
                <div className="flex min-w-0 flex-shrink-0 items-center justify-between px-4">
                  <span className="truncate font-semibold">Account info</span>

                  <button
                    type="button"
                    className="flex items-center justify-center rounded-full p-2 outline-none"
                    onClick={closeSidebar}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>

                <div className="overflow-y-auto">
                  <AccountInfo
                    name="Name Surname"
                    username="username"
                    avatarLabel="Name Surname"
                    followers={"10230"}
                    following={"112949999"}
                  />

                  <div className="h-auto flex-1 p-1">
                    <nav className="space-y-1">{sidebarNavItems}</nav>
                  </div>

                  <Settings />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default SidebarMobile;
