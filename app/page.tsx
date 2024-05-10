"use client";
import { useState, useEffect } from 'react';
import { Chat } from '@/components/chat'

export const runtime = 'edge'
import { useOnStartApp } from "../lib/utils/onStart";
import { usePioneer } from "@coinmasters/pioneer-react"

import {
  Pioneer,
  Basic,
  Portfolio,
  Transfer,
  Assets,
  Asset,
  Amount,
  Quote,
  Quotes,
  Swap,
  Track,
  SignTransaction
} from '@coinmasters/pioneer-lib';

export default function Page() {
  const onStartApp = useOnStartApp();
  const { state } = usePioneer();
  const { api, app, assets, context } = state;
  const [intent, setIntent] = useState('basic');
  const [tabIndex, setTabIndex] = useState(1);
  const [selectedAsset, setSelectedAsset] = useState({ });

  useEffect(() => {
    onStartApp();
  }, []);

  useEffect(() => {
    if(app && app.assetContext) setSelectedAsset(app.assetContext)
  }, [app, app?.assetContext]);

  const onClose = () => {
    console.log("onClose")
  };

  const onSelect = (asset: any) => {
    console.log("onSelect: ", asset)
  }



  return <div>
    <Chat />
  </div>
}
