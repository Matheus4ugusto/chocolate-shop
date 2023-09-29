import * as S from "./searchBar.style";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar: React.FC = () => {
  return (
    <>
      <S.SpanIcon>
        <AiOutlineSearch />
      </S.SpanIcon>
      <S.Input placeholder="Pesquise aqui..." />
      <S.Button type="submit">Pesquisar</S.Button>
      <S.MobileSearchButton>
        {" "}
        <AiOutlineSearch />{" "}
      </S.MobileSearchButton>
    </>
  );
};

export default SearchBar;
