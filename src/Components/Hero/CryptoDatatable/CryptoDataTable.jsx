import { useEffect, useState } from 'react';
import CryptoChart from './CryptoChart';
import { IconArrowUp, IconArrowDown } from '@tabler/icons-react';
import { prices, data } from './defaultData';
export default function CryptoDataTable() {
  const [cryptoData, setcryptoData] = useState([...data]);
  const [marketHistory, setmarketHistory] = useState(prices);

  const tableCryptos = [
    {
      coin: 'bitcoin',
      borderColor: 'rgba(247, 147, 26,1)',
      fillColor: 'rgba(247, 147, 26,0.3)',
    },
    {
      coin: 'ethereum',
      borderColor: 'rgba(247, 147, 26,1)',
      fillColor: 'rgba(247, 147, 26,0.3)',
    },
    {
      coin: 'tether',
      borderColor: 'rgba(247, 147, 26,1)',
      fillColor: 'rgba(247, 147, 26,0.3)',
    },
  ];

  useEffect(() => {
    const getCryptoData = async () => {
      const CryptoData = await fetchCryptoData();

      const marketHistoryArr = await Promise.all(
        tableCryptos.map(async (c) => {
          return await fetchMarketHistory(c.coin);
        })
      );
      setcryptoData(() => CryptoData);
      setmarketHistory(() => marketHistoryArr);
    };
    getCryptoData();
    return () => console.log('closed');
  }, []);

  // fetch cryptos basic data
  const fetchCryptoData = async () => {
    const coins = tableCryptos.map((c) => c.coin).join(',');
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coins}
      `
    );
    const data = await res.json();
    return data;
  };

  // fetch cryptos market history prices
  const fetchMarketHistory = async (coin) => {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=7`
    );
    const data = await res.json();
    return data.prices;
  };
  return (
    <div className="md:self-end md:mb-16 xl:self-start xl:mt-16">
      <div className="rounded-3xl overflow-hidden border border-brightGray shadow-md w-full self-end">
        <table className="text-left bg-white text-veryDarkGray">
          <thead>
            <tr className="border border-brightGray">
              <th className="px-5 py-3">Market</th>
              <th className="px-2 py-3">Price</th>
              <th className="px-3 py-3">Change 24h</th>
              <th className="px-5 py-3">Last 7 Days</th>
            </tr>
          </thead>
          <tbody>
            {cryptoData.map((c, index) => (
              <tr className="border border-brightGray">
                <td className="px-5 py-4 flex space-x-4 items-center">
                  <div className="w-10">
                    <img src={c.image} alt=""></img>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold">
                      {c.symbol.toLocaleUpperCase()}
                    </span>
                    <span>{c.name}</span>
                  </div>
                </td>
                <td className="px-2 py-4">{`$${c.current_price}`}</td>
                <td className="px-3 py-4">
                  {c.price_change_percentage_24h > 0 ? (
                    <span className="flex text-green-500">
                      {`+${c.price_change_percentage_24h}`}
                      <IconArrowUp />
                    </span>
                  ) : (
                    <span className="flex text-red-500">
                      {`${c.price_change_percentage_24h}`}
                      <IconArrowDown />
                    </span>
                  )}
                </td>
                <td className="px-2">
                  <div className="w-full h-16">
                    <CryptoChart
                      marketData={marketHistory[index]}
                      fillColor={tableCryptos[index].fillColor}
                      borderColor={tableCryptos[index].borderColor}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
