import { ReactNode } from "react";

import { BottomNavbar, Navabr, Sidebar } from "..";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-full">
        <Navabr />
        <div className="flex w-full flex-col justify-between">
          <main className="mb-12 lg:mb-0">{children}</main>
          <BottomNavbar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
