import Item from './Item';
export default function Items() {
  const menuItems = [
    { name: 'About us', link: '#' },
    { name: 'Contact', link: '#' },
    { name: 'Help Center', link: '#' },
  ];
  return (
    <div className="space-x-5 hidden md:block ">
      {menuItems.map((i) => (
        <Item name={i.name} link={i.link}></Item>
      ))}
    </div>
  );
}
