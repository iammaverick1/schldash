import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/ui/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="hidden md:block h-[100vh] w-[200px]">
          <Sidebar />
        </div>
        <div className="p-5 w-full md:max-w-[1140px]"> {children}</div>
      </div>
    </>
  );
};

export default MainLayout;
