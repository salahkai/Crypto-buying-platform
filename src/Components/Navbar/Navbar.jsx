import Logo from './Logo';
import Items from './Items/Items';
import Buttons from './Buttons/Buttons';
import MobileMenu from './MobileMenu/MobileMenu';
import HamburgerMenu from './MobileMenu/HamburgerMenu';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  return (
    <nav className="relative container p-6 mx-auto h-24 ">
      <div className="relative flex items-center justify-between z-20">
        <Logo />
        <Items />
        <Buttons />
        <HamburgerMenu
          onToggle={() => setMobileMenuActive(!mobileMenuActive)}
        />
      </div>
      <MobileMenu isActive={mobileMenuActive} />
    </nav>
  );
}
