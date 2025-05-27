import Link from 'next/link';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="w-full">
      <div className="w-full bg-gradient-to-r from-blue-700 to-cyan-500 text-white text-sm py-1 px-6 flex justify-end gap-4">
        <Link
          href="https://www.instagram.com/varella.drogaria/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-gray-100 hover:scale-105 transition-colors"
        >
          <FaInstagram /> Instagram
        </Link>
        <Link
          href="https://wa.me/5512997959783"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-gray-100 hover:scale-105 transition-colors"
        >
          <FaWhatsapp /> WhatsApp
        </Link>
      </div>
      <header className="w-full px-6 py-2 bg-gradient-to-r from-blue-700 to-cyan-500 text-white flex items-center justify-between shadow-md">
        <Link href="/" className="hover:scale-105 transition-transform">
          <img
            src="/logo.png"
            alt="Logo Drogaria Varella"
            className="max-w-[230px] w-full h-auto object-contain"
          />
        </Link>
        <nav className="hidden md:flex gap-8 text-base font-medium">
          <Link href="#quem-somos" className="hover:scale-105 text-gray-100 transition-all">Quem somos</Link>
          <Link href="#investir" className="hover:scale-105 text-gray-100 transition-all">Por que investir</Link>
          <Link href="#contato" className="hover:scale-105 text-gray-100 transition-all">Contato</Link>
        </nav>
      </header>
    </div>
  );
}
