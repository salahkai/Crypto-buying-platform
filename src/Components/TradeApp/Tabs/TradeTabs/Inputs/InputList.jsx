import { IconChevronDown } from '@tabler/icons-react';

export default function InputList({ type }) {
  const dropDownItems = { currencies: ['USD', 'EUR'], cryptos: ['BTC', 'ETH'] };

  return (
    <div className="relative">
      <select className="appearance-none bg-brightGray rounded-lg px-4 py-3 pr-10 focus:ring-brighterViolet focus:ring-2 focus:bg-white focus:outline-none border hover:border-darkGray transition-color duration-300 focus:border-brightGray">
        {dropDownItems[type].map((i) => (
          <option className="rounded-lg px-4 py-3">{i}</option>
        ))}
      </select>
      <div className="absolute right-0 pointer-events-none flex items-center top-0 h-full w-8">
        <IconChevronDown />
      </div>
    </div>
  );
}
