'use-client';
import React from 'react'
import Link from 'next/link'
import { SiDiscord, SiGithub, SiTwitter } from 'react-icons/si'
import { Button } from './ui/button'

import {
  Pioneer,
} from '@coinmasters/pioneer-lib';

const Footer: React.FC = () => {
  return (
    <footer className="w-fit p-1 md:p-2 fixed bottom-0 right-0">
      <div className="flex justify-end">
        {/*<Button*/}
        {/*  variant={'ghost'}*/}
        {/*  size={'icon'}*/}
        {/*  className="text-muted-foreground/50"*/}
        {/*>*/}
        {/*  <Link href="https://discord.gg/zRxaseCuGq" target="_blank">*/}
        {/*    <SiDiscord size={18} />*/}
        {/*  </Link>*/}
        {/*</Button>*/}
        {/*<Button*/}
        {/*  variant={'ghost'}*/}
        {/*  size={'icon'}*/}
        {/*  className="text-muted-foreground/50"*/}
        {/*>*/}
        {/*  <Link href="https://twitter.com/miiura" target="_blank">*/}
        {/*    <SiTwitter size={18} />*/}
        {/*  </Link>*/}
        {/*</Button>*/}
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link href="https://github.com/coinmastersguild/Pioneer-sdk" target="_blank">
            <SiGithub size={18} />
          </Link>
        </Button>
      </div>
      {/*<Pioneer></Pioneer>*/}
    </footer>
  )
}

export default Footer
