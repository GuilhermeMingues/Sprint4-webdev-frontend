"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "../../hooks/useAuth";

function PrivateRoute({ children }) {
  const { autenticado, pronto } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (pronto && !autenticado) router.replace("/login");
  }, [pronto, autenticado, router]);

  if (!pronto || !autenticado) {
    return (
      <div className="grid min-h-screen place-items-center text-sm text-jovi-faint">
        Verificando acesso...
      </div>
    );
  }

  return children;
}

export default PrivateRoute;
