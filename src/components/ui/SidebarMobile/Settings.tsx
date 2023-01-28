import Link from "next/link";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

import { ManualThemeToggle, SystemThemeToggle } from "../";

const Settings = () => {
  return (
    <div className="border-t border-neutral-200 p-1 dark:border-neutral-700">
      <div className="my-2 px-3">
        <span className="font-semibold">Settings</span>
      </div>
      <div className="ml-1 flex h-auto max-h-64 flex-shrink-0 flex-col overflow-y-auto">
        <ManualThemeToggle hasLabel />
        <SystemThemeToggle />

        <Link
          href="/logout"
          className="flex items-center justify-between px-2 py-2"
        >
          <div>
            <span className="">Logout</span>
          </div>
          <div>
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Settings;
