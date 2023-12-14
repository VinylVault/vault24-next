'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import { genres } from '@/data/genresStyles';
import { PageHeader } from '@/components/PageHeader';
import { PageFooter } from '@/components/PageFooter';
import { GenrePills } from '@/components/GenrePills';
import { Sidebar } from '@/components/Sidebar';

import './globals.css';
import { SidebarProvider } from '@/contexts/SidebarContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedGenre, setSelectedGenre] = useState(genres);
  return (
    <html lang="en">
      <body className="bg-vault-background">
        <SidebarProvider>
          <div className="flex flex-col">
            <PageHeader />
            <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
              <Sidebar />
              <div className="overflow-x-hidden ml-8 mr-0.5pb-4 my-4 scrollbar-hidden">
                {/* <div className="sticky top-0 mb-4 z-10">
                  <GenrePills 
                    genres={genres} 
                    selectedGenre={selectedGenre} 
                    onSelect={setSelectedGenre} 
                  />
                </div> */}
                <div>{children}</div>
              </div>
            </div>
            <PageFooter />
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
