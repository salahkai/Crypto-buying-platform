import TabLink from './TabLink/TabLink';
import BuyTab from './Tabs/BuyTab';
import SellTab from './Tabs/SellTab';
import { useState, useReducer } from 'react';
import { cryptoRates, currencyRates } from '../CryptoDatatable/defaultData';

export default function TradeApp({ cryptoData }) {
  const initialCryptoBill = {
    currency: { symbol: 'USD', amount: '' },
    crypto: { symbol: 'BTC', amount: '' },
  };
  const [isBuyTab, setBuyTab] = useState(true);

  const currencies = [{ symbol: 'USD' }, { symbol: 'EUR' }];

  const [cryptoBill, dispatch] = useReducer(
    cryptoBillReducer,
    initialCryptoBill
  );

  const handleCurrencySymbolChange = (event) => {
    dispatch({
      type: 'currencySymbol',
      symbol: event.target.value,
    });
  };
  const handleCryptoSymbolChange = (event) => {
    dispatch({
      type: 'cryptoSymbol',
      symbol: event.target.value,
    });
  };
  const handleCurrencyAmountChange = (event) => {
    dispatch({
      type: 'currencyAmount',
      amount: event.target.value,
    });
  };

  const handleCryptoAmountChange = (event) => {
    dispatch({
      type: 'cryptoAmount',
      amount: event.target.value,
    });
  };
  function cryptoBillReducer(cryptoBill, action) {
    const btcPrice =
      cryptoData[0].current_price * currencyRates[cryptoBill.currency.symbol];
    const updateBtcPrice =
      cryptoData[0].current_price * currencyRates[action.symbol];

    switch (action.type) {
      case 'currencyAmount': {
        return {
          currency: {
            symbol: cryptoBill.currency.symbol,
            amount: action.amount,
          },
          crypto: {
            symbol: cryptoBill.crypto.symbol,
            amount:
              (action.amount / btcPrice) *
              cryptoRates[cryptoBill.crypto.symbol.toLowerCase()].value,
          },
        };
      }
      case 'cryptoAmount': {
        return {
          currency: {
            symbol: cryptoBill.currency.symbol,
            amount:
              (action.amount /
                cryptoRates[cryptoBill.crypto.symbol.toLowerCase()].value) *
              btcPrice,
          },
          crypto: {
            symbol: cryptoBill.crypto.symbol,
            amount: action.amount,
          },
        };
      }
      case 'currencySymbol': {
        return {
          currency: {
            symbol: action.symbol,
            amount: cryptoBill.currency.amount,
          },
          crypto: {
            symbol: cryptoBill.crypto.symbol,
            amount:
              (cryptoBill.currency.amount / updateBtcPrice) *
              cryptoRates[cryptoBill.crypto.symbol.toLowerCase()].value,
          },
        };
      }
      case 'cryptoSymbol': {
        return {
          currency: {
            symbol: cryptoBill.currency.symbol,
            amount:
              (cryptoBill.crypto.amount /
                cryptoRates[action.symbol.toLowerCase()].value) *
              btcPrice,
          },
          crypto: {
            symbol: action.symbol,
            amount: cryptoBill.crypto.amount,
          },
        };
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }
  const handleTabToggle = () => {
    setBuyTab(!isBuyTab);
  };

  return (
    <div className="relative">
      <div className="-space-x-6 sm:-space-x-10 mb-6 flex justify-center  ">
        <TabLink
          isActive={isBuyTab}
          onTabToggle={handleTabToggle}
          label="Buy Crypto"
        />
        <TabLink
          isActive={!isBuyTab}
          onTabToggle={handleTabToggle}
          label="Sell Crypto"
        />
      </div>

      <div>
        <BuyTab
          isActive={isBuyTab}
          cryptoData={cryptoData}
          currenciesData={currencies}
          cryptoBill={cryptoBill}
          onCurrencyAmountChange={handleCurrencyAmountChange}
          onCryptoAmountChange={handleCryptoAmountChange}
          onCryptoSymbolChange={handleCryptoSymbolChange}
          onCurrencySymbolChange={handleCurrencySymbolChange}
        />
        <SellTab
          isActive={!isBuyTab}
          cryptoData={cryptoData}
          currenciesData={currencies}
          cryptoBill={cryptoBill}
          onCurrencyAmountChange={handleCurrencyAmountChange}
          onCryptoAmountChange={handleCryptoAmountChange}
          onCryptoSymbolChange={handleCryptoSymbolChange}
          onCurrencySymbolChange={handleCurrencySymbolChange}
        />
      </div>
      <div className="pt-6">
        <h2>Sumarry:</h2>
        <div className="border border:border-darkGray bg-brightGray rounded-lg px-4 py-3 flex-1 min-w-0 transition-color duration-300 leading-tight mt-3">
          {cryptoBill.crypto.amount === null ||
          cryptoBill.currency.amount === null ? (
            <div>&nbsp;</div>
          ) : isBuyTab === true ? (
            <div>
              You get{' '}
              {
                <span className="font-medium">
                  {cryptoBill.crypto.amount.toString().slice(0, 6)}{' '}
                  {cryptoBill.crypto.symbol}
                </span>
              }{' '}
              for{' '}
              <span className="font-medium">
                {cryptoBill.currency.amount} {cryptoBill.currency.symbol}
              </span>
            </div>
          ) : (
            <div>
              You get{' '}
              {
                <span className="font-medium">
                  {cryptoBill.currency.amount} {cryptoBill.currency.symbol}
                </span>
              }{' '}
              for{' '}
              <span className="font-medium">
                {cryptoBill.crypto.amount.toString().slice(0, 6)}{' '}
                {cryptoBill.crypto.symbol}{' '}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
