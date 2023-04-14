import TabLink from './TabLinks/TabLink';
import BuyTab from './TradeTabs/BuyTab';
import { useState } from 'react';

export default function Tabs() {
  const [activatedTab, setActivatedTab] = useState(true);
  const handleActivateTab = () => {
    setActivatedTab(!activatedTab);
  };

  return (
    <>
      <div className="-space-x-10 mb-6">
        <TabLink isActive={activatedTab} onActivateTab={handleActivateTab} />
        <TabLink isActive={!activatedTab} onActivateTab={handleActivateTab} />
      </div>
      <BuyTab />
      <div className="pt-4">
        <h2>Sumarry:</h2>
        <div className="border border:border-darkGray bg-brightGray rounded-lg px-4 py-3 flex-1 min-w-0 transition-color duration-300 leading-tight mt-3">
          clean
        </div>
      </div>
    </>
  );
}
