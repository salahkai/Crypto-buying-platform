import InputBlock from './Inputs/InputBlock';
export default function BuyTab() {
  const inputBlocks = [
    {
      label: 'I want to spend:',
      type: 'cryptos',
    },
    {
      label: 'I want to buy:',
      type: 'currencies',
    },
  ];
  return (
    <form className="flex flex-col gap-3 leading-tight">
      {inputBlocks.map((b) => (
        <InputBlock label={b.label} type={b.type} />
      ))}
    </form>
  );
}
