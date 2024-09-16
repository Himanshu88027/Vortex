import { getSelfByUsername } from "@/lib/auth-service";
import { redirect } from "next/navigation";
import Navbar from "./_component/navbar";
import Sidebar from "./_component/sidebar";
import { Container } from "./_component/component";

interface CreatorLayoutProps {
  params: { username: string };
  children: React.ReactNode;
}

const CreatorLayout = async ({ params, children }: CreatorLayoutProps) => {
  const self = await getSelfByUsername(params.username);

  if (!self) {
    redirect("/");
  }
  return (
    <>
      <Navbar />
      <div className="h-full flex pt-20">
        <Sidebar />
        <Container>
          {children}
        </Container>
      </div>
    </>
  );
};

export default CreatorLayout;
