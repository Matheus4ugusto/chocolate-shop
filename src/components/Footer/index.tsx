import Link from "next/link";
import * as S from "./footer.style";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";

const Footer: React.FC = () => {
  return (
    <>
      <S.DivFooter>
        <section>
          <S.H1>Chocolate Shop</S.H1>
          <S.Description>
            Bem-vindo à nossa encantadora loja de chocolates gourmet, onde o
            sabor se transforma em arte. Aqui, cada pedaço é uma experiência
            requintada, cuidadosamente elaborada por mestres chocolatiers com os
            melhores ingredientes. Explore um mundo de pralinés recheados,
            trufas sedutoras e barras de chocolate de dar água na boca. Deixe-se
            envolver pela indulgência doce e sofisticada que só os verdadeiros
            amantes do chocolate podem apreciar.
          </S.Description>
        </section>
        <section>
          <S.H1>Redes Sociais</S.H1>
          <S.Ul>
            <li>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                style={{ color: "#F2E0C5" }}
              >
                <BsInstagram /> <span>Instagram</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com"
                target="_blank"
                style={{ color: "#F2E0C5" }}
              >
                <BsFacebook /> <span>Facebook</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://encurtador.com.br/byzFJ"
                target="_blank"
                style={{ color: "#F2E0C5" }}
              >
                <AiFillLinkedin /> <span>LinkedIn</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com"
                target="_blank"
                style={{ color: "#F2E0C5" }}
              >
                <AiFillYoutube /> <span>Youtube</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.twitter.com"
                target="_blank"
                style={{ color: "#F2E0C5" }}
              >
                <RiTwitterXLine /> <span>Twitter</span>
              </Link>
            </li>
          </S.Ul>
        </section>
        <section>
          <S.H1>Contato</S.H1>
          <S.Ul>
            <li>
              <span>Telefone: (+99) 9 9999-9999</span>
            </li>
            <li>
              <span>WhatsApp: (+11) 1 1111-1111</span>
            </li>
            <li>
              <span>Email: email@mail.com.br</span>
            </li>
          </S.Ul>
        </section>
      </S.DivFooter>
    </>
  );
};

export default Footer;
