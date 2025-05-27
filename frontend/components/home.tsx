import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
        <section
        className="relative overflow-hidden py-20 bg-no-repeat bg-cover bg-right"
        style={{
            backgroundImage: "url('/chat2.png')",
            backgroundPosition: '80% center'
        }}
        >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600/80 to-transparent z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-0 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div className="space-y-6 text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Invista no futuro da saúde com a Drogaria Varella
            </h1>
            <p className="text-lg md:text-xl">
                Uma rede consolidada, confiável e em plena expansão. Junte-se a um modelo de sucesso e transforme sua região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/form">
                <button className="text-base px-6 py-3 rounded-full bg-gray-100 text-blue-600 hover:bg-blue-100">
                    Seja um franqueado
                </button>
                </Link>
                <Link href="#contato">
                <button className="text-base px-6 py-3 rounded-full bg-blue-800 hover:bg-blue-900 text-white">
                    Fale conosco
                </button>
                </Link>
            </div>
            </div>
        </div>
        </section>

  );
}
