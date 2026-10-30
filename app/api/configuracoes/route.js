const configuracoes = {
  precoBase: 1899,
  armazenamentos: [
    { id: "64gb", label: "64GB", multiplicador: 1 },
    { id: "128gb", label: "128GB", multiplicador: 1.15 },
    { id: "256gb", label: "256GB", multiplicador: 1.35 },
  ],
  cores: [
    { id: "ebony", label: "Ebony Clay", adicional: 0 },
    { id: "branco", label: "Branco Puro", adicional: 0 },
    { id: "azul", label: "Azul JOVI", adicional: 80 },
  ],
};

export function GET() {
  return Response.json(configuracoes);
}
