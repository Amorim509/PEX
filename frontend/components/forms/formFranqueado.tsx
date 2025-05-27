'use client'

import React, { useState } from "react";
import { enviarFormulario } from "@/service/formServce";

const InvestmentForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    valor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resposta = await enviarFormulario(formData);
      console.log("Resposta da API:", resposta);
      alert("Formulário enviado com sucesso!");
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        valor: ""
      });
    } catch (error) {
      alert("Erro ao enviar o formulário. Verifique os dados e tente novamente.");
    }
  };

  return (
    <section className="flex mt-4 justify-center">
      <div className="flex bg-white rounded-2xl shadow-md overflow-hidden max-w-4xl w-full">
        <form
          onSubmit={handleSubmit}
          className="w-3/5 p-6 space-y-4"
        >
          <h2 className="text-xl font-semibold text-gray-800">Formulário de Investimento</h2>

          <div>
            <label className="block text-sm font-medium text-gray-700">Nome completo</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Telefone</label>
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Valor para investir</label>
            <select
              name="valor"
              value={formData.valor}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
              required
            >
              <option value="">Selecione uma opção</option>
              <option value="R$ 100.000,00 - R$ 200.000,00">R$100.000 à R$200.000</option>
              <option value="R$ 200.000,00 - R$ 400.000,00">R$200.000 à R$400.000</option>
              <option value="Mais de R$ 400.000,00">Mais de R$400.000</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </form>

        <div className="w-2/5 bg-blue-600 flex flex-col items-center justify-center p-4">
          <img src="/logo.png" alt="Logo marca" className="w-30 h-auto mb-4" />
          <p className="text-gray-100 text-xl text-center">
            onde o cuidado e o bem-estar se encontram.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentForm;
