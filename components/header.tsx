'use client'

import { usePioneer } from "@coinmasters/pioneer-react"
import React from 'react'
import { ModeToggle } from './mode-toggle'
import { IconLogo } from './ui/icons'
import { cn } from '@/lib/utils'

export const Header: React.FC = () => {
  const { state } = usePioneer();

  return (
        <header className="fixed w-full p-0 md:p-2 flex justify-between items-center z-10 backdrop-blur md:backdrop-blur-none bg-background/80 md:bg-transparent">
          <div className="p-2">
            <a href="/">
              <IconLogo className={cn('w-5 h-5')} />
              <span className="sr-only">Pioneer</span>
            </a>
          </div>
          <ModeToggle />
        </header>
  )
}

export default Header
