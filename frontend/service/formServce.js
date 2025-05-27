// services/formService.js

export const enviarFormulario = async (dados) => {
  try {
    const response = await fetch("http://localhost:3001/addRow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values: [[
          dados.nome,
          dados.email,
          dados.telefone,
          dados.valor
        ]]
      }),
    });

    if (!response.ok) {
      throw new Error("Erro ao enviar dados para o backend");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro no envio:", error);
    throw error;
  }
};
