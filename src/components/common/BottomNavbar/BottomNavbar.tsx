import Link from "next/link";

import {
  HomeIcon,
  MagnifyingGlassIcon,
  BellIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

/**
 * @TODO: revisit icons | add active state
 */
const bottonNavLinks = [
  {
    icon: <HomeIcon className="h-6 w-6" />,
    url: "/",
  },
  {
    icon: <MagnifyingGlassIcon className="h-6 w-6" />,
    url: "/search",
  },
  {
    icon: <BellIcon className="h-6 w-6" />,
    url: "/notifications",
  },
  {
    icon: <EnvelopeIcon className="h-6 w-6" />,
    url: "/messages",
  },
];

const BottomNavbar = () => {
  const router = useRouter();
  const navItems = bottonNavLinks?.map((item) => (
    <Link
      key={item?.url}
      className={`flex w-full items-center justify-center rounded-lg py-1 text-sm`}
      href={item?.url}
    >
      <span
        className={`rounded-full p-2 ${
          router?.asPath === item?.url ? "bg-gray-100" : ""
        }`}
      >
        {item?.icon}
      </span>
    </Link>
  ));

  return (
    <div className="fixed bottom-0 flex w-full justify-center border-t-[1px] bg-white">
      <nav className="flex w-full max-w-xl justify-between md:hidden">
        {navItems}
      </nav>
    </div>
  );
};

export default BottomNavbar;
