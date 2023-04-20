export default function TabLink({ isActive, onTabToggle, label }) {
  return (
    <button
      onClick={onTabToggle}
      className={` rounded-full px-12 md:px-16 py-2 relative border transition-all duration-300  ${
        isActive
          ? 'pointer-events-none border-brighterViolet text-darkViolet z-10 bg-white font-medium'
          : 'border-brightGray bg-brightGray text-veryDarkGray hover:bg-brighterViolet hover:text-white'
      }`}
    >
      {label}
    </button>
  );
}
