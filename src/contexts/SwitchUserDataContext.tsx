import { iSwitchUserDataContext } from "@/types/context";
import {
  ChangeEvent,
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

const SwitchUserDataContext = createContext<iSwitchUserDataContext>(
  {} as iSwitchUserDataContext
);

const SwitchUserDataContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [editable, setEditable] = useState<boolean>(true);
  const [nameInputValue, setNameInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");

  const handleNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNameInputValue(event.target.value);
  };

  const handleEmailInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailInputValue(event.target.value);
  };

  const edit = () => {
    setEditable(!editable);
  };

  const saveEdit = () => {
    const getUser = localStorage.getItem("user");
    const change = JSON.parse(getUser as string);
    change.name = nameInputValue;
    change.email = emailInputValue;
    const sendChange = JSON.stringify(change);
    localStorage.setItem("user", sendChange);

    location.reload();
  };

  return (
    <SwitchUserDataContext.Provider
      value={{
        edit,
        editable,
        saveEdit,
        handleNameInputChange,
        handleEmailInputChange,
        nameInputValue,
        emailInputValue,
      }}
    >
      {children}
    </SwitchUserDataContext.Provider>
  );
};

export default SwitchUserDataContextProvider;

export const useSwitchUserData = () => useContext(SwitchUserDataContext);
