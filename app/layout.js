import "./globals.css";
import { AuthProvider } from "./context/AuthContext";

export const metadata = {
  title: "JOVI — Smartphone Brasil",
  description: "Tecnologia pensada para o Brasil.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
