import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { DesktopSidebar } from "../components/DesktopSidebar";
import { MobileSidebar } from "../components/MobileSidebar";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;

    const mobileRegex =
      /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;

    setIsMobile(mobileRegex.test(userAgent.toLowerCase()));
  }, []);

  return (
    <div className="flex w-full h-screen">
      {isMobile ? (
        <MobileSidebar open={isOpen} />
      ) : (
        <DesktopSidebar open={isOpen} />
      )}

      <div className="flex flex-1 flex-col justify-between">
        <div className="overflow-y-auto">
          <Header open={isOpen} setIsOpenAction={setIsOpen} />
          <main className="w-full">{children}</main>
        </div>
      </div>
    </div>
  );
}
