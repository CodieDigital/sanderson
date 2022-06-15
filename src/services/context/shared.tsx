import api from "src/services/api_cep";
import { useEffect, useState, createContext, ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

interface Props {
  facebook?: string;
  instagram?: string;
  logradouro?: string;
}

export const SharedContext = createContext<Props>({});

export function SharedProvider({ children }: ProvidersProps) {
  const [response, setResponse] = useState<Props>({});

  useEffect(() => {
    api.get("86010190/json").then((response) => setResponse(response.data));
  }, []);

  return (
    <SharedContext.Provider value={response}>{children}</SharedContext.Provider>
  );
}
