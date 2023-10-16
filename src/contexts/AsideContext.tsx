import { iAsideContext } from "@/types/context";
import { ReactNode, createContext, useContext, useState } from "react";

const AsideContext = createContext<iAsideContext>({} as iAsideContext); //sempre colocar {} as tipagens como default value

const AsideContextProvider = ({ children }: { children: ReactNode }) => {
  const [asideMobile, setAsideMobile] = useState<boolean>(false);

  const openAsideMobile = () => {
    setAsideMobile(true);
  };

  const closeAsideMobile = () => {
    setAsideMobile(false);
  };

  return (
    <AsideContext.Provider value={{ openAsideMobile, closeAsideMobile, asideMobile }}>
      {children}
    </AsideContext.Provider>
  );
};

export default AsideContextProvider;

export const useAside = () => useContext(AsideContext);
