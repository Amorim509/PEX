import Link from "next/link";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full p-4 bg-gray-800 text-white mt-8">
      <div id="contato" className="flex flex-col md:flex-row justify-between items-center px-6 gap-6">
        {/* Links sociais */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center p-4 gap-4 text-sm">
          <img src={"/logo.png"} alt="logo marca" className="w-[40%] h-auto mb-4"></img>
          <Link
            href="https://www.instagram.com/varella.drogaria/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center text-xl gap-2 text-gray-100"
          >
            <FaInstagram /> Instagram
          </Link>
          <Link
            href="https://wa.me/5512997959783"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center text-xl gap-2 text-gray-100"
          >
            <FaWhatsapp /> WhatsApp
          </Link>
        </div>

        {/* Mapa */}
        <div className="w-full md:w-1/2 h-48 flex flex-col items-center justify-center p-4">
          <h2 className="text-gray-100 text-base mb-4">
            Nossa localização:
          </h2>
          <iframe
            title="Localização"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3671.1917062352345!2d-45.606957724685316!3d-23.053432279152137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDAzJzEyLjQiUyA0NcKwMzYnMTUuOCJX!5e0!3m2!1spt-BR!2sbr!4v1748353346094!5m2!1spt-BR!2sbr"
            width="80%"
            height="100%"
            style={{ 
              border: 0,
              borderRadius: 20
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <p className="text-center text-sm mt-4">© 2025 - Todos os direitos reservados</p>
    </footer>
  );
}
