'use client'

import { Pioneer } from '@coinmasters/pioneer-lib';
import { usePioneer } from "@coinmasters/pioneer-react"
import { ChakraProvider, useColorMode } from '@chakra-ui/react';
import React from 'react'
// import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import { IconLogo } from './ui/icons'
import { cn } from '@/lib/utils'
import { theme } from '../styles/theme';

export const Header: React.FC = () => {
  const { state } = usePioneer();

  return (
      <ChakraProvider theme={theme}>
        <header className="fixed w-full p-0 md:p-2 flex justify-between items-center z-10 backdrop-blur md:backdrop-blur-none bg-background/80 md:bg-transparent">
          <div className="p-2">
            <a href="/">
              <IconLogo className={cn('w-5 h-5')} />
              <span className="sr-only">Pioneer</span>
            </a>
          </div>
            <Pioneer usePioneer={usePioneer}/>
          <ModeToggle />
        </header>
      </ChakraProvider>
  )
}

export default Header
