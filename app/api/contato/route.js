export async function POST(request) {
  const { nome, email, mensagem } = await request.json();

  if (!nome?.trim() || !email?.includes("@") || !mensagem?.trim()) {
    return Response.json(
      { erro: "Preencha nome, e-mail e mensagem corretamente." },
      { status: 400 }
    );
  }

  return Response.json(
    {
      protocolo: `JOVI-${Date.now().toString().slice(-6)}`,
      mensagem: `Obrigado, ${nome.split(" ")[0]}! Recebemos sua mensagem.`,
    },
    { status: 201 }
  );
}
