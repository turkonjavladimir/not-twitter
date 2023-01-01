import { ReactNode } from "react";

import { BottomNavbar, Navabr } from "../common";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Navabr />
      <main className="mt-14">{children}</main>
      <BottomNavbar />
    </div>
  );
};

export default Layout;
