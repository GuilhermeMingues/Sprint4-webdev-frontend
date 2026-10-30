# JOVI — Smartphone Brasil

Evolução do projeto da Sprint 03. A Landing Page da JOVI, que já tinha sido levada para o React, agora ganhou componentização com props, rotas públicas e privadas, login, hooks customizados e consumo de APIs (uma própria e uma pública de terceiros).

🔗 **Deploy:** [sprint-web-dev3.vercel.app](https://sprint-web-dev3.vercel.app)
🔗 **Repositório:** [github.com/GuilhermeMingues/Sprint-WebDev3](https://github.com/GuilhermeMingues/Sprint-WebDev3)

## Tecnologias utilizadas

- [Next.js](https://nextjs.org/) 16 (App Router), com as rotas de API para o nosso back-end
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) 4, junto com o CSS da marca JOVI que veio da Sprint anterior
- [ViaCEP](https://viacep.com.br/), uma API pública usada para consultar o endereço pelo CEP
- [ESLint](https://eslint.org/) para padronização do código
- Deploy contínuo via [Vercel](https://vercel.com/)

## Como instalar as dependências

Com o [Node.js](https://nodejs.org/) 20 ou superior instalado, clone o repositório e rode dentro da pasta do projeto:

```bash
npm install
```

## Como executar o projeto

Ambiente de desenvolvimento:

```bash
npm run dev
```

Depois é só abrir [http://localhost:3000](http://localhost:3000) no navegador.

Para gerar e rodar a versão de produção:

```bash
npm run build
npm run start
```

## Servidores / Back-end

Não é preciso subir nenhum servidor separado. O back-end fica nas rotas de API do próprio Next.js (`app/api`) e já sobe junto com o `npm run dev`:

| Método | Rota                | O que faz                                                        |
| ------ | ------------------- | ---------------------------------------------------------------- |
| GET    | `/api/configuracoes` | Devolve o preço base, as opções de armazenamento e as cores do simulador |
| POST   | `/api/contato`       | Recebe o formulário de contato, valida e devolve um protocolo     |
| POST   | `/api/login`         | Confere e-mail e senha e devolve o usuário e um token de sessão   |

A consulta de CEP usa a API pública da ViaCEP direto do navegador, então só precisa de internet.

## Usuários e senhas para teste

| E-mail             | Senha      |
| ------------------ | ---------- |
| professor@jovi.com | jovi2026   |
| cliente@jovi.com   | cliente123 |

## Rotas da aplicação

| Rota           | Tipo    | Conteúdo                                                                 |
| -------------- | ------- | ------------------------------------------------------------------------ |
| `/`            | Pública | Landing Page com simulador e formulário de contato                       |
| `/login`       | Pública | Tela de login (quem já está logado é mandado para a área do cliente)      |
| `/minha-conta` | Privada | Histórico de simulações e consulta de prazo e frete pelo CEP              |

Quem tenta abrir `/minha-conta` sem estar logado é redirecionado para `/login`. A sessão fica salva no navegador, então continua ativa depois de recarregar a página, até clicar em **Sair**.

## Estrutura do projeto

```
app/
├── api/            rotas do back-end (configuracoes, contato, login)
├── components/     componentes visuais, cada um na sua pasta
├── context/        AuthContext, que compartilha a sessão com a aplicação toda
├── data/           textos da landing page e usuários de teste
├── hooks/          hooks customizados com a lógica separada do visual
├── login/          página de login
├── minha-conta/    página privada
├── layout.js
└── page.js
```

### Componentes e props

As seções da landing page (`Solution`, `Audience`, `Gallery`, `Team`, `Contact`, `Simulator`) montam a tela a partir de componentes menores que recebem props, como `SectionTitle`, `SolutionCard`, `AudienceItem`, `GalleryCard`, `MemberCard`, `OptionGroup` e `FormField`. Os textos ficam em `app/data/landing.js` e são renderizados com `.map()`.

### Hooks

- **Nativos:** `useState`, `useEffect`, `useContext`, `createContext` e `useSyncExternalStore`.
- **Customizados** (em `app/hooks`):
  - `useFetch`: faz requisições e controla carregamento e erro.
  - `useLocalStorage`: lê e grava valores no `localStorage`, sincronizado entre os componentes.
  - `useSimulator`: regra de preço do simulador, opções vindas da API e histórico.
  - `useContactForm`: validação e envio do formulário de contato.
  - `useAuth` e `useLoginForm`: login, logout e estado da sessão.
  - `useCep`: consulta na ViaCEP e cálculo de prazo e frete por região.

### Funcionalidades

- **Simulador** (seção "Monte o seu JOVI"): as opções vêm da nossa API. O preço usa `Math.random()` para um desconto regional simulado entre 5% e 15%, e as últimas 5 simulações ficam salvas no navegador.
- **Contato:** o formulário valida os campos antes de enviar e mostra o protocolo devolvido pela API.
- **Área do cliente:** depois do login, mostra o histórico de simulações e permite consultar prazo e frete de entrega pelo CEP.
- **Responsividade:** o layout se adapta para desktop, tablet e mobile.

## Uso de Inteligência Artificial no projeto

Usamos o Claude (Anthropic) como apoio em duas frentes. Na parte visual, ele ajudou com ideias e sugestões de estilização no CSS. Na parte de Web Development desta Sprint, usamos o Claude Code para nos ajudar a reorganizar as seções em componentes com props, separar a lógica em hooks customizados, montar o login com rotas públicas e privadas e integrar a nossa API e a ViaCEP. Também usamos para revisar erros de lint e build e para tirar dúvidas sobre o funcionamento dos hooks do React. Todo o código gerado foi lido, testado no navegador e ajustado pela equipe antes de ir para o repositório.

## Equipe

Os nomes completos e RMs dos integrantes estão no arquivo [`INTEGRANTES.txt`](./INTEGRANTES.txt).
