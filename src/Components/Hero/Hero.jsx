import AnimatedImage from './AnimatedImage';
export default function Hero() {
  return (
    <section className="container my-8 lg:h-[calc(100vh-6rem)] flex flex-col-reverse lg:flex-row lg:justify-between xl:justify-around ">
      <div className="flex flex-col items-center lg:items-start md:mt-8 text-center lg:text-left">
        <h1 className="text-6xl lg:text-7xl font-semibold ">
          Crypto just<br></br> got <span className="font-bold">easy</span>
        </h1>
        <p className="mt-8 mb-8 break-words w-96">
          Our platform offers quick and secure purchase of digital assets with
          various payment options and a user-friendly interface.
        </p>
        <div className="flex space-x-4 pt-2.5 mt-5 mb-10 ">
          <button className="py-3 pt-2.5 rounded-full border-solid border border-white transition-colors duration-800 bg-white text-darkViolet font-medium hover:bg-brightGray hover:text-darkViolet hover:border-brightGray focus:ring focus:ring-white/10 px-8">
            Get Started
          </button>
          <button className="py-3 pt-2.5 rounded-full border-solid border border-white transition-colors duration-800 hover:bg-darkViolet focus:ring focus:ring-white/[.07] px-5">
            Learn More
          </button>
        </div>
      </div>
      <AnimatedImage />
    </section>
  );
}
