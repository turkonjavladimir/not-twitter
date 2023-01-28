import { useRouter } from "next/router";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";

import { Avatar } from "../Avatar";
import Searchbar from "../Searchbar";

import { useUI } from "../../ui/context";

const Navbar = () => {
  const router = useRouter();
  const { toggleSidebar } = useUI();

  const currentPath = `${router?.pathname
    .replace(new RegExp(/\//g), "")
    .charAt(0)
    .toUpperCase()}${router?.pathname.slice(2)}`;

  const currentPage =
    router?.pathname === "/" ? (
      <h2 className="font-bold">Home</h2>
    ) : (
      <h2 className="font-bold">
        {currentPath.split("/")[0] === "Profile"
          ? router?.query?.slug
          : currentPath.split("/")[0]}
      </h2>
    );

  return (
    <header className="sticky top-0 left-0 right-0 z-10 flex h-14 w-full justify-between border-b-[1px] bg-white/80 py-2.5 px-4 backdrop-blur-md dark:border-neutral-700 dark:bg-neutral-800/80">
      <nav className="flex w-full flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <button className="md:hidden" onClick={toggleSidebar}>
            <Avatar label="Name Surname" />
          </button>
          <span className="hidden md:block">
            {currentPath.toLowerCase() !== "search" && currentPage}
          </span>
        </div>

        {currentPath.toLowerCase() === "search" && <Searchbar />}
        {currentPath.toLowerCase() !== "search" && (
          <div className="md:hidden">Logo</div>
        )}

        <div className="flex items-center gap-3">
          <Cog8ToothIcon className="h-6 w-6 cursor-pointer" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
