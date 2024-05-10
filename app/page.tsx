"use client";
import { useEffect } from 'react';
import { Chat } from '@/components/chat'

import { useOnStartApp } from "../lib/utils/onStart";

export default function Page() {
  const onStartApp = useOnStartApp();

  useEffect(() => {
    onStartApp();
  }, []);


  return <div>
    <Chat />
  </div>
}
