import Link from "next/link";
import { useRouter } from "next/router";

import {
  HomeIcon,
  MagnifyingGlassIcon,
  BellIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

import {
  HomeIcon as HomeIconSolid,
  BellIcon as BellIconSolid,
  EnvelopeIcon as EnvelopeIconSolid,
} from "@heroicons/react/24/solid";

/**
 * @TODO: revisit icons
 */
const bottonNavLinks = [
  {
    icon: <HomeIcon className="h-6 w-6" />,
    activeIcon: <HomeIconSolid className="h-6 w-6" />,
    href: "/",
  },
  {
    icon: <MagnifyingGlassIcon className="h-6 w-6" />,
    activeIcon: <MagnifyingGlassIcon className="h-6 w-6" />,
    href: "/search",
  },
  {
    icon: <BellIcon className="h-6 w-6" />,
    activeIcon: <BellIconSolid className="h-6 w-6" />,
    href: "/notifications",
  },
  {
    icon: <EnvelopeIcon className="h-6 w-6" />,
    activeIcon: <EnvelopeIconSolid className="h-6 w-6" />,
    href: "/messages",
  },
];

const BottomNavbar = () => {
  const router = useRouter();

  const bottomItems = bottonNavLinks?.map((item) => (
    <Link
      key={item?.href}
      className="stroke flex w-full items-center justify-center py-3 text-sm"
      href={item?.href}
    >
      {router.pathname === item?.href ? item?.activeIcon : item?.icon}
    </Link>
  ));

  return (
    <nav className="fixed bottom-0 flex w-full justify-between border-t-[1px] bg-white lg:hidden">
      {bottomItems}
    </nav>
  );
};

export default BottomNavbar;
