export default function Button({ name, link, type }) {
  return (
    <a
      className={`py-3 pt-2.5 rounded-full border-solid border border-white transition-colors duration-800	${
        type === 'action'
          ? 'bg-white text-darkViolet font-medium hover:bg-brightGray hover:text-darkViolet hover:border-brightGray focus:ring focus:ring-white/10 px-4'
          : 'hover:bg-darkViolet focus:ring focus:ring-white/[.07] px-6'
      }`}
      href={link}
    >
      {name}
    </a>
  );
}
