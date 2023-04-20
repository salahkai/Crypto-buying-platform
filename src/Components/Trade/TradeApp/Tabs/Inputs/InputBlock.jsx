import { IconChevronDown } from '@tabler/icons-react';

export default function InputBlock({
  label,
  list,
  inputs,
  onAmountChange,
  onSymbolChange,
}) {
  return (
    <div className="flex flex-col gap-3 ">
      <label for="fname">{label}</label>
      <div className="flex gap-2">
        <input
          value={inputs.amount && inputs.amount.toString().slice(0, 7)}
          onChange={onAmountChange}
          className="border hover:border-darkGray bg-brightGray rounded-lg px-4 py-3 focus:outline-none focus:ring-brighterViolet focus:ring-2 focus:bg-white focus:border-brightGray flex-1 min-w-0 transition-color duration-300"
          type="number"
        ></input>
        <div className="relative">
          <select
            onChange={onSymbolChange}
            value={inputs.symbol}
            className="appearance-none bg-brightGray rounded-lg px-4 py-3 pr-10 focus:ring-brighterViolet focus:ring-2 focus:bg-white focus:outline-none border hover:border-darkGray transition-color duration-300 focus:border-brightGray w-28"
          >
            {list.map((c) => (
              <option className="rounded-lg px-4 py-3" key={c.id}>
                {c.symbol.toUpperCase()}
              </option>
            ))}
          </select>
          <div className="absolute right-0 pointer-events-none flex items-center top-0 h-full w-8">
            <IconChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
}
