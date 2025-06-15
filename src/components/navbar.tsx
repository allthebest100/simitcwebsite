'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Instagram, Linkedin } from 'lucide-react';
import { usePathname } from 'next/navigation';

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  {
    name: 'Initiatives',
    href: '/initiatives',
    dropdown: [
      { name: 'Hackathons', href: '/initiatives/hackathons' },
      { name: 'Workshops', href: '/initiatives/workshops' },
      { name: 'Events', href: '/initiatives/events' },
      { name: 'Projects', href: '/initiatives/projects' },
    ],
  },
  { name: 'Media Gallery', href: '/media-gallery' },
  { name: 'Our Partners', href: '/our-partners' },
  { name: 'Join Us', href: '/join-us' },
  { name: 'Contact Us', href: '/contact-us' },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="bg-black shadow-sm z-50 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/itc-logo-dark.svg" alt="ITC Logo Dark" width={50} height={50} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white">
          {menuItems.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="relative">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 hover:text-red-500 transition focus:outline-none"
                  onClick={(e) => {
                    // 阻止跳转，用于展开 dropdown
                    if (activeDropdown !== item.name) {
                      e.preventDefault();
                      setActiveDropdown(item.name);
                    } else {
                      setActiveDropdown(null);
                    }
                  }}
                >
                  {item.name}
                  <ChevronDown className="w-4 h-4" />
                </Link>
                {activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-black shadow-lg border border-gray-700 rounded z-50">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-red-500 transition"
              >
                {item.name}
              </Link>
            )
          )}

          {/* Social Icons */}
          <div className="flex items-center gap-3 ml-4">
            <Link
              href="https://www.instagram.com/simitclub/"
              target="_blank"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-white hover:text-pink-500" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/sim-information-technology-club/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white hover:text-blue-400" />
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav className="md:hidden px-6 pb-6">
          <div className="flex flex-col gap-4 text-sm font-medium text-white">
            {menuItems.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="flex flex-col gap-1">
                  <button
                    onClick={() =>
                      setActiveDropdown(activeDropdown === item.name ? null : item.name)
                    }
                    className="inline-flex items-center gap-1 hover:text-red-500"
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {activeDropdown === item.name && (
                    <div className="ml-4 mt-1 flex flex-col gap-1">
                      <Link
                        href={item.href}
                        className="text-white hover:text-red-500"
                        onClick={() => {
                          setMobileOpen(false);
                          setActiveDropdown(null);
                        }}
                      >
                        {item.name} Overview
                      </Link>
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => {
                            setActiveDropdown(null);
                            setMobileOpen(false);
                          }}
                          className="hover:text-red-500"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-red-500"
                >
                  {item.name}
                </Link>
              )
            )}

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-4">
              <Link
                href="https://www.instagram.com/simitclub/"
                target="_blank"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white hover:text-pink-500" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/sim-information-technology-club/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white hover:text-blue-400" />
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
