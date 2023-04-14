import Items from './Items';

export default function MobileMenu({ isActive }) {
  return (
    <div
      className={`text-black font-bold overflow-hidden drop-shadow-2xl transition-all duration-700 
      absolute top-full flex flex-col items-center justify-evenly bg-white w-full left-0 ${
        isActive ? 'h-40' : 'h-0'
      }`}
    >
      <Items />
    </div>
  );
}
