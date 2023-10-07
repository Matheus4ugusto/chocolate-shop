import { useSwitchUserData } from "@/contexts/SwitchUserDataContext";
import * as S from "./userDataButton.style";
import { FaRegEdit } from "react-icons/fa";

const UserDataButton: React.FC = () => {

    const {edit} = useSwitchUserData()

  return (
    <>    
    <S.Button onClick={edit}>
      <FaRegEdit />
    </S.Button>

    </>

  );
};

export default UserDataButton;
