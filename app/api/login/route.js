import { usuarios } from "../../data/usuarios";

export async function POST(request) {
  const { email, senha } = await request.json();

  const usuario = usuarios.find(
    (u) => u.email === email?.trim().toLowerCase() && u.senha === senha
  );

  if (!usuario) {
    return Response.json({ erro: "E-mail ou senha incorretos." }, { status: 401 });
  }

  return Response.json({
    token: crypto.randomUUID(),
    usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email },
  });
}
