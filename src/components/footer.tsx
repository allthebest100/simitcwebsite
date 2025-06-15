'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Github } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  { href: "https://github.com/SIMITClub", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/company/sim-information-technology-club/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/simitclub/", icon: Instagram, label: "Instagram" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/initiatives", label: "Initiatives" },
  { href: "/media-gallery", label: "Media Gallery" },
  { href: "/our-partners", label: "Our Partners" },
  { href: "/join-us", label: "Membership" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-700 bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/images/itc-logo-dark.svg"
                alt="ITC Logo"
                width={50}
                height={50}
              />
              <Image
                src="/images/stdv.png"
                alt="STDV Logo"
                width={300}
                height={100}
              />
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <SocialLink key={social.label} {...social} />
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-xl text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <FooterLink key={link.label} {...link}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="font-bold text-xl text-white mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-2">Have questions? Reach out to us at:</p>
            <a
              href="mailto:it@mymail.sim.edu.sg"
              className="text-red-400 hover:underline"
            >
              it@mymail.sim.edu.sg
            </a>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500"
        >
          © {new Date().getFullYear()} SIM IT Club
        </motion.div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-400 hover:text-red-400 transition-all duration-200 hover:translate-x-1 inline-flex items-center space-x-1"
      >
        <span>{children}</span>
      </Link>
    </li>
  );
}

function SocialLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: React.ElementType;
}) {
  return (
    <motion.a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-5 h-5 text-white" />
    </motion.a>
  );
}
