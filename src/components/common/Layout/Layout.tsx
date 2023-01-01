import { ReactNode } from "react";

import { BottomNavbar, Navabr } from "..";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="flex flex-row">
      <aside className="sticky top-0 hidden h-screen sm:block">Aside</aside>
      <div className="flex flex-col justify-between">
        <Navabr />
        <main>{children}</main>
        <BottomNavbar />
      </div>
    </div>
  );
};

export default Layout;
