import { iSwitchUserDataContext } from "@/types/context";
import { createContext, ReactNode, useContext, useState } from "react";

const SwitchUserDataContext = createContext<iSwitchUserDataContext>(
  {} as iSwitchUserDataContext
);

const SwitchUserDataContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [editable, setEditable] = useState<boolean>(true);
  const edit = () => {
    setEditable(!editable);
  };

  return (
    <SwitchUserDataContext.Provider value={{ edit, editable,  }}>
      {children}
    </SwitchUserDataContext.Provider>
  );
};

export default SwitchUserDataContextProvider;

export const useSwitchUserData = () => useContext(SwitchUserDataContext);
