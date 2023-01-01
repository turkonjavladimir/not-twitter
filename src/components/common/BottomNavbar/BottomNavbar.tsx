import Link from "next/link";
import { useRouter } from "next/router";

import {
  BellOutlined,
  BellSolid,
  EnvelopeOutlined,
  EnvelopeSolid,
  HomeOutlined,
  HomeSolid,
  MagnifyingGlassOutlined,
} from "../../icons";

/**
 * @TODO: revisit icons
 */
const bottonNavLinks = [
  {
    icon: <HomeOutlined />,
    activeIcon: <HomeSolid />,
    href: "/",
  },
  {
    icon: <MagnifyingGlassOutlined className="h-6 w-6" />,
    activeIcon: <MagnifyingGlassOutlined className="h-6 w-6" />,
    href: "/search",
  },
  {
    icon: <BellOutlined />,
    activeIcon: <BellSolid />,
    href: "/notifications",
  },
  {
    icon: <EnvelopeOutlined />,
    activeIcon: <EnvelopeSolid />,
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
    <nav className="sticky bottom-0 flex w-full justify-between border-t-[1px] bg-white sm:hidden">
      {bottomItems}
    </nav>
  );
};

export default BottomNavbar;
