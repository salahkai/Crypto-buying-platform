import InputBlock from './Inputs/InputBlock';

export default function BuyTab({
  isActive,
  cryptoData,
  currenciesData,
  cryptoBill,
  onCurrencyAmountChange,
  onCryptoAmountChange,
  onCryptoSymbolChange,
  onCurrencySymbolChange,
}) {
  return (
    <form
      className={`flex flex-col gap-3 leading-tight transition-all duration-300 absolute w-full ${
        isActive ? 'translate-x-0' : 'translate-x-[130rem]'
      }`}
    >
      <InputBlock
        label={'I want to spend:'}
        list={currenciesData}
        inputs={cryptoBill.currency}
        onAmountChange={onCurrencyAmountChange}
        onSymbolChange={onCurrencySymbolChange}
      />
      <InputBlock
        label={'I want to buy:'}
        list={cryptoData}
        inputs={cryptoBill.crypto}
        onAmountChange={onCryptoAmountChange}
        onSymbolChange={onCryptoSymbolChange}
      />
    </form>
  );
}
