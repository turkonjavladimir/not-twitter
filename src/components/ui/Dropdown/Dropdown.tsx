import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

export const MenuItem = ({
  text,
  icon,
}: {
  text: string;

  icon: React.ReactNode;
}) => {
  return (
    <Menu.Item>
      <button className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-700">
        {icon}
        {text}
      </button>
    </Menu.Item>
  );
};

const Dropdown = ({ children }: { children: React.ReactNode }) => {
  if (!children) {
    return null;
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-neutral-600">
          <span className="sr-only">Open options</span>
          <EllipsisHorizontalIcon className="h-5 w-5" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 max-h-52 w-56 origin-top-right divide-y divide-gray-100 overflow-y-scroll rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-neutral-700 dark:bg-neutral-800">
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
