"use client";

import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function carregar() {
      setLoading(true);
      setError(null);

      try {
        const resposta = await fetch(url, { signal: controller.signal });

        if (!resposta.ok) {
          throw new Error("Não foi possível carregar os dados.");
        }

        setData(await resposta.json());
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    carregar();

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
