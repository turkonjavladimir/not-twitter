import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import {
  BellIcon,
  BookmarkIcon,
  CalendarIcon,
  ChartBarIcon,
  EllipsisHorizontalCircleIcon,
  EnvelopeIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
  QueueListIcon,
  UserIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Avatar } from "../../common/Avatar";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import Toggle from "../Toggle";
import { ThemeSwitcher, ManualThemeSwitcher } from "../ThemeSwitcher";
import ThemeIcon from "../ThemeSwitcher/ThemeIcon";
import { useUI } from "../context";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const sideNavLinks = [
  {
    icon: <HomeIcon className="h-6 w-6" />,
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
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
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
      <div className="flex items-center gap-4">
        <div>{icon}</div>
        <div>
          <span className="text-lg">{label}</span>
        </div>
      </div>
    </span>
  );
};

const SidebarMobile = ({ displaySidebar }: { displaySidebar: boolean }) => {
  const { closeSidebar } = useUI();
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
                <div className="flex flex-shrink-0 items-center justify-between px-4">
                  <div>
                    <span className="font-semibold">Account info</span>
                  </div>
                  <div className="">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full"
                      onClick={closeSidebar}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <div className="overflow-y-auto">
                  <div className="p-4">
                    <div className="flex w-full items-center justify-between">
                      <div>
                        <Avatar size="md" label="Name Surname" />
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
                        <span className="truncate font-semibold">
                          Name Surname
                        </span>
                        <div className="shrink-0">
                          <LockClosedIcon className="h-4 w-4" />
                        </div>
                      </Link>

                      <div className="flex min-w-0 leading-none">
                        <span className="truncate text-sm text-neutral-500">
                          @username
                        </span>
                      </div>

                      <div className="mt-3 flex gap-5">
                        <div>
                          <Link
                            href="/"
                            className="flex gap-1 text-sm hover:underline"
                          >
                            <span className="font-semibold">31</span>
                            <span className="text-neutral-500">Following</span>
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="/"
                            className="flex gap-1 text-sm hover:underline"
                          >
                            <span className="font-semibold">0</span>
                            <span className="text-neutral-500">Followers</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-auto flex-1 p-1">
                    <nav className="space-y-1">
                      {sideNavLinks?.map((item) => (
                        /*         <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-indigo-800 text-white"
                            : "text-indigo-100 hover:bg-indigo-600",
                          "group flex items-center rounded-md px-2 py-2 text-base font-medium"
                        )}
                      >
                        <item.icon
                          className="mr-4 h-6 w-6 flex-shrink-0 text-indigo-300"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a> */

                        <Link href={"/"} key={item?.url}>
                          <NavItem
                            icon={item?.icon}
                            label={item?.label}
                            /*   active={active} */
                          />
                        </Link>
                      ))}
                    </nav>
                  </div>

                  <div className="border-t border-neutral-200 p-4 dark:border-neutral-700">
                    <div className="mb-3">
                      <span className="font-semibold">Settings</span>
                    </div>
                    <div className="flex h-auto max-h-64 flex-shrink-0 flex-col gap-1 overflow-y-auto">
                      <div className="flex items-center justify-between">
                        <span>Theme</span>
                        <div>
                          <ManualThemeSwitcher />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Use system theme</span>
                        <div>
                          <ThemeSwitcher />
                        </div>
                      </div>
                    </div>
                  </div>
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
