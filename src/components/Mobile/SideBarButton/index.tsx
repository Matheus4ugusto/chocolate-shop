import { useAside } from "@/contexts/AsideContext";
import * as S from "./SideBarButton.style";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";

const SideBarButton: React.FC = () => {
  const { openAside, closeAside, aside } = useAside();

  return (
    <>
      {!aside ? (
        <S.Button onClick={openAside}>
          <AiOutlineMenu />
        </S.Button>
      ) : (
        <S.Button onClick={closeAside}>
          <AiOutlineCloseCircle />
          <S.Data>
            
          </S.Data>
        </S.Button>
      )}
    </>
  );
};

export default SideBarButton;
