export default function TabLink({ isActive, onActivateTab }) {
  return (
    <button
      onClick={onActivateTab}
      className={` rounded-full px-16 py-2 relative border transition-all duration-300 ${
        isActive
          ? 'pointer-events-none border-brighterViolet text-darkViolet z-10 bg-white font-medium'
          : 'border-brightGray bg-brightGray text-veryDarkGray hover:bg-brighterViolet hover:text-white'
      }`}
    >
      Buy Crypto
    </button>
  );
}
