'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import "./style.scss";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="position-relative header bg-white position-sticky top-0 z-3">
      <div className="container d-flex flex-wrap justify-content-between align-items-center">

        <Link href="/" className="logo">
          <Image src="/logo.png" alt="Splendour in Stone" width={177} height={52} className="lazyload" />
        </Link>

        <nav className={`navbar ${open ? 'open' : ''}`}>
          <ul className="nav">
            <li><Link href="/products" onClick={() => setOpen(false)}>Products</Link></li>
            <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
            <li><Link href="/gallery" onClick={() => setOpen(false)}>Gallery</Link></li>
            <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
          </ul>
        </nav>

        <button
          className={`menu-toggle ${open ? 'active' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div> 
    </header>
  );
}
