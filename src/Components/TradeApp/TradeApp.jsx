import Tabs from './Tabs/Tabs';
export default function TradeApp() {
  return (
    <div className="bg-wave-picture bg-no-repeat bg-bottom w-full">
      <div className="mx-auto container outline outline-[15px] outline-violet/20 max-w-md bg-white rounded-lg h-full text-maxDarkGray w-sm p-6 mt-auto">
        <Tabs />
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
    </div>
  );
}
