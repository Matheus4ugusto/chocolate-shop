import { useSwitchUserData } from "@/contexts/SwitchUserDataContext";
import * as S from "./userDataButton.style";
import { FaRegEdit } from "react-icons/fa";
import { MdDone } from "react-icons/md";

const UserDataButton: React.FC = () => {
  const { edit, editable, saveEdit } = useSwitchUserData();

  return editable ? (
    <S.Button onClick={edit}>
      <FaRegEdit /> Editar dados
    </S.Button>
  ) : (
    <S.Button onClick={saveEdit}>
      <MdDone /> Salvar Alterações
    </S.Button>
  );
};

export default UserDataButton;
