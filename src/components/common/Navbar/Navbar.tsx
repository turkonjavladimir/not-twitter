import { useRouter } from "next/router";

import { Avatar } from "../Avatar";
import Searchbar from "../Searchbar";

import { GearOutlined } from "../../icons";

const Navbar = () => {
  const router = useRouter();

  const currentPath = `${router?.pathname
    .replace(new RegExp(/\//g), "")
    .charAt(0)
    .toUpperCase()}${router?.pathname.slice(2)}`;

  const currentPage =
    router?.pathname === "/" ? (
      <h2 className="font-bold">Home</h2>
    ) : (
      <h2 className="font-bold">{currentPath}</h2>
    );

  console.log("current path", currentPath);

  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex w-full justify-between border-b-[1px] bg-white/80 py-2.5 px-4 backdrop-blur-md dark:bg-black/80">
      <nav className="flex w-full flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <span className="sm:hidden">
            <Avatar imageUrl="https://pbs.twimg.com/profile_images/1080208417426497538/suSAGU_u_400x400.jpg" />
          </span>
          {currentPath.toLowerCase() !== "search" && currentPage}
        </div>

        {currentPath.toLowerCase() === "search" && <Searchbar />}

        <div>
          <GearOutlined className="h-6 w-6 cursor-pointer" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
