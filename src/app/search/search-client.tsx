"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ChipInput from "@/components/molecules/ChipInput";
import KeywordList from "@/components/molecules/KeywordList";
import Button from "@/components/atoms/Button";
import { InspirationType } from "@/lib/inspirationStrategies";

type Props = {
  type: InspirationType;
  placeholder: string;
  keywords: string[];
  initialTokens: string[];
};

export default function SearchClient({ type, placeholder, keywords, initialTokens }: Props) {
  const [tokens, setTokens] = useState<string[]>(initialTokens);
  const router = useRouter();
  const params = useSearchParams();

  // (Opcional) reflejar en URL sin recargar
  useEffect(() => {
    const usp = new URLSearchParams(params.toString());
    if (tokens.length > 0) usp.set("tokens", tokens.join(","));
    else usp.delete("tokens");
    usp.set("type", type);
    router.replace(`/search?${usp.toString()}`, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokens, type]);

  const addFromKeyword = useCallback(
    (word: string) => {
      setTokens((prev) =>
        prev.some((t) => t.toLowerCase() === word.toLowerCase()) ? prev : [...prev, word]
      );
    },
    []
  );

  const handleSearch = useCallback(async () => {
    // Payload listo para backend
    const payload = { type, tokens };

    // TEMP: demo sin backend
    if (tokens.length === 0) {
      alert("Agrega al menos una ficha para buscar.");
      return;
    }
    console.log("Buscar imágenes >>", payload);
    alert(`Buscando ${type} con: ${tokens.join(", ")}`);

    // CUANDO CONECTES BACKEND (MOTOR-BACKEND):
    // const base = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";
    // const qs = new URLSearchParams({ type, tokens: tokens.join(",") });
    // const res = await fetch(`${base}/inspirations?${qs.toString()}`);
    // const data = await res.json();
    // TODO: render resultados en la misma página o navegar a /results
  }, [type, tokens]);

  // ...
return (
  <>
    <div className="flex items-center gap-3 mb-4">
      <ChipInput
        tokens={tokens}
        onTokensChange={setTokens}
        placeholder={placeholder}
        className="w-full"    // ocupa el ancho fijo del contenedor padre
      />
      <Button
        label="Buscar"
        variant="category"
        onClick={handleSearch}
        className="whitespace-nowrap"
      />
    </div>

    <KeywordList keywords={keywords} type={type} onAdd={addFromKeyword} />
  </>
  );
}

