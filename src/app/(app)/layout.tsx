import { Suspense } from "react";
import { Container } from "./_component/container";
import Navbar from "./_component/navbar";
import { Sidebar, SidebarSkeleton } from "./_component/sidebar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex pt-20 h-full">
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default AppLayout;
