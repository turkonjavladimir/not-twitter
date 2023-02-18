import cn from "classnames";
import Link from "next/link";
import { useMemo } from "react";
import { useRouter } from "next/router";

import Icon from "../Icon";
import { IconName } from "../Icon/Icon";

interface NavItemProps {
  iconName: IconName;
  url: string;
  label: string;
}

const bottonNavLinks: NavItemProps[] = [
  { iconName: "home", url: "/", label: "Home" },
  { iconName: "magnifyingGlass", url: "/search", label: "Search" },
  { iconName: "bell", url: "/notifications", label: "Notifications" },
  { iconName: "envelope", url: "/messages", label: "Messages" },
];

const BottomNavbar = () => {
  const router = useRouter();
  const { pathname } = router;
  const navItems = useMemo(
    () =>
      bottonNavLinks.map(({ iconName, url, label }: NavItemProps) => (
        <Link
          key={url}
          className={`flex w-full items-center justify-center rounded-lg py-1 text-sm`}
          href={url}
          aria-label={label}
          passHref
        >
          <Icon
            name={iconName}
            variant={`${pathname === url ? "solid" : "outline"}`}
            className={cn("m-2 h-6 w-6", {
              "text-neutral-600 dark:text-neutral-100": pathname === url,
            })}
          />
        </Link>
      )),
    [pathname]
  );

  return (
    <div className="fixed bottom-0 flex w-full justify-center border-t-[1px] bg-white dark:border-neutral-700 dark:bg-neutral-800">
      <nav className="flex w-full max-w-xl justify-between md:hidden">
        {navItems}
      </nav>
    </div>
  );
};

export default BottomNavbar;
