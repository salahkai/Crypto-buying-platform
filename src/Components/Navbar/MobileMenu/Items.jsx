import Item from '../Items/Item';
export default function Items() {
  const menuItems = [
    { name: 'About us', link: '#' },
    { name: 'Contact', link: '#' },
    { name: 'Help Center', link: '#' },
  ];
  return (
    <div className="flex flex-col items-center gap-6">
      {menuItems.map((i) => (
        <Item name={i.name} link={i.link}></Item>
      ))}
    </div>
  );
}
