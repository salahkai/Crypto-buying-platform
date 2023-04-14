import { IconMenu2 } from '@tabler/icons-react';

export default function HamburgerMenu({ onToggle }) {
  return (
    <button className="md:hidden" onClick={onToggle}>
      <IconMenu2 />
    </button>
  );
}
