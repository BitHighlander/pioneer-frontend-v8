'use client'
import { Box, Avatar, Text, Button, VStack, Heading } from '@chakra-ui/react';
import { useEffect, useState, useRef } from 'react'
import { ChatPanel } from './chat-panel'
import { ChatMessages } from './chat-messages'
import {ChakraProvider, useColorMode} from "@chakra-ui/react";
import { usePioneer } from "@coinmasters/pioneer-react"
import { theme } from '../styles/theme';
import { Landing } from './pioneer/landing';

export function Chat() {
    const { state } = usePioneer();
    const [isPioneer, setIsPioneer] = useState(false);

  return (
      <div className="px-8 md:px-12 pt-6 md:pt-8 pb-14 md:pb-24 max-w-3xl mx-auto flex flex-col space-y-3 md:space-y-4">
          {isPioneer ? (
              <div>
                  <ChatMessages />
                  <ChatPanel />
              </div>
          ) : (
              <Box display="flex" alignItems="center" justifyContent="center" h="100vh">
                  <ChakraProvider theme={theme}><Landing /></ChakraProvider>
              </Box>
          )}
      </div>
  )
}
