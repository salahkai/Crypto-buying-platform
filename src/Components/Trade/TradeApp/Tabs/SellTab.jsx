import InputBlock from './Inputs/InputBlock';
export default function SellTab({
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
      className={`flex flex-col gap-3 leading-tight transition-all duration-300 -translate-x-96
      ${isActive ? 'translate-x-0' : '-translate-x-[130rem]'}`}
    >
      <InputBlock
        label={'I want to Sell:'}
        list={cryptoData}
        inputs={cryptoBill.crypto}
        onAmountChange={onCryptoAmountChange}
        onSymbolChange={onCryptoSymbolChange}
      />
      <InputBlock
        label={'I want to Get:'}
        list={currenciesData}
        inputs={cryptoBill.currency}
        onAmountChange={onCurrencyAmountChange}
        onCurrencySymbolChange={onCurrencySymbolChange}
      />
    </form>
  );
}
