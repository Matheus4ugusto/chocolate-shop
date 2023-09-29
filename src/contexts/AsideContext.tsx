import { iAsideContext } from "@/types/context";
import { ReactNode, createContext, useContext, useState } from "react";

const AsideContext = createContext<iAsideContext>({} as iAsideContext); //sempre colocar {} as tipagens como default value

const AsideContextProvider = ({ children }: { children: ReactNode }) => {
  const [aside, setAside] = useState<boolean>(false);

  const openAside = () => {
    setAside(true);
  };

  const closeAside = () => {
    setAside(false);
  };

  return (
    <AsideContext.Provider value={{ openAside, closeAside, aside }}>
      {children}
    </AsideContext.Provider>
  );
};

export default AsideContextProvider;

export const useAside = () => useContext(AsideContext);
