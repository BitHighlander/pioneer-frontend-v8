"use client";
import { useEffect } from 'react';
import { Chat } from '@/components/chat'
import { WalletOption, prefurredChainsByWallet } from '@coinmasters/types';
import { useOnStartApp } from "../lib/utils/onStart";
import { usePioneer } from "@coinmasters/pioneer-react"

export default function Page() {
  const { state } = usePioneer();
  const { app, assets } = state;
  const onStartApp = useOnStartApp();

  useEffect(() => {
    onStartApp();
  }, []);

  let onStart = async function(){
    try{
      if(app && app.pairWallet && !app.swapKit){
        let walletType = WalletOption.KEEPKEY;
        const cachedBlockchains = JSON.parse(localStorage.getItem(`cache:blockchains:${walletType}`) || '[]');
        const blockchains = cachedBlockchains.length > 0 ? cachedBlockchains : (prefurredChainsByWallet[walletType] || [])
            .map((chain: any) => ChainToNetworkId[getChainEnumValue(chain)])
            .filter((networkId:any) => networkId !== undefined);

        console.log('onStart blockchains', blockchains);
        const pairObject = { type: WalletOption.KEEPKEY, blockchains };
        const resultInit = await app.pairWallet(pairObject);
        console.log("resultInit: ", resultInit);
      } else {
        console.log('App not loaded yet... can not connect');
      }
    }catch(e){
      console.error("onStart error", e);
    }
  }

  useEffect(() => {
    onStart();
  }, [app, app?.assetContext]);

  return <div>
    <Chat />
  </div>
}
