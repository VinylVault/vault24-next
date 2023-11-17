"use client"

import type { Metadata } from 'next'
import { useState } from 'react'
import { Inter } from 'next/font/google'
import { genres } from "./data/genresStyles"
import { PageHeader } from '@/components/PageHeader'
import { GenrePills } from '@/components/GenrePills'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'The Vinyl Vault Show',
//   description: 'The Vinyl Vault Show website. Search our library and make requests. Read our blog ... And more.',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [selectedGenre, setSelectedGenre] = useState(genres[0])
  return (
    <html lang="en">
      <body className="{inter.className} bg-vault-background">
        <div className="max-h-screen flex flex-col" >
          <PageHeader />
          <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
            SideBar
            <div className="overflow-x-hidden mx-8 mb-4 my-4">
              <div className="sticky top-0 mb-4 z-10">
                <GenrePills 
                  genres={genres} 
                  selectedGenre={selectedGenre} 
                  onSelect={setSelectedGenre} 
                />
              </div>
              <div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
