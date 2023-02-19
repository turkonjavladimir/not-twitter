import type { ReactNode } from "react";

import { useUI } from "../../ui/context";
import { SidebarMobile } from "../../ui";

import { BottomNavbar, Navabr, Sidebar } from "..";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const { displaySidebar } = useUI();

  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="flex w-full max-w-7xl md:justify-center">
          <Sidebar />

          <div className="w-full border-r-[1px] dark:border-neutral-700 md:w-[600px]">
            <Navabr />
            <div className="flex w-full flex-col justify-between">
              <main className="mb-12 lg:mb-0">{children}</main>

              <BottomNavbar />
            </div>
          </div>
        </div>
      </div>

      <SidebarMobile displaySidebar={displaySidebar} />
    </>
  );
};

export default Layout;
