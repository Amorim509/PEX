'use client'

import { motion } from "framer-motion";

export default function Atuacao() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="w-[90%] m-auto items-center justify-center py-10 px-4 bg-white rounded-md">
      <motion.h2
        className="text-4xl text-white font-bold text-center p-4 bg-blue-600 rounded-t-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Atuação
      </motion.h2>

      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-4 mb-1 bg-blue-600 rounded-b-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="md:w-1/2 flex justify-center items-center">
          <motion.img
            src="/logo.png"
            alt="Descrição da imagem"
            className="w-[50%] h-auto rounded-lg object-cover"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>

        <div className="hidden md:block mb-4 h-32 w-2 bg-cyan-400 rounded-full" />

        <div className="md:w-1/2 text-justify">
          <motion.h2
            className="text-4xl text-white font-bold text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Suporte ao franqueado
          </motion.h2>
        </div>
      </motion.div>

      <motion.div
        className="w-[100%] ml-auto mr-0 bg-cyan-500 rounded-bl-full py-6 px-4 text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <p className="text-2xl text-white font-semibold">
          Programas e estratégias de comunicação e vendas.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {[
          {
            img: "/file.png",
            text: "Fase regulatória ou de pré-inauguração",
          },
          {
            img: "/cutting.png",
            text: "Fase operacional ou de inauguração",
          },
          {
            img: "/store.png",
            text: "Fase gerencial ou de pós-inauguração",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.img
              src={item.img}
              alt={item.text}
              className="w-[25%] h-auto rounded-md mx-auto"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <p className="mt-6 text-[20px] font-semibold text-gray-500">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
