'use client';

// Ensure this is a client component
import { useEffect, useState } from 'react';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

import ContextProvider from '@/components/context-provider';
import SideNav from '@/components/side-nav';

import Header from './header';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set mounted state to true on client
  }, []);

  const isLoginPage = pathname === '/login'; // Check if on the login page

  return (
    <ContextProvider>
      {isMounted ? (
        <>
          {!isLoginPage && <Header />}
          <div className="flex">
            {!isLoginPage && <SideNav />}
            <div className="w-full overflow-x-auto">
              <div className="sm:h-[calc(99vh-60px)] overflow-auto ">
                <div className="w-full flex justify-center mx-auto overflow-auto h-[calc(100vh - 120px)] overflow-y-auto relative">
                  <div className="w-full md:max-w-6xl">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
<div className="flex flex-col justify-center items-center h-screen ">
  <div className="loader"></div>
</div>

      )}
    </ContextProvider>
  );
}
