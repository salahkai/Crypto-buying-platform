import Button from './Button';

export default function Buttons() {
  const buttons = [
    { name: 'Log in', link: '#', type: 'normal' },
    { name: 'Buy Crypto', link: '#', type: 'action' },
  ];
  return (
    <div className="space-x-5 hidden md:block">
      {buttons.map((b, index) => (
        <Button key={index} name={b.name} link={b.link} type={b.type}></Button>
      ))}
    </div>
  );
}
