import React from 'react';
export default function Item({ name, link }) {
  return (
    <a className="hover:font-bold duration-700 transition-all" href={link}>
      {name}
    </a>
  );
}
