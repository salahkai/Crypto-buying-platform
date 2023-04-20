import TradeApp from './TradeApp/TradeApp';
import CryptoDataTable from './CryptoDatatable/CryptoDataTable';
import { useEffect, useState } from 'react';
import { data } from './CryptoDatatable/defaultData';

export default function Trade() {
  const tableItemsNumber = 5;
  const [cryptoData, setcryptoData] = useState([
    ...data.slice(0, tableItemsNumber),
  ]);
  useEffect(() => {
    const getCryptoData = async () => {
      const data = await fetchCryptoData();
      setcryptoData(() => data.slice(0, tableItemsNumber));
    };
    getCryptoData();
    return () => null;
    // console.log('closed');
  }, []);

  // fetch cryptos basic data
  const fetchCryptoData = async () => {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`
    );
    const data = await res.json();
    return data;
  };

  return (
    <section className="bg-wave-picture bg-no-repeat bg-bottom w-full flex justify-around flex-wrap space-y-8 ">
      <div className="container outline outline-[15px] outline-violet/20 max-w-md bg-white md:rounded-lg h-full text-maxDarkGray w-sm p-6 mt-auto overflow-hidden">
        <TradeApp cryptoData={data} />

        <button className="py-3 mt-14 w-full rounded-full bg-brighterViolet text-white">
          Continue
        </button>
        <p className="mt-4 text-sm text-center	text-Gray">
          By continuing you agree to our
          <a className="text-brighterViolet" href="#s">
            &nbsp;Terms of Service
          </a>
        </p>
      </div>
      <h2 className="md:hidden text-3xl font-semibold">Crypto Rates: </h2>
      <CryptoDataTable data={cryptoData} />
    </section>
  );
}
